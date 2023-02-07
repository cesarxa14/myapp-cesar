const passport  = require('passport');

require('dotenv').config();

const GoogleStrategy = require('passport-google-oauth2').Strategy;

// used to serialize the user for the session
passport.serializeUser(function (user, done) {
    done(null, user);
});

// used to deserialize the user
passport.deserializeUser(function (user, done) {
        done(null, user);
});

//Google strategy
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID_OAUTH_GOOGLE,
    clientSecret: process.env.SECRET_CLIENT_OAUTH_GOOGLE,
    callbackURL: "https://02a4-38-25-16-107.sa.ngrok.io/google/callback",
    passReqToCallback: true
}, (request, accessToken, refreshToken, profile, done) => {
    console.log(profile)
    done(null, profile)
}));