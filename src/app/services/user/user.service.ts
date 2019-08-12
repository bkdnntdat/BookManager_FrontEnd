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
  private urlApi='http://localhost:8080/user';
  user: User;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private httpClient:HttpClient,
    private tokenService: TokenService,
    private router: Router
    ) {}

    getToken():Observable<string>{
      return this.httpClient.get<string>(`${this.url}/login`).pipe()
    }
}
