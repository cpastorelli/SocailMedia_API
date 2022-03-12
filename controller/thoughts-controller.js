const { Thought, User } = require('../models');

const thoughtController = {
    // GET all thougths
    getAllThoughts(req, res) {
        Thought.find()
        .sort()
        .then()
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // GET One Thought
    getOneThought(req, res) {
        Thought.findOne()
        .then()
        .catch((err) => {
            console.log(500);
            res.status(500)
            .json(err);
        });
    },
    // Create a New Thought
    makeNewThought(req, res) {
        Thought.create()
        .then()
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Update a Thought by ID
    updateThought(req, res) {
        Thought.findOneAndUpdate()
        .then()
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Delete a Thought by ID 
    forgetThought(req, res) {
        Thought.findOneAndRemove()
        .then()
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Create a new Reaction
    newReaction(req, res) {
        Thought.findOneAndUpdate()
        .then()
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Remove a Reaction
    removeReaction(req, res) {
        Thought.findOneAndUpdate()
        .then()
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
};

module.exports = thoughtController;