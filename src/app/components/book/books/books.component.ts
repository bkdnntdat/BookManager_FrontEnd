import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/services/book/book.service';
import { Book } from 'src/app/models/book';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { SortEvent } from 'src/app/models/sort/sortevent';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books:Book[];

  cols: any[];

  search: string;

  itemsPerPage: SelectItem[];

  selectedItemsPerPage:number;
  
  constructor(
    private bookService: BookService,
    private location: Location,
    private userService: UserService,
    private httpClient: HttpClient) {
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

    this.cols = [
      { field: 'id', header: 'Id', display: 'none' },
      { field: 'title', header: 'Title' },
      { field: 'author', header: 'Author' },
      { field: 'createdAt', header: 'Created At'},
      { field: 'updatedAt', header: 'Updated At'},
      { field: 'year', header: 'Year'},
      { field: 'description', header: 'Description', display:'none'}
  ];
  }

  getBooks():void{
    this.bookService.getBooks().subscribe(books => this.books = books);
  }

  sendRequestSearch():void{
    let param = new HttpParams().append('key', this.search+"");
    this.httpClient.get("http://localhost:8080/api/books/search",{params:param}).subscribe((books:any) => this.books = books);
  }

  customSort(event: SortEvent) {
    event.data.sort((data1, data2) => {
        let value1 = data1[event.field];
        let value2 = data2[event.field];
        let result = null;

        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        else if (typeof value1 === 'string' && typeof value2 === 'string')
            result = value1.localeCompare(value2);
        else
            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;

        return (event.order * result);
    });
}
}
