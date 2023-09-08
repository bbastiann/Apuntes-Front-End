import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{


  //Variable de Property binging
  urlImage: string;
  textoPlaceHolder: string;
  isDisabled: boolean;

  //Variables de Event Binding
  titulo: string;

  //Comunicacion entre Componentes 
  //Padre-Hijo
  componenteTitle: string;
  
  //Hijo-Padre
  textoPadre: string;

   //Two-Way Data Binding
   textoTwoWay: string;

   textoejemplo: string;

   //DIRECTIVAS:
  listaUsuarios: any[];
  

  constructor() {
    this.urlImage = "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png";
    this.textoPlaceHolder = "Escribe Aqui.....";
    this.isDisabled = false;

    //Variables de Event Binding
    this.titulo = "Event Binding"

    //Comunicacion entre Componentes 
    this.componenteTitle = "Este es un componente hijo";

    this.textoPadre = "Texto del Padre";

   //Two-Way Data Binding
   this.textoTwoWay = "Antiguo Texto Two-Way";


   this.textoejemplo = "";

    //DIRECTIVAS:
   this.listaUsuarios = [
    {nombre: "Pedro", edad: "25", sexo: "M"},
    {nombre: "Maria", edad: "15", sexo: "F"},
    {nombre: "Juan", edad: "35", sexo: "M"},
    {nombre: "Fernanda", edad: "20", sexo: "F"},
    {nombre: "Juan", edad: "10", sexo: "M"},
   ]

  
  }


  ngOnInit(): void{

    
  }

  getURL(): string{
    return this.urlImage = "Alejandro";
  }

  cambiarTexto(): void{
    this.titulo = "Esto es Event Binding";
    this.componenteTitle = "El texto del componente hijo a sido cambiado"
  }

  cambiarTextoDelPadre(nuevoTexto: string): void{
    this.textoPadre = nuevoTexto;
  }

}
