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
        User.findOne({ _id: req.params.userId })
        .populate('friends')
        .populate('thoughts')
        .then((userData) => {
            if(!userData){
                return res.status(404)
                .json({ message: 'I am sorry. This user does not seem to exist!' });
            }
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
        User.create(req.body)
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
        User.findOneAndUpdate({ _id: req.params.userId }, { $set: req.body }, { runValidators: true, new: true })
        .then((userData) => {
            if(!userData) {
                return res.status(404)
                .json({ message: 'I am sorry. This user does not seem to exist!' });
            }
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
        User.findOneAndDelete({ _id: req.params.userId })
        .then((userData) => {
            if(!userData) {
                return res.status(404)
                .json({ message: 'I am sorry. This user does not seem to exist!' });
            }
            res.status(200)
            .json({ message: 'User has successfully been deleted.' });
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            .json(err);
        });
    },

    // Add a new Friend
    addFriend(req, res) {
        User.findOneAndUpdate({ _id: req.params.userId }, { $addToSet: { friends: req.params.friendId } }, { new: true})
        .then((userData) => {
            if(!userData) {
                return res.status(404)
                .json({ message: 'I am sorry. This user does not seem to exist!' })
            }
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
        User.findOneAndUpdate({ _id: req.params.userId }, { $pull: { friends: req.params.friendId } }, { new: true })
        .populate({ path: 'friends', select: '-__v' })
        .select('-__v')
        .then((userData) => {
            if(!userData) {
                return res.status(404)
                .json({ message: 'I am sorry. This user does not seem to exist!' });
            }
            res.status(200)
            .json(userData);
        })
        .catch((err) => {
            console.log(req.params.userId);
            console.log(req.params.friendId);

            console.log(err);
            res.status(500)
            .json(err);
        });
    },
};

module.exports = userController;