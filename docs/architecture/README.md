# Architecture Documentation
// ...existing content...

# Architecture

## High-Level Architecture
The high-level architecture diagram provides an overview of the main components of the FinOps Platform, including the frontend, backend, and infrastructure.

![High-Level Architecture](highlevel-architecture.png)

### Components
- **Frontend**: Developed using React, the frontend provides the user interface for interacting with the platform.
- **Backend**: Built with Node.js, the backend handles business logic, data processing, and API services.
- **Infrastructure**: Managed using Terraform, the infrastructure includes all the necessary resources for deploying and running the platform in both test and production environments.

## Frontend Components
### CostOptimization
The `CostOptimization` component uses `react-chartjs-2` and `chart.js` to render a pie chart. Ensure that `ArcElement`, `Tooltip`, and `Legend` are registered from `chart.js` for the chart to function correctly.

Implementation details can be found in `frontend/src/components/CostOptimization.js`.