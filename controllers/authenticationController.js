const axios = require('axios');
const querystring = require('querystring');
const crypto = require('crypto');

const {SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } = process.env;

const randomString = (length) => crypto.randomBytes(length).toString('hex').slice(0, length);

const stateKey = "spotify_auth_state";

const scope = "user-read-private user-read-email";

exports.login = (req, res) => {
    console.log("Starting Authenticator...");
    const state = randomString(16);
    console.log(SPOTIFY_CLIENT_ID)
    res.cookie(stateKey, state);
    const queryParams = querystring.stringify({
        client_id: SPOTIFY_CLIENT_ID,
        response_type: 'code',
        redirect_uri: SPOTIFY_REDIRECT_URI,
        scope: scope,
        state: state,
    }, );
    console.log("Redirecting Page...");
    res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
};

exports.callback = async (req, res) => {
    const { code } = req.query;
    console.log({ code : `${code}` })

    const reponse = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: SPOTIFY_REDIRECT_URI,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        },
    });
    const { access_token, refresh_token } = reponse.data;
    return res.status(200).json({ 
        message: "CallBack Hander",
        access_token,
        refresh_token,
    });
};

exports.logout = async (req, res) => {
    console.log({ Message : 'Please Wait... Logging Out'});
    return res.status(200).json({ message: "Logged Out"});
};

exports.refresh = async (req, res) => {
    const { token_refresh } = req.query;
    console.log({ Token : `${token_refresh}` })
    const reponse = await axios({
        method: 'post',
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'refresh_token',
            refresh_token: token_refresh,
            client_id: SPOTIFY_CLIENT_ID,
            client_secret: SPOTIFY_CLIENT_SECRET,
        }),
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            Authorization: `Basic ${Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
        },
    });
    const { access_token } = reponse.data;
    return res.status(200).json({ 
        message: "Refresh Token",
        access_token,
    });
};