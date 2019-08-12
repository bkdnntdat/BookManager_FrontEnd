import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[];

  cols:any[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    
    this.cols = [
      { field: 'title', header: 'Title' },
      // { field: 'description', header: 'Description' },
      { field: 'author', header: 'Author' }
  ];
  }

  getBooks(): void{
    this.bookService.getBooks(true).subscribe(books => {
      this.books = books;
      console.log(this.books);
    });
  }

}
