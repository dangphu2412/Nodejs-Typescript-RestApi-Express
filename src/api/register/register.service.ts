import express from 'express';
import jwt from 'jsonwebtoken';

import SignUpRepository from './register.repository';
import { SECRET_KEY } from '../../config/secret.config';
import { IUserInfo } from '../../models/User';

class SignUpService {
    private signUpRepository: SignUpRepository;
    static signUpService: SignUpService;
    static getSignUpService() {
        if (!this.signUpService) {
            this.signUpService = new SignUpService();
        }
        return this.signUpService;
    }
    constructor() {
        this.signUpRepository = SignUpRepository.getSignUpRepository();
    }
    public hasAccount(email:string) {
        return this.signUpRepository.hasAccount(email);
    }
    public getActiveLink():string {
        const rand:number = Math.floor((Math.random() * 100) + 54);
        const validKey = jwt.sign({rand}, SECRET_KEY, {
            expiresIn: '15min'
        });
        const host:string = express().get('host');
        return `${host}/users/auth/signup?id=${validKey}`;
    }
    public getAccessToken(payload:IUserInfo):string {
        return jwt.sign(payload, SECRET_KEY, {
            expiresIn: '7d'
        });
    }
}

export default new SignUpService();