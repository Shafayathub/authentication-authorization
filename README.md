# Level 2 Assignment 3

live link: https://lazy-pear-codfish-wrap.cyclic.app/
video Link: https://youtu.be/R9am5NhU6KY

## Description

This is a Node.js project with TypeScript, Express, and MongoDB. It provides a starting point for building web applications.

## Features

- Express server with TypeScript
- MongoDB integration using Mongoose
- CORS support
- Environment variable management with dotenv
- Validation with Zod
- Code linting and formatting with ESLint and Prettier

## Prerequisites

- Node.js and npm installed
- MongoDB installed locally or a connection to a MongoDB database

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

   Install dependencies:
   npm install
   Set up environment variables:

Create a .env file in the project root and add your configuration. Refer to the .env.example file for guidance.

Build and start the server:
npm run build
npm start

For development:
npm run start:dev
Open your browser and navigate to http://localhost:your-port to see the app in action.

Scripts
build: Transpile TypeScript to JavaScript.
start: Start the server in production mode.
run start:dev: Start the server in development mode with automatic restarts.
run lint: Lint TypeScript files.
run lint:fix: Automatically fix linting issues.
run prettier: Format code using Prettier.
run prettier:fix: Automatically fix formatting issues.
