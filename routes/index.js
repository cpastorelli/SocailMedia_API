const router = require('express').Router();
const apiRoutes = require('./api');

// Setting up api routes. 
router.use('/api', apiRoutes);
router.use((req,res) => {
    return res.send('Sorry! This page does not exist.');
});

module.exports = router;