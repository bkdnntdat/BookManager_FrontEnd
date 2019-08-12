import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { TokenService } from '../services/token/token.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   token: string;
   user: User;

   constructor(
     private userService: UserService,
     private tokenService: TokenService,
     private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void{
    let param = new HttpParams().append('token', this.tokenService.getToken());
    this.httpClient.get('http://localhost:8080/user/token', {params:param}).subscribe((resp:any) =>{this.user = resp});
  }
}
