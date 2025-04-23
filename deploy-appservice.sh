#!/bin/bash
# Set variables
export RESOURCE_GROUP="TL-GLB-Dev-RG"
export APP_SERVICE_PLAN="TL-GLB-Dev-Plan"
export WEB_APP_NAME="TL-GLB-Dev-Website"
export RUNTIME="NODE|22-lts"
export LOCATION="eastus"

# Create the resource group
az group create --name $RESOURCE_GROUP --location $LOCATION

# Create the App Service Plan (Linux-based)
az appservice plan create --name $APP_SERVICE_PLAN --resource-group $RESOURCE_GROUP --sku F1 --is-linux

# Create the Web App
az webapp create --resource-group $RESOURCE_GROUP --plan $APP_SERVICE_PLAN --name $WEB_APP_NAME --runtime $RUNTIME
