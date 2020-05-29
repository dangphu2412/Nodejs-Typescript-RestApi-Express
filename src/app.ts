// import { Request, Response } from 'express';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import router from './main.router';
import 'dotenv/config';
import './config/secret.passport';
import passport from 'passport';

const app = express();

app.set('host', process.env.HOST || 'http://localhost:3000');
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

// app.use((req:Request, res:Response) => {
//     return res.render('app/404');
// });

export default app;