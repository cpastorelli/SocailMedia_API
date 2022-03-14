const { Thought, User } = require('../models');

const thoughtController = {
    // GET all thougths
    getAllThoughts(req, res) {
        Thought.find()
        .sort({ createdAt: -1 })
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
            if(!thoughtData) {
                return res.status(404)
                .json({ message: 'I am sorry. This thought does not seem to exist!' })
            }
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
        Thought.create(req.body)
        .then(({_id}) => {
            return User.findOneAndUpdate({ _id: req.body.userId }, { $push: { thoughts: _id } }, {new: true});
        })
        .then(({_id}) => {
            if(!_id) {
                return res.status(404)
                .json({ message: 'I am sorry. This thought does not seem to exist!' });
            }
            res.status(200)
            .json({ message: 'Thought has been created successfully!' });
        })
        .catch((err) => {
            console.log(req.body.userId);
            console.log(req.body.thoughtText);
            console.log(err);
            res.status(500)
            .json(err);
        });
    },

    // Update a Thought by ID
    updateThought(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $set: req.body }, {runValidators: true, new: true })
        .then((thoughtData) => {
            if(!thoughtData) {
                return res.status(404)
                .json({ message: 'I am sorry. This thought does not seem to exist!' });
            }
            res.status(200)
            .json(thoughtData);
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
            if(!thoughtData) {
                return res.status(404)
                .json({ message: 'I am sorry. This thought does not seem to exist!' });
            }
            res.status(200)
            .json({ message: 'Looks like I have forgotten this thought!' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },

    // Create a new Reaction
    newReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $addToSet: { reactions: req.params.reactionId }}, {runValidators: true, new: true })
        .populate({ path: 'reactions', select: '-__v' })
        .select('-__v')
        .then((thoughtData) => {
            if(!thoughtData) {
                return res.status(404)
                .json({ message: 'I am sorry. This thought does not seem to exist!' });
            }
            res.status(200)
            .json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },

    // Remove a Reaction
    removeReaction(req, res) {
        Thought.findOneAndUpdate({ _id: req.params.thoughtId }, { $pull: { reactions: req.params.reactionId }}, { runValidators: true, new: true })
        .then((thoughtData)=> {
            if(!thoughtData) {
                return res.status(404)
                .json({ message: 'I am sorry. This thought does not seem to exist!'});
            }
            res.status(200)
            .json(thoughtData);
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },
};

module.exports = thoughtController;