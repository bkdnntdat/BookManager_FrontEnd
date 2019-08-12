import { Time } from '@angular/common';

export class Book{
    id: number;
    title: string;
    description: string;
    createAt: Time;
    updateAt: Time;
    enabled: boolean;
}