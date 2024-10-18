
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RegistroService } from '../registro.service';
import { successful, User } from '../user.schema';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {

  private registrocorreto: boolean = false;
  private registroService = inject(RegistroService);

  profileForm = new FormGroup({
    username: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })
  constructor(){
    this.profileForm.get('username')?.valueChanges.subscribe(async (username) => {
      console.log('Username changed: ', username);

      this.registroService.alreadyexist({ username: username }).subscribe({
        next: (value) => {
          const usernameControl = this.profileForm.get('username');

          if (value.success == 1) {
            // El nombre de usuario no es único, establecer error
            usernameControl?.setErrors({ notUnique: true });
          } else {
            // El nombre de usuario es único, eliminar error
            usernameControl?.setErrors(null);
          }
        },
        error: (err) => {
          console.error('Error al verificar si el nombre de usuario ya existe', err);
        }
      });



    });

    this.profileForm.get('email')?.valueChanges.subscribe((email) => {
      console.log('Username changed: ', email);

      this.registroService.alreadyexist({ email: email }).subscribe({
        next: (value) => {
          const emailControl = this.profileForm.get('email');

          if (value.success == 1) {
            // El nombre de usuario no es único, establecer error
            emailControl?.setErrors({ notUnique: true });
          } else {
            // El nombre de usuario es único, eliminar error
            emailControl?.setErrors(null);
          }
        },
        error: (err) => {
          console.error('Error al verificar si el nombre de usuario ya existe', err);
        }
      });



    });

  }






  public onSubmit(){
    const user: User = this.profileForm.value as User;

      // Llamar al servicio con el objeto User y suscribirse a la respuesta


      this.registroService.register(user).subscribe({

          next: (value) => {
            console.log(value);
            if(value.success == 1){
              this.registrocorreto = true;
              this.profileForm.reset();
              window.alert('Usuario Registrado Correctamente');
            }
            else{
              window.alert('Usuario Registrado Incorrectamente');
              this.registrocorreto = false;
            }
          }

      })






  }

  public getregistrocorrecto(){
    return this.registrocorreto;
  }

/*

  private fb = inject(FormBuilder);
  private registroService = inject(RegistroService);

  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')

  })


  /*En el constructor del Componente tenemos que indicar como parámetros los servicios que vamos a utilizar





  public onSubmit(){
    console.warn("Se intentan registrar");
    console.log(this.profileForm.value.name);

    this.registroService.register(this.profileForm.value.name);
    //this.registroService.register(this.profileForm.value)

  }
*/

}
