import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { TokenService } from '../services/token/token.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

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
     private httpClient: HttpClient,
     private location: Location,
     private router: Router) { }

  ngOnInit() {
    this.getToken();
  }

  getToken(): void{
      if(this.tokenService.getToken()!=null){
        this.router.navigate(['books']);
      }
      else{
        this.router.navigate(['login']);
      }
    }
  }
