import { Component, inject } from '@angular/core';
import { TokenService } from './usuario/token.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private tokenService:TokenService){

  }

  isLogged():boolean{
    return this.tokenService.isLogged();
  }

  logout(){
    this.tokenService.removeTocken();
  }




}
