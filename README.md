# TedLabs React Application

This is a React application built with Vite.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Containerization

The application is containerized using Docker. To build and run the container locally:

```bash
# Build the Docker image
docker build -t tedlabs:latest .

# Run the container
docker run -p 8080:80 tedlabs:latest
```

The application will be available at http://localhost:8080.

## Azure Deployment

The application is configured to be deployed to Azure App Service using Azure Container Registry (ACR).

### Prerequisites

1. Azure subscription
2. Azure Container Registry (ACR)
3. Azure App Service configured for containers

### Pipeline Configuration

The Azure pipeline (`Azure-pipelines-Dev.yml`) is configured to:

1. Build the Docker image
2. Push the image to Azure Container Registry
3. Deploy the container to Azure App Service

### Manual Deployment

To manually deploy to Azure:

```bash
# Login to Azure
az login

# Login to ACR
az acr login --name <your-acr-name>

# Build and tag the image
docker build -t <your-acr-name>.azurecr.io/tedlabs:latest .

# Push to ACR
docker push <your-acr-name>.azurecr.io/tedlabs:latest

# Deploy to App Service
az webapp config container set --name <your-app-name> --resource-group <your-resource-group> --docker-custom-image-name <your-acr-name>.azurecr.io/tedlabs:latest
```
