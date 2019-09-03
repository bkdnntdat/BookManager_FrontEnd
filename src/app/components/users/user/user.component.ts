import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UserService,
    private route:ActivatedRoute,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUser();
  }

  getUser():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(id).subscribe(user => this.user = user);
  }

  getUserStatic():User{
    return this.userService.getUserStatic();
  }

  enableOrDisable():void{
    this.httpClient.put('https://bookmanagerment.herokuapp.com/api/users',this.user).subscribe();
  }
}
