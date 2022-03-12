const {Schema, Types } = require('mongoose');

// Setting up Reaction Schema
const reactionSchema = new Schema(
    {
        reactionId: {},
        reactionBody: {},
        username: {},
        createdAt: {}
    }
);

module.exports = reactionSchema;