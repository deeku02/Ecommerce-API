# **E-commerce Platform Backend API**

## **Table of Contents**

- [Project Overview](#project-overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Installation and Setup](#installation-and-setup)
- [API Endpoints](#api-endpoints)
  - [Authentication Endpoints](#authentication-endpoints)
  - [Product Management Endpoints](#product-management-endpoints)
  - [Cart Management Endpoints](#cart-management-endpoints)
  - [Order Management Endpoints](#order-management-endpoints)
- [Future Enhancements](#future-enhancements)

---

## **Project Overview**

This repository contains an API for an e-commerce platform, built using Node.js, Express, and Sequelize with a MySQL database. The API supports user authentication, product management, cart functionality, and order processing.

---

## **Features**

- **User Authentication**: Secure login and signup with password hashing and JWT for authorization.
- **Product Management**: CRUD operations for managing products.
- **Cart Management**: Add, update, and remove items in a user’s cart.
- **Order Management**: Place orders, calculate total costs, and list orders.

---

## **Technology Stack**

- **Backend**: Node.js, Express
- **Database**: MongoDB with Mongoose ORM
- **Authentication**: JSON Web Tokens (JWT)
- **Validation**: Joi for input validation
- **Encryption**: bcrypt for password hashing

---

## Installation

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   \`\`\`

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MySQL** and create a new database:
   ```sql
   CREATE DATABASE ecommerce_db;
   ```

4. **Update database credentials** in \`app.js\`:
   ```javascript
   const sequelize = new Sequelize('ecommerce_db', 'username', 'password', {
     host: 'localhost',
     dialect: 'mysql',
   });
   ```

5. **Run the server**:
   ```bash
   node app.js
   ```


   The server will start on \`http://localhost:3000\`.

## Configuration

This API requires MySQL and assumes a database named \`ecommerce_db\` with the user credentials specified in the code. Update the Sequelize configuration in \`app.js\` as needed.

## API Endpoints

### Authentication

- **POST /signup** - Registers a new user.
- **POST /signin** - Authenticates the user and returns a JWT token.

### Product Management

- **POST /addproduct** - Adds a new product (protected).
- **PUT /updateproduct/:productId** - Updates a product (protected).
- **DELETE /deleteproduct/:productId** - Deletes a product (protected).
- **GET /products** - Retrieves all products.

### Cart Management

- **POST /cart/add** - Adds a product to the cart (protected).
- **PUT /cart/update** - Updates the quantity of a product in the cart (protected).
- **DELETE /cart/delete** - Removes a product from the cart (protected).
- **GET /cart** - Retrieves the user's cart details (protected).

### Order Management

- **POST /placeorder** - Places an order for the items in the user's cart (protected).
- **GET /getallorders** - Retrieves all orders (protected).
- **GET /orders/customer/:customerId** - Retrieves orders for a specific customer (protected).

## Database Models

- **User**: Manages user data.
- **Product**: Stores product information.
- **Cart**: Stores the user's cart.
- **CartItem**: Manages items in the cart.
- **Order**: Handles user orders.

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for Node.js.
- **Sequelize**: ORM for MySQL.
- **MySQL**: Database for storing application data.
- **bcrypt**: For password hashing.
- **jsonwebtoken**: For user authentication.
