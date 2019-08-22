import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UserService } from 'src/app/services/user/user.service';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/token/token.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class BookComponent implements OnInit {

  title: string;
  description: string;
  author: string;
  year: string;

  constructor(private httpClient:HttpClient,
    private userService: UserService,
    private tokenService: TokenService,
    private localtion: Location) { }

  ngOnInit() {
  }

  post(): void{
    console.log(this.title, this.description, this.author, this.year);
    const body={
      title: this.title,
      description: this.description,
      author: this.author,
      year: this.year
    }

    this.httpClient.post("http://localhost:8080/api/books", body).subscribe(resp => {this.goBack();},
    error => {alert("Title, description, author, year is required")}
    );
  }

  goBack():void{
    this.localtion.back();
  }
}
