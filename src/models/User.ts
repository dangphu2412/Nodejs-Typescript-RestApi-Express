// tslint:disable-next-line:no-empty-interface
export interface User {}

export interface IUserInfo extends User {
    username: string;
    password?:string;
    name?: string;
    avatar?:string;
}