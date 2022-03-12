const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Setting up Thought Scema - Will need to use ReactionSchema
const thoughtSchema = new Schema(
    {
        thoughtText: {},
        createdAt: {},
        username: {},
        reactions: []
    }
);

module.exports = thoughtSchema;