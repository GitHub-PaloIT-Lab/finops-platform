# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Setup

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Frontend Components

## Overview
This document describes the frontend components required for the FinOps Platform to consume the backend APIs.

## Components

1. **Data Aggregation**
   - **Component**: `DataAggregation`
   - **Description**: Fetches and displays data aggregation from various cloud providers and on-premises datacenters.
   - **Implementation**: `src/components/DataAggregation.js`

2. **Cost Optimization**
   - **Component**: `CostOptimization`
   - **Description**: Fetches and displays cost optimization insights.
   - **Implementation**: `src/components/CostOptimization.js`

3. **Service Reliability**
   - **Component**: `ServiceReliability`
   - **Description**: Fetches and displays service reliability information.
   - **Implementation**: `src/components/ServiceReliability.js`

4. **Automated Decision Making**
   - **Component**: `AutomatedDecisionMaking`
   - **Description**: Automates infrastructure decisions based on predefined rules and machine learning models.
   - **Implementation**: `src/components/AutomatedDecisionMaking.js`

5. **Dashboard**
   - **Component**: `Dashboard`
   - **Description**: Fetches and displays customizable dashboards for different teams.
   - **Implementation**: `src/components/Dashboard.js`

6. **Alerts**
   - **Component**: `Alerts`
   - **Description**: Fetches and displays alerts and notifications for cost anomalies, performance issues, and optimization opportunities. Allows creating new alerts.
   - **Implementation**: `src/components/Alerts.js`

## API Service

The API service handles requests to the backend APIs.

- **File**: `src/api/apiService.js`
- **Description**: Contains functions to make API requests to the backend.

## Additional Information
For more details on the implementation, refer to the respective component files in the `src/components` folder.

## Navigation
The application includes a navigation menu to access the main features:
- Alerts
- Automated Decision Making
- Cost Optimization
- Dashboard
- Data Aggregation
- Service Reliability

# Usage

