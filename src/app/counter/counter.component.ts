
import { Component } from "@angular/core";

@Component({
  templateUrl:'./counter.component.html',
  selector: 'countcomponent'
})
export class Counter{
  public nombrecontador: string = 'Contador';
  private contador:number = 0;

  public aniade = (n: number = 1):void => {
    this.contador += n;
  }

  public resta = (n: number = 1): void => {
    this.contador -= n;
  }

  public getcontador(){
    return this.contador;
  }

}
