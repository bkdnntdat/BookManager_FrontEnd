import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-disabled-list',
  templateUrl: './book-disabled-list.component.html',
  styleUrls: ['./book-disabled-list.component.scss']
})
export class BookDisabledListComponent implements OnInit {

  books:Book[];

  cols: any[];
  
  constructor(
    private bookService: BookService,
    private location: Location,
    private router: Router) { }

  ngOnInit() {
    this.getBooks();

    this.cols = [
      { field: 'id', header: 'Id', display: 'none' },
      { field: 'title', header: 'Title' },
      { field: 'author', header: 'Author' },
      { field: 'createdAt', header: 'Created At'},
      { field: 'updatedAt', header: 'Updated At'},
      { field: 'year', header: 'Year'},
      { field: 'description', header: 'Description', display:'none'},
      { field: 'enabled', header: 'Enable' },
      { field: 'edit-delete', header:'Edit/Delete'}
  ];
  }

  getBooks():void{
    this.bookService.getDisableBooks().subscribe(books => this.books = books);
  }

  save(id: number):void{
    this.bookService.updateBookEnable(id).subscribe(book =>{this.books = book});
  }

  deteleBook(id: number): void{
    this.bookService.deleteBook(id).subscribe(resp => {this.getBooks();});
  }

  editBook(id: number): void{
    this.router.navigate(['/editBook/'+id]);
  }
}
