const { Thought, User } = require('../models');

const thoughtController = {
    // GET all thougths
    getAllThoughts(req, res) {
        Thought.find()
        .sort()
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // GET One Thought
    getOneThought(req, res) {
        Thought.findOne({ _id: req.params.thoughtId })
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(500);
            res.status(500)
            .json(err);
        });
    },
    // Create a New Thought
    makeNewThought(req, res) {
        Thought.create()
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Update a Thought by ID
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId })
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Delete a Thought by ID 
    forgetThought(req, res) {
        Thought.findOneAndRemove({ _id: req.params.thoughtId })
        .then((thoughtData) => {
            
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Create a new Reaction
    newReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId })
        .then((thoughtData) => {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
    // Remove a Reaction
    removeReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId })
        .then((thoughtData)=> {
            res.json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
};

module.exports = thoughtController;