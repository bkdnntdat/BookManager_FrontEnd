import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token/token.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(
    private router: Router,
    private tokenService:TokenService,
    private httpClient:HttpClient){};

  url = 'http://localhost:4200';
  token = this.tokenService.getToken();

  login():void{
    this.router.navigate(['login']);
  }

  logouta():void{
    this.httpClient.delete("http://localhost:8080/auth").subscribe();
    this.router.navigate(['login']);
    this.tokenService.clearToken();
  }

  readLocalStorage(): string{
    return this.tokenService.getToken();
  }
}