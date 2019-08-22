import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-my-list-book',
  templateUrl: './my-list-book.component.html',
  styleUrls: ['./my-list-book.component.scss']
})
export class MyListBookComponent implements OnInit {

  id:number;

  user:User;

  books:Book[];

  cols: any[];
  
  constructor(
    private bookService: BookService,
    private location: Location,
    private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((user:any) => {
      this.user = user;
      this.id = user.id;
      console.log(this.user, this.id);
    });
    this.getBooks();

    this.cols = [
      { field: 'id', header: 'Id', display: 'none' },
      { field: 'title', header: 'Title' },
      { field: 'author', header: 'Author' },
      { field: 'createdAt', header: 'Created At'},
      { field: 'updatedAt', header: 'Updated At'},
      { field: 'year', header: 'Year'},
      { field: 'description', header: 'Description', display:'none'},
      { field: 'enabled', header:'Enable', display:'none'}
  ];
  }

  getBooks():void{
    this.bookService.getMyBooks().subscribe(books => this.books = books);
  }
}