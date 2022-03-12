const { User, Thought } = require('../models');

const userController = {
    // GET all users
    getAllUsers(req, res) {
        User.find()
        .then()
        .catch();
    },
    // GET One User
    getOneUser(req, res) {
        User.findOne()
        .then()
        .catch();
    },
    // Create a new User
    makeNewUser(req, res) {
        User.create()
        .then()
        .catch();
    },
    // Update a new User by ID
    updateUser(req, res) {
        User.findOneAndUpdate()
        .then()
        .catch();
    },
    // Remove a User by ID
    removeUser(req, res) {
        User.FindOneAndDelete()
        .then()
        .catch();
    },
    // Add a new Friend
    addFriend(req, res) {
        User.findOneAndUpdate()
        .then()
        .catch();
    },
    // Remove a Friend
    removeFriend(req, res) {
        User.findOneAndUpdate()
        .then()
        .catch();
    },
};

module.exports = userController;