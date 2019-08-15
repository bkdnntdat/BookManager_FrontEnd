import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly jwtToken = 'jwtToken';

  saveToken(token: string) {
    localStorage[this.jwtToken] = token;
  }

  getToken(): string {
    return localStorage[this.jwtToken];
  }

  clearToken(): void {
    localStorage.removeItem(this.jwtToken);
  }
}
