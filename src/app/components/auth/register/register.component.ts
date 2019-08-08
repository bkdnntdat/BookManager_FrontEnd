import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';

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

  constructor(private httpClient: HttpClient,
    private router: Router,
    private tokenService: TokenService) {}

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

    this.httpClient.post('http://localhost:8080/user',body).subscribe((response:any) => {
      console.log(response);
      this.tokenService.saveToken(response.token);
    }); 

    this.router.navigate(['confirmCode']);
  }

}
