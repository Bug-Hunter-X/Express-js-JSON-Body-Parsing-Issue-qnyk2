# Express.js JSON Body Parsing Bug

This repository demonstrates a common issue in Express.js applications where the request body is not parsed correctly when using `express.json()`. The server starts successfully, but POST requests with JSON data fail because `req.body` remains empty.

## Bug Description

The provided Express.js code attempts to handle POST requests to the `/user` endpoint. It uses `express.json()` to parse incoming JSON data. However, despite this middleware, `req.body` remains empty when a POST request is sent, preventing the server from accessing the request's data. The root cause is incorrect middleware placement.

## Solution

A simple fix involves ensuring that `express.json()` is placed before the route handler that expects JSON data. This will ensure that the middleware correctly parses the request body before the route handler tries to access it.

## How to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `node bug.js` to start the server.
5. Send a POST request to `http://localhost:3000/user` with a JSON payload (e.g., using Postman or curl).
6. Observe that `req.body` will be empty in the server's console log.
7. After fixing the bug using `bugSolution.js`, repeat steps 4 and 5 to see the correct behavior.
