import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Login } from '../../../models/login';
import { HttpClient } from '@angular/common/http';
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
    this.httpClient.post('http://localhost:8080/api/login', body)
      .subscribe((response: any) => {
        this.token = response.token;
        this.tokenService.saveToken(this.token);
        this.router.navigate(['user']);
      })
  }

  signUp(): void{
    this.router.navigate(['signup']);
  }
}
