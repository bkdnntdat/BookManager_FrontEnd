import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book-disabled-list',
  templateUrl: './book-disabled-list.component.html',
  styleUrls: ['./book-disabled-list.component.scss']
})
export class BookDisabledListComponent implements OnInit {

  books:Book[];

  // book1:Book[];

  // book2:Book[];

  // book3:Book[];

  cols: any[];

  
  constructor(
    private bookService: BookService,
    private location: Location) { }

  ngOnInit() {
    this.getBooks();
    // this.getBooks(this.book2);
    // this.getBooks(this.book3);

    this.cols = [
      { field: 'title', header: 'Title' },
      // { field: 'description', header: 'Description' },
      { field: 'author', header: 'Author' },
      { field: 'enabled', header: 'Enable' }
  ];
  }

  getBooks():void{
    this.bookService.getBooks(false).subscribe(books => this.books = books);
  }

  save():void{
    this.bookService.updateBooks(this.books).subscribe();
    this.location.back();
  }
}
