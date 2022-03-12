const { User, Thought } = require('../models');

const userController = {
    // GET all users
    getAllUsers(req, res) {
        User.find()
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // GET One User
    getOneUser(req, res) {
        User.findOne()
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Create a new User
    makeNewUser(req, res) {
        User.create()
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Update a new User by ID
    updateUser(req, res) {
        User.findOneAndUpdate()
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Remove a User by ID
    removeUser(req, res) {
        User.FindOneAndDelete()
        .then((userData) => {

        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Add a new Friend
    addFriend(req, res) {
        User.findOneAndUpdate()
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Remove a Friend
    removeFriend(req, res) {
        User.findOneAndUpdate()
        .then((userData) => {
            res.json(userData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
};

module.exports = userController;