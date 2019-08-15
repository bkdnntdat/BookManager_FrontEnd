import { User } from './user';
import { Book } from './book';
import { Time } from '@angular/common';

export class Comment{
    user: User;
    book: Book;
    message: string;
    time: Time;
}