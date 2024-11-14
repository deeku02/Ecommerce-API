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

This is a backend API for an **E-commerce Platform** that provides **user authentication**, **product management**, **cart management**, and **order management** functionalities. The project is built with **Node.js** and **Express** and uses **MongoDB** as the database. Authentication is handled through **JSON Web Tokens (JWT)**.

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

## **Installation and Setup**

### **1. Clone the Repository**

```bash
git clone <repository-url>
cd <project-folder>
