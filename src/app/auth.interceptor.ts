
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptorFn, HttpHandlerFn } from '@angular/common/http';
import { Observable } from 'rxjs';




  export const httpauthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> =>  {
    const authToken = localStorage.getItem('AuthToken');
    console.log("Ejecuto el Interceptor");

    if (authToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${authToken}`)
      });
      console.log("Le añado la cookie");
      return next(cloned);
    }

    return next(req);
  }
