import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Login } from '../login';
import { HttpClient } from '@angular/common/http';

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

  constructor(
    private httpClient: HttpClient,
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
    this.httpClient.post('http://localhost:8080/login', body)
      .subscribe(response => {
        console.log(response);
      })
      
      window.location.href = "/user";
  }
}
