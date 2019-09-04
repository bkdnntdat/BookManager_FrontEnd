import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  users: User[];

  cols: any[];

  constructor(
    private userService: UserService,
    private location: Location,
    private router: Router,
    private httpClient: HttpClient) { }

  ngOnInit() {
    this.getUsers();

    this.cols = [
      {field: 'id', header: 'Id', display: 'none'},
      {field: 'email', header: 'Email'},
      // {field: 'role.name', header: 'Role'},
      {field: 'enabled', header: 'Enable'}
    ]
  }

  getUsers():void{
    this.userService.getUsers().subscribe(users => this.users = users);
  }

  enableOrDisable(user: User):void{
    this.httpClient.put('https://bookmanagerment.herokuapp.com/api/users',user).subscribe();
  }
}
