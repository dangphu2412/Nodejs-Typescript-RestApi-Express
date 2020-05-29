import { Request, Response } from 'express';
import { IUserInfo } from '../../models/User';

import  SignUpService from './register.service';
import registerService from './register.service';

export const RegisterByEmail = async (req:Request, res:Response) => {
    try {
        const payload:IUserInfo = req.body;
        const username:string = payload.username;

        const status = await SignUpService.hasAccount(username);

        // Account not exist
        if (!status) {
            // sign up
            return res.status(200).json({
                message: 'Register success',
                userState: {
                    valid: false,
                    registed: true
                }
            });
        }

        return res.status(303).json({
            message: 'Account existed',
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Your request is suck'
        });
    }
};

export const ValidateGoogle = (req:Request, res:Response) => {
    const payload = req.user as IUserInfo;

    const token:string = registerService.getAccessToken(payload);
    console.log(token);

    return res.redirect(`http://localhost:3000/admin/auth?sat=${token}`);
};