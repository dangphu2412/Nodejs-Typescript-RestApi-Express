import * as Validator from 'express-validator';

export default [
    Validator.body('username', 'Username is not valid')
        .notEmpty()
        .isEmail()
        .normalizeEmail(),
    Validator.body('password', 'Password is not valid')
        .notEmpty()
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters')
        .matches(/\d/).withMessage('Must contain a number')
];