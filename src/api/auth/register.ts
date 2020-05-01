// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';
import { IUser } from './user.interface';

export default (req:Request, res:Response) => {
    const x:IUser = {
        username: 'FUs',
        password: '123'
    };
    console.log(x);
    return res.status(200).json({
        message: 'Success',
    });
};