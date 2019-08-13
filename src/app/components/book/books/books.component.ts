import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books:Book[];

  cols: any[];
  
  constructor(
    private bookService: BookService,
    private location: Location) { }

  ngOnInit() {
    this.getBooks();

    this.cols = [
      { field: 'id', header: 'Id', display: 'none' },
      { field: 'title', header: 'Title' },
      { field: 'author', header: 'Author' },
      { field: 'createdAt', header: 'Created At'},
      { field: 'updatedAt', header: 'Updated At'},
      { field:'year', header: 'Year'}
  ];
  }

  getBooks():void{
    this.bookService.getBooks(true).subscribe(books => this.books = books);
  }
}
