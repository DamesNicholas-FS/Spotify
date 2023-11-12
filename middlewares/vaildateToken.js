const userToken = require('../models/userToken');

const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } = process.env;

const SPOTIFY_TOKEN_API = 'https://accounts.spotify.com/api/token';

exports.vaildateToken = async (req, res, next) => {
    try{
        let userToken = await userToken.findOne({ user_id: req.params.id });

        if(!userToken){
            console.log('Token not found');
            return res.redirect('')
        }
    }