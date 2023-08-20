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

  constructor() {
    this.urlImage = "https://w7.pngwing.com/pngs/201/90/png-transparent-logo-html-html5.png";
    this.textoPlaceHolder = "Escribe Aqui.....";
    this.isDisabled = false;

    //Variables de Event Binding
    this.titulo = "Event Binding"

  }


  ngOnInit(): void{}

  getURL(): string{
    return this.urlImage = "Alejandro";
  }

  cambiarTexto(): void{
    this.titulo = "Esto es Event Binding";
  }
}
