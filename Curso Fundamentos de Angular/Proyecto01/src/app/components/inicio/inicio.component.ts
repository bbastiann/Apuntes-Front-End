import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  textoinicio: string;

  //inyectamos el Servicio Usuario en nuestro constructor
  constructor(private usuarioService: UsuarioService){

    this.textoinicio = "";
    this.usuarioService.getTexto().subscribe(data =>{
      this.textoinicio = data;
    });
  }
}
