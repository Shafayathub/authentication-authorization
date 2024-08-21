# authentication-authorization

## livelink:()

# authentication-authorization - Project Initialization and Setup

## Description

This project is a TypeScript-based backend application using Express, MongoDB with Mongoose, and other essential libraries for authentication and security.

## Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)
- [MongoDB](https://www.mongodb.com/) (Make sure it's running)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   ```
2. **Change into the project directory:**
   ```bash
   cd authentication-authorization
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the project root and set the following environment variables:
   ```env
   PORT=5000
   MONGODB_URI=<your-mongodb-uri>
   JWT_SECRET=<your-secret-key>
   ```
   Replace `<your-mongodb-uri>` with your actual MongoDB connection URI and `<your-secret-key>` with a secure secret key for JWT.

## Scripts

- `npm run build`: Build the TypeScript code.
- `npm start`: Start the server (after building).
- `npm run start:dev`: Start the server in development mode with automatic restarts on code changes.
- `npm run lint`: Run ESLint to lint TypeScript files.
- `npm run lint:fix`: Run ESLint and automatically fix fixable issues.
- `npm run prettier`: Run Prettier to format code.
- `npm run prettier:fix`: Run Prettier and automatically fix formatting issues.
- `npm test`: Run tests (not implemented in this template).

## Usage

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Start the server:**
   ```bash
   npm start
   ```
3. **Access the API at** `http://localhost:5000` (or the port you specified in the `.env` file).

## Development

For development with automatic restarts on code changes, use:

```bash
npm run start:dev

```
