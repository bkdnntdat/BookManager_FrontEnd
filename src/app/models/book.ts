import { Time } from '@angular/common';

export class Book{
    title: string;
    description: string;
    createAt: Time;
    updateAt: Time;
    enabled: boolean;
}