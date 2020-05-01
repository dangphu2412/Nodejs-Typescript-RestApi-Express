import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/api/login', (req:Request, res: Response) => {
    return res.status(200).json({
        message: 'hello world'
    });
});

export default router;