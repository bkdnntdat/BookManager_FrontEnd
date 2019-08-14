import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly jwtToken = 'jwtToken';

  constructor() { }

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
