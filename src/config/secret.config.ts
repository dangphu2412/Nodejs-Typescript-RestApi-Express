import 'dotenv/config';

export const SECRET_KEY:string = process.env.SECRET_KEY || '';

if (!SECRET_KEY) {
    console.log('You are missing secret key in secret.config.ts !');
    process.exit(1);
}