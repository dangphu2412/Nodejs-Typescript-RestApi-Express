import knex from '../../database/connection';
import { IUserInfo } from '../../models/User';

export default class SignUpRepository {
    static signUpRepository: SignUpRepository;
    static getSignUpRepository() {
        if (!this.signUpRepository) {
            this.signUpRepository = new SignUpRepository();
        }
        return this.signUpRepository;
    }
    public hasAccount(email:string) {
        return knex('users').select('user_id').where('username', email).first();
    }
    public createAccount(payload:IUserInfo) {
        const status = knex('users').insert(payload);
        return status;
    }
}