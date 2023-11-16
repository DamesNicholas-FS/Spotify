require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');

const { MONGO_URI } = process.env;

exports.connectDB = async () => {
    mongoose.connect(MONGO_URI, {useNewUrlParser: true});

    const db = mongoose.connection;

    db.on('error', (error) => console.error(error));

    db.once('open', () => {
        console.log(`Connection established ${MONGO_URI}`);
    });
};