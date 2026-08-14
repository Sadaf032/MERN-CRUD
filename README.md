# MERN CRUD Application

A full-stack **MERN CRUD Application** built using **MongoDB, Express.js, React.js, and Node.js**.

This project implements complete **Create, Read, Update, and Delete (CRUD)** functionality. The React frontend communicates with the Express.js REST API, while MongoDB is used to store and manage application data.

---

## 📌 Table of Contents

- [Project Overview](#-project-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Environment Variables](#-environment-variables)
- [Running the Project](#-running-the-project)
- [API Endpoints](#-api-endpoints)
- [CRUD Operations](#-crud-operations)
- [Postman Testing](#-postman-testing)
- [Database](#-database)
- [Security](#-security)
- [Troubleshooting](#-troubleshooting)
- [Future Improvements](#-future-improvements)
- [Learning Outcomes](#-learning-outcomes)
- [Screenshots](#-screenshots)
- [Deployment](#-deployment)
- [Author](#-author)
- [License](#-license)

---

## 📖 Project Overview

The **MERN CRUD Application** is a full-stack web application developed to demonstrate the integration of a React frontend with a Node.js and Express.js backend.

The application allows users to perform complete CRUD operations:

- **Create** new users
- **Read** existing users
- **Update** user information
- **Delete** users

The backend provides RESTful APIs, while MongoDB stores the application data.

---

## ✨ Features

- Create new users
- View all users
- View individual users
- Update existing users
- Delete users
- RESTful API
- MongoDB database integration
- Mongoose models and schemas
- React.js frontend
- Express.js backend
- Node.js server
- Frontend and backend integration
- CORS configuration
- Environment variable support
- Postman API testing
- Real-time UI updates after CRUD operations
- Git and GitHub version control

---

## 🛠️ Tech Stack

### Frontend

- React.js
- JavaScript
- HTML5
- CSS3
- Vite

### Backend

- Node.js
- Express.js
- Mongoose
- CORS
- Dotenv
- Nodemon

### Database

- MongoDB
- MongoDB Atlas

### Development Tools

- Visual Studio Code
- Postman
- Git
- GitHub
- npm

---

## 🏗️ Project Architecture

```text
                 ┌──────────────────┐
                 │      User        │
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │  React Frontend  │
                 └────────┬─────────┘
                          │
                    HTTP Requests
                          │
                          ▼
                 ┌──────────────────┐
                 │  Express.js API  │
                 └────────┬─────────┘
                          │
                       Mongoose
                          │
                          ▼
                 ┌──────────────────┐
                 │     MongoDB      │
                 └──────────────────┘
