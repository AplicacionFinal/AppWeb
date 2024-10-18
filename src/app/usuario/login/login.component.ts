import { Component, inject } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Token, UserLogin } from '../user.schema';

import { TokenService } from '../token.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
   private loginService = inject(LoginService);
    private tokenService = inject(TokenService);

  profileForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')

  })

  public onSubmit(){
    const user: UserLogin = {usernameocorreo:this.profileForm.value.username as string,password: this.profileForm.value.password};

      // Llamar al servicio con el objeto User y suscribirse a la respuesta
      const respuesta = this.loginService.login(user).subscribe(
        (token: Token) => {
          console.log('Token recibido:', token);
          // Aquí puedes almacenar el token en el localStorage o sessionStorage si es necesario
          this.tokenService.setTocken(token.access_token);
          this.profileForm.reset();
        },
        (error) => {
          console.error('Error de autenticación:', error);
        }
      );



  }

  public logout(){

      // Eliminar el token del localStorage o sessionStorage
      this.tokenService.removeTocken();
      console.log('Sesión cerrada');

  }



}
