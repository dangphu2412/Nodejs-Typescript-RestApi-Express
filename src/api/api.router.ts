import express from 'express';
import authApi from './auth/auth.router';

const router = express.Router();

router.use(authApi);

export = router;
