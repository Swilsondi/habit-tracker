
const express = require('express');

const userRouter = express.Router();
// =====================
// USER ROUTES & HANDLERS
// =====================

// --- Get all users ---
const getAllUsers = (req, res) => {
    // Handles GET request for all users
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

// --- Create a new user ---
const createUsers = (req, res) => {
    // Handles POST request to create a new user
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

// --- Update a user by ID ---
const createUser = (req, res) => {
    // Handles PATCH request to update a user by id
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

// --- Get a user by ID ---
const getUser = (req, res) => {
    // Handles GET request for a single user by id
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

// --- Delete a user by ID ---
const deleteUser = (req, res) => {
    // Handles DELETE request to remove a user by id
    res.status(500).json({
        status: 'error',
        message: 'This route is not yet defined'
    });
};

userRouter
  .route('/')
  .get(getAllUsers)
  .post(createUsers);

userRouter
  .route('/:id')
  .get(getUser)
  .patch(createUser)
  .delete(deleteUser);

module.exports = userRouter;
