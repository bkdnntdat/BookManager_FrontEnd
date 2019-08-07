import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user/user.service';
import { TokenService } from '../services/token/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

   token: string;

   constructor(private userService: UserService, private tokenService: TokenService) { }

  // getToken():void{
  //   this.userService.getToken().subscribe(token => {
  //     this.token = token;
  //   }
  //   );
  //   localStorage.setItem('token', this.token);
  // }

  ngOnInit() {
    this.token = this.tokenService.getToken()// this.getToken();
  }

}
