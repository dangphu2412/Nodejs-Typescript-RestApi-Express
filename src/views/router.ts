import express from 'express';
import LoginView from './auth/login';
import RegisterView from './auth/register';

const router = express.Router();

router.get('/login', LoginView);
router.get('/register', RegisterView);

export default router;