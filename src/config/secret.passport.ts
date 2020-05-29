import passport from 'passport';
import passportGoogle from 'passport-google-oauth';
import 'dotenv/config';
import knex from '../database/connection';
import { IUserInfo } from '../models/User';

const GoogleStrategy  = passportGoogle.OAuth2Strategy;

const HOST = process.env.HOST || '';
const clientID = process.env.CLIENT_ID || '';
const clientSecret = process.env.CLIENT_SECRET || '';

const options:passportGoogle.IOAuth2StrategyOption = {
    clientID,
    clientSecret,
    callbackURL: `http://${HOST}/api/users/auth/google/validated`
};

if (!clientID || !clientSecret || !HOST) {
    console.log('Your credentials of google is missing');
    process.exit(1);
}

passport.use(new GoogleStrategy(options, async (acccessToken:string, refreshToken:string,profile: passportGoogle.Profile, done:passportGoogle.VerifyFunction) => {
    try {
        console.log('Inside passport');
        const username:string =  profile._json.email;
        const name:string = profile._json.name;
        const data:IUserInfo = {
            username,
            name,
        };

        const user = await knex('users').select('*').where('username', username).first();

        if (!user) {
            await knex('users').insert(data);
        }
        console.log('Authed');
        return done(null, data);

    } catch (error) {
        return done(error);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});
