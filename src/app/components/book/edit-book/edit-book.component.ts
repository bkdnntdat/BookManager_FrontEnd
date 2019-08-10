import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/app/models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {

  book: Book;

  constructor(
    private httpClient: HttpClient,
    private route: ActivatedRoute,
    private bookService: BookService,
    private location: Location) { }

  ngOnInit() {
    this.getBook();
  }

  getBook():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  save():void{
    this.bookService.updateBook(this.book).subscribe(()=> this.goBack());
  }

  goBack(): void{
    this.location.back();
  }

}
