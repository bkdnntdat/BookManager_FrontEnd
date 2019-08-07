import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
  }

  signUp(): void{
    console.log(this.first_name, this.last_name, this.email, this.password);
    const body={
      firstName: this.first_name,
      lastName: this.last_name,
      email: this.email,
      password: this.password,
    }

    this.httpClient.post('http://localhost:8080/signup',body).subscribe(response => console.log(response)); 
  }

}
