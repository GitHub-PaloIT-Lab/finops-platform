# Cloud Provider API Integration

## Overview
This feature provides a module for connecting to various cloud provider APIs to retrieve cost and usage data. It supports the following APIs:
- AWS Cost and Usage Report API
- Google Cloud Billing API
- Azure Cost Management API
- VMware vCenter API for on-premises environments

## Endpoints
- `GET /api/cloud-costs?provider=aws&project={project_id}`: Returns cost and usage data from AWS for a specific project.
- `GET /api/cloud-costs?provider=gcp&project={project_id}`: Returns cost and usage data from Google Cloud for a specific project.
- `GET /api/cloud-costs?provider=azure&project={project_id}`: Returns cost and usage data from Azure for a specific project.
- `GET /api/cloud-costs?provider=vmware&project={project_id}`: Returns cost and usage data from VMware vCenter for a specific project.
- `GET /api/cloud-costs?provider={provider}`: Returns cost and usage data from the specified provider for all projects in the user's scope.

## Implementation
The implementation details can be found in the `backend/cloud-provider-api.js` file.