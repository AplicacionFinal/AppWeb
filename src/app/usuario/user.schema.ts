export interface User {
  username?:string|null;
  name?: string|null;
  email?: string|null;
  password?: string|null; // No olvides manejar las contraseñas de forma segura
}

export interface UserLogin {
  usernameocorreo?:string | null | undefined;
  password?: string | null | undefined;
}

export interface Token{
  access_token:string;
}


export interface successful{
  success:number;

}
