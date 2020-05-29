import express from 'express';
import authApi from './register/register.router';

const router = express.Router();

router.use(authApi);

export = router;
