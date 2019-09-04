import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../../models/user';
import { catchError, tap, map } from 'rxjs/operators';
import { TokenService } from '../token/token.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url='http://localhost:4200';
  private urlApi='https://bookmanagerment.herokuapp.com/api/users';
  user: User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient:HttpClient,
    private tokenService: TokenService,
    private router: Router
    ) {
      this.saveUserStatic();
    }

    getToken():Observable<string>{
      return this.httpClient.get<string>(`${this.url}/login`).pipe();
    }

    getUsers(): Observable<User[]>{
      return this.httpClient.get<User[]>(this.urlApi).pipe();
    }

    getUser(): Observable<User>{
      return this.httpClient.get<User>(this.urlApi+"/user").pipe();
    }

    getUserById(id: number): Observable<User>{
      return this.httpClient.get<User>(this.urlApi+"/" + id).pipe();
    }

    getUserStatic():User{
      return this.user;
    }

    getUserId():number{
      return this.user.id;
    }

    saveUserStatic():void{
      this.getUser().subscribe(user => this.user = user);
    }

    deleteUserStatic():void{
      this.user = null;
    }

}
