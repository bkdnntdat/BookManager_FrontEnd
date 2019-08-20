import { Role } from './role';

export class User{
    id: number;
    firstName:string;
    lastName:string;
    email:string;
    password:string;
    code: string;
    token:string;
    role: Role;
}