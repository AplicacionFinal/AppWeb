import { AccountComponent } from './usuario/account/account.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './usuario/login/login.component';
import { RegistroComponent } from './usuario/registro/registro.component';
import { ListComponent } from './heroes/list/list.component';
import { Counter } from './counter/counter.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [ // Ruta por defecto
  { path: 'heroes', component: ListComponent}, // Ruta a About
  { path: 'list', component: ListComponent }, // Ruta a About
  { path: 'login', component: LoginComponent }, // Ruta a About
  { path: 'register', component: RegistroComponent },
  { path: 'counter', component: Counter }, // Ruta para manejar errores 404
  { path: 'account', component: AccountComponent ,canActivate: [AuthGuard]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
