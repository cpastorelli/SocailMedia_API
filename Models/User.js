const {Schema, model} = require('mongoose');

// Setting up User Schema - will have thoughts, and friends
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@+\..+/, 'Must be a valid e-mail address!'],
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema.virtual('friendsCount').get(function () {
    return this.friends.length;
});
const User = model('User', userSchema);

module.exports = userSchema;