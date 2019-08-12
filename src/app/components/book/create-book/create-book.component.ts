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
  user:User;

  constructor(private httpClient:HttpClient,
    private userService: UserService,
    private tokenService: TokenService,
    private localtion: Location) { }

  ngOnInit() {
    this.getUser();
  }

  post(): void{
    console.log(this.title, this.description, this.author);
    const body={
      title: this.title,
      description: this.description,
      author: this.author,
      user: this.user
    }

    this.httpClient.post("http://localhost:8080/book", body).subscribe(resp => {});
    
    this.goBack();
  }

  getUser(): void{
    let param = new HttpParams().append('token', this.tokenService.getToken());
    this.httpClient.get('http://localhost:8080/user/token', {params:param}).subscribe((resp:any) =>{this.user = resp});
  }

  goBack():void{
    this.localtion.back();
  }
}
