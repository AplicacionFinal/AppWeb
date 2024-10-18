import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  setTocken(token:string):void{
    localStorage.setItem('AuthToken',token);
  }

  getTocken():string|null{
    return localStorage.getItem('AuthToken');
  }

  removeTocken(){
    return localStorage.removeItem('AuthToken');
  }

  isLogged():boolean{
    return localStorage.getItem('AuthToken')!=null;
  }

}
