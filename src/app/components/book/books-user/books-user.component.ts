import { Component, OnInit } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { SelectItem } from 'primeng/components/common/api';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book/book.service';
import { UserService } from 'src/app/services/user/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-books-user',
  templateUrl: './books-user.component.html',
  styleUrls: ['./books-user.component.scss']
})
export class BooksUserComponent implements OnInit {

  books:Book[];

  search: string;

  itemsPerPage: SelectItem[];

  selectedItemsPerPage:number;
  
  constructor(
    private bookService: BookService,
    private location: Location,
    private userService: UserService,
    private httpClient: HttpClient ) {
      this.itemsPerPage=[
        {label:'5',value:5},
        {label:'10',value:10},
        {label:'20',value:20},
      ];
      this.selectedItemsPerPage=5;
    }

  ngOnInit() {

    this.userService.getUser().subscribe((user:any) => {
    });

    this.getBooks();
  }

  getBooks():void{
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  sendRequestSearch():void{
    let param = new HttpParams().append('key', this.search+"");
    this.httpClient.get("http://localhost:8080/api/books/search",{params:param}).subscribe((books:any) => this.books = books);
  }

}
