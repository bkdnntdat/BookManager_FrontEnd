import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortEvent } from 'src/app/models/sort/sortevent';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books:Book[];

  bookShows:Book[];

  search: string;

  itemsPerPage: SelectItem[];

  selectedItemsPerPage:number;
  
  selectedSortBy:string;

  cols: any[];

  page:number;
  
  constructor(
    private bookService: BookService,
    private location: Location,
    private userService: UserService,
    private httpClient: HttpClient,
    private router : Router) {
      this.search="";
      this.page=0;
      this.books = [];
      this.itemsPerPage=[
        {label:'5',value:5},
        {label:'10',value:10},
        {label:'20',value:20},
      ];
      this.selectedItemsPerPage=5;
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
    this.selectedSortBy="author";
    }

  ngOnInit() {
    this.userService.getUser().subscribe((user:any) => {});
    this.getBooks();
    this.sendRequestPage();
  }

  getBooks():void{
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  sendRequestSearch():void{
    let param = new HttpParams().append('key', this.search+"");
    this.httpClient.get("https://bookmanagerment.herokuapp.com/api/books/search",{params:param}).subscribe((books:any) => this.books = books);
  }

  save(id : number):void{
    this.bookService.updateBookDisable(id).subscribe(resp =>
      {
        this.sendRequestPage();
      });
  }

  sendRequestPage(){
    let param = new HttpParams().append('page', this.page+"").append('items',this.selectedItemsPerPage+"").append('sortBy',this.selectedSortBy).append('key', this.search);
    this.httpClient.get("https://bookmanagerment.herokuapp.com/api/books/getPage",{params:param}).subscribe((resp:any) => {
      this.bookShows = resp;
      this.getBooks();
      this.search = "";
    });
  }

  sortBy() {
    // event.first = this.sendRequestPage(event.page);
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
  }

  paginate(event) {
    // event.first = this.sendRequestPage(event.page);
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
    if(event.rows){
      this.selectedItemsPerPage=event.rows;
      this.page=event.page;
      this.sendRequestPage();
    }
    else this.sendRequestPage();
  }

  deteleBook(id: number): void{
    this.bookService.deleteBook(id).subscribe(resp => {this.getBooks();});
  }

  editBook(id: number): void{
    this.router.navigate(['/editBook/'+id]);
  }
}
