import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import 'dotenv/config';
import router from './main.router';

const app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'public')));
app.use(router);

export default app;