import { Component, OnInit } from '@angular/core';
import { Login } from '../login';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
    const body = {
      email: this.email,
      password: this.password,
    }
    this.httpClient.post('http://localhost:8080/logining', body)
      .subscribe(response => {
        console.log(response);
      })
  }
}
