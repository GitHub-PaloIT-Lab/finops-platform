# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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