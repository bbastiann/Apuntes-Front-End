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


//Directivas:

  @Input() User: any;
  nombre: string;
  edad: string;
  sexo: string; 

  constructor() {

    this.textCard = "";

    //Directivas

    this.nombre = '';
    this.edad = '';
    this.sexo = '';
  }

  ngOnInit(){
    this.nombre = this.User.nombre;
    this.edad = this.User.edad;
    this.sexo = this.User.sexo;

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
