import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Token, User, UserLogin } from './user.schema';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3002/account/register';

  constructor(private http: HttpClient,private router: Router) { //Al declararlo como privado lo conviertes directamente en un atributo
  }

  public login(user: UserLogin): Observable<Token> {
    return this.http.post<Token>(this.apiUrl, user);
  }





}
