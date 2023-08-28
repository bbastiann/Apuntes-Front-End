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


//two-way data binding
@Input() nuevoTextoTwoWay!: string; //! indica que esta propiedad no puede ser Null o Undefined
@Output() nuevoTextoTwoWayChange = new EventEmitter<string>(); //Como buena practica es bueno que nuestro Output tenga la palabra Change

  constructor() {

    this.textCard = "";
  }


  //Metodo que utilizaremos para la comunicacion Hijo - Padre
  CambiarTextoPadre(): void{
    this.nuevoEvento.emit("Este es el nuevo Texto Padre");
  }  

  //two-way data binding
  cambiarTextoTwoWay(): void{
    this.nuevoTextoTwoWayChange.emit("Este es el nuevo Texto Padre por Two Way Data binding");
  }

}
