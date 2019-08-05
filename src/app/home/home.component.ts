import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: User;

  constructor(private userService: UserService) { }

  getUser():void{
    this.userService.getUser().subscribe(user => {
      this.user = user;
    }
      
    );
  }

  ngOnInit() {
    this.getUser();
  }

}
