import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

//Comunicacion entre componentes
//Padre - Hijo
@Input() textCard: string;
  

//Hijo - Padre
@Output() nuevoEvento = new EventEmitter<string>(); 

  constructor() {

    this.textCard = "";
  }


  //Metodo que utilizaremos para la comunicacion Hijo - Padre
  CambiarTextoPadre(): void{
    this.nuevoEvento.emit("Este es el nuevo Texto Padre");
  }  

}
