import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Counter } from './counter/counter.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListComponent } from './heroes/list/list.component';
import { UsuarioModule } from "./usuario/usuario.module";
import { provideHttpClient, withInterceptors } from '@angular/common/http';


import { TokenService } from './usuario/token.service';
import { httpauthInterceptor } from './auth.interceptor';





@NgModule({
  declarations: [
    AppComponent,Counter, HeroComponent, ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,UsuarioModule

],
  providers: [provideHttpClient( withInterceptors([httpauthInterceptor])), TokenService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
