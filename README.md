# Level 2 Assignment 4

livelink:

Description
This project is a TypeScript-based backend application using Express, MongoDB with Mongoose, and other essential libraries for authentication and security.

Prerequisites
Make sure you have the following installed on your machine:

Node.js (v14 or higher)
npm (v6 or higher)
MongoDB (Make sure it's running)
Installation
Clone the repository:
bash
Copy code
git clone <repository-url>
Change into the project directory:
bash
Copy code
cd level-2-assignment-3
Install dependencies:
bash
Copy code
npm install
Configuration
Create a .env file in the project root and set the following environment variables:
env
Copy code
PORT=5000
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-secret-key>
Replace <your-mongodb-uri> with your actual MongoDB connection URI and <your-secret-key> with a secure secret key for JWT.
Scripts
npm run build: Build the TypeScript code.
npm start: Start the server (after building).
npm run start:dev: Start the server in development mode with automatic restarts on code changes.
npm run lint: Run ESLint to lint TypeScript files.
npm run lint:fix: Run ESLint and automatically fix fixable issues.
npm run prettier: Run Prettier to format code.
npm run prettier:fix: Run Prettier and automatically fix formatting issues.
npm test: Run tests (not implemented in this template).
Usage
Build the project:
bash
Copy code
npm run build
Start the server:
bash
Copy code
npm start
Access the API at http://localhost:5000 (or the port you specified in the .env file).
Development
For development with automatic restarts on code changes, use:

bash
Copy code
npm run start:dev
Linting and Formatting
Run ESLint:
bash
Copy code
npm run lint
Fix ESLint issues:
bash
Copy code
npm run lint:fix
Run Prettier:
bash
Copy code
npm run prettier
Fix Prettier formatting issues:
bash
Copy code
npm run prettier:fix
