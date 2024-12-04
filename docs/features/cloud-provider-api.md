
# Cloud Provider API

## Overview
The Cloud Provider API allows users to fetch cloud cost data for different providers such as AWS, Azure, GCP, and VMware.

## Endpoints
- `GET /api/cloud-costs`: Fetch cloud cost data.

## Query Parameters
- `provider`: The cloud provider (e.g., aws, azure, gcp, vmware).
- `project`: (Optional) The project or subscription ID to filter the data.

## Implementation
The implementation details can be found in the following files:
- Routes: `backend/routes/cloudProviderRoutes.js`
- Controller: `backend/controllers/cloudProviderController.js`
- Service: `backend/services/cloudProviderService.js`
- Middleware: `backend/middlewares/errorMiddleware.js`