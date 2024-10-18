import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  private nombreheroes: string[] = [
    'Spider-Man',
    'Iron Man',
    'Captain America',
    'Thor',
    'Hulk',
    'Black Widow',
    'Wolverine',
    'Doctor Strange',
    'Superman',
    'Batman',
    'Wonder Woman',
    'Flash',
    'Green Lantern',
    'Aquaman',
    'Cyborg',
    'Green Arrow'
];

  private ultimoelementoborrado?:string = undefined;

  public getHero = ():String[] => {
    return this.nombreheroes;
  }

  public borrarultimoelemento():string|undefined {
    return this.ultimoelementoborrado = this.nombreheroes.pop();
  }

  public getultimoelementoborrado = ():string|undefined => {
    return this.ultimoelementoborrado;
  }


}
