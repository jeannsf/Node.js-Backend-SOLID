# Users API

## Technologies Used

- Node.js
- TypeScript
- Express
- MongoDB

## Used Concepts

- SOLID
- Dependency Injection
- Repository Pattern

## Entities

<pre>
User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}</pre>

## Routes

- GET /users - returns users saved in the database
- POST /users - creates a user
- PATCH /users/:id - updates a user
- DELETE /users/:id - deletes a user

## Architecture

![Architecture](https://imgur.com/k5mXFoZ.png)
