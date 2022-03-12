const {Schema, model} = require('mongoose');

// Setting up User Schema - will have thoughts, and friends
const userSchema = new Schema(
    {
        username: {},
        email: {},
        thoughts: [],
        friends: [],
    }
);

module.exports = userSchema;