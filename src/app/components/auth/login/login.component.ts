import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Login } from '../../../models/login';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token/token.service';
import { catchError } from 'rxjs/operators';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { AppComponent } from 'src/app/app.component';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent implements OnInit {
  // @ViewChild('email') emailView : ElementRef;
  msgs: Message[] = [];

  login: Login;
  email: string;
  password: string;
  token: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.getUser();
  }

  sendRequestLogin(): void {
    console.log(this.email, this.password);

    const body = {
      email: this.email,
      password: this.password,
    }

    this.httpClient.post('https://bookmanagerment.herokuapp.com/api/auth', body)
      .subscribe((response: any) => {
        console.log(response);
        if(response.token!=null){
          this.token = response.token;
          this.tokenService.saveToken(this.token);
          this.router.navigate(['books']);
          this.userService.saveUserStatic();
        }
      },
      error => {alert("Email or password is incorrect")})
    // this.httpClient.get('https://bookmanagerment.herokuapp.com/user/token').subscribe((resp:any) =>{
    //   if(resp.code == null){
    //     this.router.navigate(['books']);
    //   }
    //   else{
    //     this.router.navigate(['confirmCode']);
    //   }
    //   }) 
  }

  signUp(): void{
    this.router.navigate(['signup']);
  }

  // getUser(): void{
  //   if(this.tokenService.getToken()==null) return;
  //   this.httpClient.get('https://bookmanagerment.herokuapp.com/user').subscribe((resp:any) =>{
  //     if(resp.code == null){
  //       this.router.navigate(['books']);
  //     }
  //     else{
  //       this.router.navigate(['confirmCode']);
  //     }
  //   })}
}
