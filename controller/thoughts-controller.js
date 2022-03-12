const { Thought, User } = require('../models');

const thoughtController = {
    // GET all thougths
    getAllThoughts(req, res) {
        Thought.find()
        .sort()
        .then()
        .catch();
    },
    // GET One Thought
    getOneThought(req, res) {
        Thought.findOne()
        .then()
        .catch();
    },
    // Create a New Thought
    makeNewThought(req, res) {
        Thought.create()
        .then()
        .catch();
    },
    // Update a Thought by ID
    updateThought(req, res) {
        Thought.findOneAndUpdate()
        .then()
        .catch();
    },
    // Delete a Thought by ID 
    forgetThought(req, res) {
        Thought.findOneAndRemove()
        .then()
        .catch();
    },
    // Create a new Reaction
    newReaction(req, res) {
        Thought.findOneAndUpdate()
        .then()
        .catch();
    },
    // Remove a Reaction
    removeReaction(req, res) {
        Thought.findOneAndUpdate()
        .then()
        .catch();
    },
};

module.exports = thoughtController;