import express from 'express';
import loginController from './login';
import registerController from './register';

const router = express.Router();

router.get('/login', loginController);
router.get('/register', registerController);
export default router;