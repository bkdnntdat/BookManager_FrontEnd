import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/user/user.service';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  user: User;
  constructor(
    private router: Router,
    private tokenService:TokenService,
    private httpClient:HttpClient,
    private userService: UserService){
    };

  url = 'http://localhost:4200';
  token = this.tokenService.getToken();

  login():void{
    this.router.navigate(['login']);
  }

  logouta():void{
    this.httpClient.delete("http://localhost:8080/api/auth").subscribe();
    this.tokenService.clearToken();
    this.userService.saveUser();
    this.router.navigate(['login']);
  }

  readLocalStorage(): string{
    return this.tokenService.getToken();
  }

  getUser():User{
    return this.userService.getUserStatic();
  }
}