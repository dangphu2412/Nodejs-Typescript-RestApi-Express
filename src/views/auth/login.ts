// eslint-disable-next-line no-unused-vars
import { Request, Response } from 'express';

export default (req: Request, res:Response) => {
    return res.render('app/login', {
        bgImage: 'bg-login-image',
    });
};
