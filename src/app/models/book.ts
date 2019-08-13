import { Time } from '@angular/common';

export class Book{
    id: number;
    title: string;
    description: string;
    createdAt: Time;
    updatedAt: Time;
    enabled: boolean;
}