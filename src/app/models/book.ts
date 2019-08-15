import { Time } from '@angular/common';
import { User } from './user';

export class Book{
    id: number;
    title: string;
    description: string;
    createdAt: Time;
    updatedAt: Time;
    enabled: boolean;
    user: User;
}