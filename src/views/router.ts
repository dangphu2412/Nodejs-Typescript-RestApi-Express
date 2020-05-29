import express from 'express';
import LoginView from './auth/login';
import RegisterView from './auth/register';
import AuthView from './auth/middleware';
import Admin from './admin/admin';

const router = express.Router();

router.get('/signin', LoginView);
router.get('/signup', RegisterView);

router.get('/auth', AuthView);

router.get('/', Admin);
export default router;