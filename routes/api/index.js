const router = require('express').Router();
const thoughtRoutes = require('./thought-routes');
const userRoutes = require('./user-routes');

// Setting up individual Thought and User API Routes
router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router