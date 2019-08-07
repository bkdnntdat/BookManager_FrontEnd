import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token/token.service';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-confirm-register',
  templateUrl: './confirm-register.component.html',
  styleUrls: ['./confirm-register.component.scss']
})
export class ConfirmRegisterComponent implements OnInit {
  code: string;

  constructor(private tokenService: TokenService, private userService: UserService) { }

  ngOnInit() {
  }

  confirm(): void{
    console.log(this.code);
    // this.
  }

}
