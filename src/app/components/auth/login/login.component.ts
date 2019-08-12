import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Login } from '../../../models/login';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from '../../../services/token/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // @ViewChild('email') emailView : ElementRef;

  login: Login;
  email: string;
  password: string;
  token: string;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private tokenService: TokenService,
  ) { }

  ngOnInit() {
  }

  sendRequestLogin(): void {
    console.log(this.email, this.password);

    if(this.email==''){
      alert('Email non null');
      return;
    }

    if(this.password==''){
      alert('Password non null');
      return;
    }

    const body = {
      email: this.email,
      password: this.password,
    }
    this.httpClient.post('http://localhost:8080/auth', body)
      .subscribe((response: any) => {
        this.token = response.token;
        this.tokenService.clearToken();
        this.tokenService.saveToken(this.token);
        
        let param = new HttpParams().append('token', this.tokenService.getToken());
        this.httpClient.get('http://localhost:8080/user/token', {params:param}).subscribe((resp:any) =>{
        if(resp.code == null){
          this.router.navigate(['user']);
        }
        else{
          this.router.navigate(['confirmCode']);
        }
        })
      })
  }

  signUp(): void{
    this.router.navigate(['signup']);
  }

  getUser(): void{
    let param = new HttpParams().append('token', this.tokenService.getToken());
    this.httpClient.get('http://localhost:8080/user', {params:param}).subscribe((resp:any) =>{
      if(resp.code == null){
        this.router.navigate(['user']);
      }
    })}
}
