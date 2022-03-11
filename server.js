const express = require('express');
const apiRoutes = require('./routes');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(apiRoutes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
});
