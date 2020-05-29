import express  from 'express';
import passport from 'passport';

import { RegisterByEmail, ValidateGoogle } from './register.controller';
import authValidator from './register.validator';

const router = express.Router();

router.get('/users/auth/signup', authValidator, RegisterByEmail);

router.get('/users/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/users/auth/google/validated', passport.authenticate('google'), ValidateGoogle);

export default router;