import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { successful, User } from './user.schema';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private UrlRegistro = 'http://192.168.1.38:3002/account/register'; // Cambia esto si tu URL es diferente
  private UrlFind = 'http://192.168.1.38:3002/account/exist';

  constructor(private http:HttpClient) {

  }

  public alreadyexist(user:User):Observable<successful>{
    console.log(user);
     return this.http.post<successful>(this.UrlFind, user);//.subscribe(
    //   (response):any => {
    //     console.log('Respuesta del servidor:', response);
    //     return response;

    //   },
    //   (error):any => {
    //     console.error('Error en la solicitud POST:', error);
    //     throw new Error('Error en la comunicación con el Gateway');
    //   }
    // );

  }


  public register(user: User):Observable<successful> {

    return this.http.post<successful>(this.UrlRegistro, user);

  }
}
