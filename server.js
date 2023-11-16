const dotenv = require('dotenv');
const express = require('express');
const path = require('path');

const { middleware } = require('./middleware');
const { connectDB } = require('./config/db');   // Connect to MongoDB

const spotifyRouter = require('./routes/spotifyRoutes'); // Import Routes

const { PORT } = process.env;

const app = express();

middleware(app); // Middleware

connectDB(); // Connect to MongoDB

app.use('/api/spotify', spotifyRouter); // Routes

app.use('/', (req,res) => {
    res.sendFile(path.join(__dirname, './my-project/src/App.jsx'));
})

app.all('*', (req, res) => {
    res.redirect('/');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});