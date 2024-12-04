# infrastructure as code
- We use terraform for infrastructure as code.
- The terraform files are stored in the infrastructure folder.
- Ensure terraform code is modular.
- Ensure code be leveraged to create test and production environments. 

# Backend
- Store configuration settings in environment variables using a .env file.
- All the components of the backend are stored in the src folder. The main components are routes, controllers, models, services, and middleware. The main application script is app.js in the src folder.
- Use middleware for common tasks such as logging, authentication, and error handling.
- Separate route definitions into their own files and use the Express Router to modularize routes.
- Use controllers to handle the logic for each route.
- Use models to interact with the database, using an ORM like Mongoose for MongoDB or Sequelize for SQL databases.
- Use services to encapsulate business logic and interact with models.
- Group routes, controllers, models and services by features. Each feature should have its own folder.
- Implement centralized error handling to manage errors consistently across the application.
- Validate request data using libraries like Joi or express-validator.
- if a new endpoint is modified, make sure to update the postnman collection in the postman folder.

# Frontend
- the react project is organised in the src folder. These are the important sub-folders within the src folder:
    - components: Contains all the reusable components used in the application.
    - pages: Contains the main pages of the application.
    - utils: Contains utility functions used throughout the application.
- Place reusable components in the components directory. Group them by feature or functionality.
- Place page-level components in the pages directory. These components represent different routes in your application.
- Group related components, hooks, and services by feature to keep the codebase modular and organized.
- Use PascalCase for component names (e.g., MyComponent).
- Use the same name for the file as the component it exports (e.g., MyComponent.js).
- Use React's useState and useReducer hooks for local component state. Use Redux state management library for global state management.
- Encapsulate reusable logic in custom hooks. Place custom hooks in the hooks directory.
- Create dedicated service files for API calls. Place these files in the api directory.

# Documentation
We use the docs folder to store all the documentation related to the project. Each folder contains a README.md file that provides an overview of the contents of the folder. 

When you generate code, update the documentatoin in the docs folder to reflect the changes made to the project. Do not put the actual code in the documentation files; instead, provide a brief description of how the feature works and where to find the implementation details in the codebase.

The documentation is organized into the following structure:

## Architecture
- There are two architecture diagrams.
     - **docs\architecture\highlevel-architecture.puml**: A high-level architecture diagram which shows all the components, frontend, backend, database and the infrastructure. 
     - **docs\architecture\logical-architecture.puml**: The second diagram is a logical architecture diagram which shows the different functions of the platform.
- The diagrams are stored in the architecture folder.

## Features
README.md file in the features folder documents all the current features of the platform and links to detailed documentation for each feature. Each feature has its own markdown file that describes its purpose, functionality, and implementation.

