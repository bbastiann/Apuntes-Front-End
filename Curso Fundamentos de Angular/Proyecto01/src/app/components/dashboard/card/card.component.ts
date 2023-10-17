import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

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
  email: string;
  gender: string;
  status: string; 

  //Parametros en la URL
  id: number;

  //Pasar parametros por URL con Event Binding- Inyectamos private router: Router
  constructor(private router: Router) {

    this.textCard = "";

    //Directivas

    this.nombre = "";
    this.email = "";
    this.gender = "";
    this.status = "";
    this.id = 0;
  }

  ngOnInit(){
    this.nombre = this.User.name;
    this.email = this.User.email;
    this.gender = this.User.gender;
    this.status = this.User.status;
    this.id = this.User.id;

  }
  //Metodo que utilizaremos para la comunicacion Hijo - Padre
  CambiarTextoPadre(): void{
    this.nuevoEvento.emit("Este es el nuevo Texto Padre");
  }  

  //two-way data binding
  cambiarTextoTwoWay(): void{
    this.nuevoTextoTwoWayChange.emit("Este es el nuevo Texto Padre por Two Way Data binding");
  }

  //Pasar parametros por URL con Event Binding
  verDetalles(): void{
    //alert("Usted va a ver los detalles");
    this.router.navigate(['Dashboard/usuario'], {
        queryParams: {id: this.id}});
  }

}
