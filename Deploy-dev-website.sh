#!/bin/bash

# Variables
RESOURCE_GROUP="TL-GLB-Dev-RG"
APP_SERVICE_PLAN="TL-GLB-Dev-Plan"
WEB_APP_NAME="TL-GLB-Dev-WebApp"
ACI_NAME="tb-glb-dev-aci"  # Lowercase for ACI compliance
LOCATION="eastus"
ACR_NAME="tlgldevacr"  # ACR name (lowercase, as provided)
IMAGE_NAME="tlgldevacr.azurecr.io/tedlabs-webapp:latest"  # Full image path

# Step 1: Create Resource Group (if it doesn’t exist)
echo "Ensuring resource group $RESOURCE_GROUP exists..."
az group create --name $RESOURCE_GROUP --location $LOCATION --output none || {
    echo "Resource group $RESOURCE_GROUP already exists or creation failed."
}

# Step 2: Register Microsoft.ContainerInstance Provider
echo "Registering Microsoft.ContainerInstance provider (this may take a few minutes)..."
az provider register --namespace Microsoft.ContainerInstance --output none
echo "Waiting for Microsoft.ContainerInstance provider to register..."
until [ "$(az provider show --namespace Microsoft.ContainerInstance --query 'registrationState' --output tsv)" == "Registered" ]; do
    echo "Provider registration in progress..."
    sleep 30  # Check every 30 seconds
done
echo "Microsoft.ContainerInstance provider registered successfully."

# Step 3: Create Azure Container Registry (if it doesn’t exist)
echo "Creating or verifying ACR $ACR_NAME..."
az acr create \
    --resource-group $RESOURCE_GROUP \
    --name $ACR_NAME \
    --sku Basic \
    --location $LOCATION \
    --admin-enabled true \
    --output none || {
    echo "ACR $ACR_NAME already exists or creation failed."
}

# Step 4: Fetch ACR Credentials
echo "Fetching ACR credentials for $ACR_NAME..."
ACR_SERVER=$(az acr show --name $ACR_NAME --query loginServer --output tsv 2>/dev/null)
ACR_USERNAME=$(az acr credential show --name $ACR_NAME --query username --output tsv 2>/dev/null)
ACR_PASSWORD=$(az acr credential show --name $ACR_NAME --query "passwords[0].value" --output tsv 2>/dev/null)

if [ -z "$ACR_SERVER" ] || [ -z "$ACR_USERNAME" ] || [ -z "$ACR_PASSWORD" ]; then
    echo "ERROR: Could not retrieve credentials for ACR $ACR_NAME. Check subscription and permissions."
    exit 1
fi

# Step 5: Create or Update App Service Plan (if it doesn’t exist)
echo "Creating or updating App Service Plan $APP_SERVICE_PLAN..."
az appservice plan create \
    --name $APP_SERVICE_PLAN \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --sku B1 \
    --is-linux \
    --output none || {
    echo "App Service Plan $APP_SERVICE_PLAN already exists or creation failed."
}

# Step 6: Deploy Web App with Container Configuration
echo "Deploying Web App $WEB_APP_NAME with container $IMAGE_NAME..."
az webapp create \
    --resource-group $RESOURCE_GROUP \
    --plan $APP_SERVICE_PLAN \
    --name $WEB_APP_NAME \
    --output none 2>/dev/null || {
    echo "Web App $WEB_APP_NAME already exists, updating container configuration..."
}

az webapp config container set \
    --resource-group $RESOURCE_GROUP \
    --name $WEB_APP_NAME \
    --container-image-name "$IMAGE_NAME" \
    --container-registry-url "https://$ACR_SERVER" \
    --container-registry-user "$ACR_USERNAME" \
    --container-registry-password "$ACR_PASSWORD" \
    --output none || {
    echo "Failed to configure Web App container settings."
}

# Step 7: Set Web App to expose port 3000 (Next.js default)
echo "Setting port configuration to 3000 for Web App..."
az webapp config appsettings set \
    --resource-group $RESOURCE_GROUP \
    --name $WEB_APP_NAME \
    --settings WEBSITES_PORT=3000 \
    --output none

# Step 8: Deploy Azure Container Instance (ACI)
echo "Deploying Azure Container Instance $ACI_NAME with container $IMAGE_NAME..."
az container create \
    --resource-group $RESOURCE_GROUP \
    --name $ACI_NAME \
    --image "$IMAGE_NAME" \
    --registry-login-server "$ACR_SERVER" \
    --registry-username "$ACR_USERNAME" \
     --registry-password "$ACR_PASSWORD" \
    --os-type Linux \
    --cpu 1 \
    --memory 1 \
    --ports 3000 \
    --dns-name-label "$ACI_NAME" \
    --location $LOCATION \
    --restart-policy OnFailure \
    --output none || {
    echo "Failed to create or update ACI $ACI_NAME. It may already exist or the image $IMAGE_NAME is not in ACR."
    echo "Check ACI logs: az container logs --resource-group $RESOURCE_GROUP --name $ACI_NAME"
}

# Step 9: Verify Web App Deployment
echo "Verifying Web App deployment..."
az webapp show \
    --resource-group $RESOURCE_GROUP \
    --name $WEB_APP_NAME \
    --query "{state:state, defaultHostName:defaultHostName}" \
    --output table

# Step 10: Verify ACI Deployment
echo "Verifying ACI deployment..."
ACI_FQDN=$(az container show \
    --resource-group $RESOURCE_GROUP \
    --name $ACI_NAME \
    --query "ipAddress.fqdn" \
    --output tsv 2>/dev/null)

if [ -n "$ACI_FQDN" ]; then
    echo "ACI deployed successfully! Access at: http://$ACI_FQDN:3000"
else
    echo "Failed to retrieve ACI FQDN. Check deployment status with: az container show --resource-group $RESOURCE_GROUP --name $ACI_NAME"
    echo "Ensure the image $IMAGE_NAME is pushed to ACR $ACR_NAME."
fi

# Step 11: Final Message
echo "Deployment complete!"
echo "Web App URL: https://$WEB_APP_NAME.azurewebsites.net"
echo "ACI URL: http://$ACI_FQDN:3000 (if running)"
echo "Next steps: Build and push the Docker image to ACR if not already done (see instructions below)."