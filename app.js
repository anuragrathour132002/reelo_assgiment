const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes/index');
const connectDB = require('./database/db');
const mongoose = require('mongoose');


app.use(bodyParser.json());
app.use('/api/v1', router)

app.get('/', (req, res) => {
    res.send('Hello, World!\nThe system is up and working');
});

// Start the server

const start = async () => {
    try {
        await connectDB();

        app.listen(port, () => { console.log(`Server is running on http://localhost:${port}`); });
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();