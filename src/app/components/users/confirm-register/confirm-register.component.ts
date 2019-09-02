import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.scss']
})
export class ConfirmRegisterComponent implements OnInit {
  code: string;

  user:User;

  constructor(private tokenService: TokenService, 
    private userService: UserService, 
    private httpClient:HttpClient,
    private router: Router) { }

  ngOnInit() {
    this.getUser();
    this.user = this.userService.user;
  }

  confirm(): void{
    console.log(this.code);
    const body = {
      code: this.code,
      token: this.tokenService.getToken()
    }
    
    this.httpClient.post('https://bookmanagerment.herokuapp.com/api/users/confirm', body).subscribe((resp:any) =>{
      this.tokenService.saveToken(resp.token);
      this.router.navigate(['user'])
    });
  }
  
  getUser(): void{
    this.httpClient.get('https://bookmanagerment.herokuapp.com/api/users/user').subscribe((resp:any) =>{this.user = resp});
  }
}
