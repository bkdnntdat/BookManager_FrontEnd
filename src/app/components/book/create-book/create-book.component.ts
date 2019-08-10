import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class BookComponent implements OnInit {

  title: string;
  description: string;
  author: string;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() {
  }

  post(): void{
    console.log(this.title, this.description, this.author);
    const body={
      title: this.title,
      description: this.description,
      author: this.author
    }

    this.httpClient.post("http://localhost:8080/book", body).subscribe(resp => {});
  }

}
