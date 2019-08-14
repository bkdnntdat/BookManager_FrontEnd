import { Component, OnInit } from '@angular/core';
import { TokenService } from './services/token/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  constructor(
    private router: Router,
    private tokenService:TokenService){};
  url = 'http://localhost:4200';
  token = this.tokenService.getToken();

  login():void{
    this.router.navigate(['login']);
  }

  logouta():void{
    this.tokenService.clearToken();
    this.router.navigate(['login']);
  }

  readLocalStorage(): string{
    return this.tokenService.getToken();
  }
}