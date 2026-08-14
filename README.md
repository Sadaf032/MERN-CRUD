# MERN CRUD Application

A full-stack CRUD application built using the MERN stack — MongoDB, Express.js, React.js, and Node.js.

## Project Overview

This project demonstrates a complete CRUD (Create, Read, Update, Delete) application where users can be added, viewed, updated, and deleted.

The React frontend communicates with the Express.js backend using Axios, while MongoDB is used to store user data.

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- Axios
- Bootstrap
- CORS
- dotenv

## Features

- Add new users
- Display all users
- Update user information
- Delete users
- MongoDB database integration
- REST API
- Axios API communication
- Basic client-side validation
- Basic server-side error handling
- Responsive user interface

## CRUD Operations

| Operation | Method | API Endpoint |
|---|---|---|
| Create User | POST | `/users` |
| Get All Users | GET | `/users` |
| Get Single User | GET | `/users/:id` |
| Update User | PUT | `/users/:id` |
| Delete User | DELETE | `/users/:id` |

## Project Structure

```text
MERN-CRUD/
│
├── client/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Users.jsx
│   │   ├── CreateUsers.jsx
│   │   └── UpdateUsers.jsx
│   └── package.json
│
├── server/
│   ├── modals/
│   │   └── Users.js
│   ├── index.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md
