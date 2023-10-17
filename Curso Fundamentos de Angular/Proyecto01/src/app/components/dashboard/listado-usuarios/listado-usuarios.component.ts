import { Component } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent {
  
  listaUsuarios: any;
  cargando: boolean;
  
  //Servicio: inyectamos el servivio en el constructor.
  constructor(private usuarioService: UsuarioService) {
    this.cargando = true;
    //Peticiones HTTP
    this.usuarioService.getUsusarios().subscribe(data => {
      this.cargando = false;
      this.listaUsuarios = data;
      //console.log("data es " + data);
    });

    
  }
}
