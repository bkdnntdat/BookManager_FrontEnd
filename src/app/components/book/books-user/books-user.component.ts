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

  bookShows:Book[];

  search: string;

  sortBy: SelectItem[];

  selectedItemsPerPage:number;

  selectedSortBy:string;

  sizeArray:number;
  
  constructor(
    private bookService: BookService,
    private location: Location,
    private userService: UserService,
    private httpClient: HttpClient ) {
      this.search="";
      this.sortBy=[
        {label:'Author',value:'author'},
        {label:'Title',value:'title'},
        {label:'Year',value:'year'},
      ];
      this.selectedItemsPerPage=5;
      this.selectedSortBy='year';
    }

  ngOnInit() {

    this.userService.getUser().subscribe((user:any) => {
    });

    this.getBooks();
    this.sendRequestPage(0);
  }

  getBooks():void{
    this.bookService.getBooks().subscribe(books => 
      {
        this.books = books;
        this.sizeArray=books.length;
      });
  }

  sendRequestSearch():void{
    let param = new HttpParams().append('key', this.search+"");
    this.httpClient.get("https://bookmanagerment.herokuapp.com/api/books/search",{params:param}).subscribe((books:any) => this.books = books);
  }

  sendRequestPage(page: number){
    let param = new HttpParams().append('page', page+"").append('items',this.selectedItemsPerPage+"").append('sortBy',this.selectedSortBy).append('key', this.search);
    this.httpClient.get("https://bookmanagerment.herokuapp.com/api/books/getPage",{params:param})
    .subscribe((resp:any) => {
      this.bookShows = resp;
      this.getBooks();
      this.search = "";
    });
  }

  paginate(event) {
    // event.first = this.sendRequestPage(event.page);
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    if(event.rows){
      this.selectedItemsPerPage=event.rows;
      this.sendRequestPage(event.page);
    }
    else this.sendRequestPage(0);
  }
}
