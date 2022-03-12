// Setting up NoSQL connection
const db = require('mongoose');

// 
db.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/socialAPI', {
    useNewParser: true,
    useUnifiedTopology: true
});

module.exports = db.connection;