import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token/token.service';
import {Message} from 'primeng/components/common/api';
import {MessageService} from 'primeng/components/common/messageservice';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers:[MessageService]
})
export class RegisterComponent implements OnInit {

  first_name: string;
  last_name: string;
  email: string;
  password: string;

  constructor(private httpClient: HttpClient,
    private router: Router,
    private tokenService: TokenService,
    private userService: UserService) {}

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

    this.httpClient.post('https://bookmanagerment.herokuapp.com/api/users',body).subscribe((response:any) => {
      console.log(response);
      this.tokenService.saveToken(response.token);
      this.userService.saveUserStatic();
      this.router.navigate(['books']);
    },
    error => {alert("asd")}
    ); 
  }

  validation():void{
    alert("Firstname, lastname, email, password is required");
  }

}
