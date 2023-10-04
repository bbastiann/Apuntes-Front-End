import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  id: string;

  //Creamos las variables para suscribirnos al servicio 
  nombre: string;
  email: string;
  genero: string;
  status: string;

  //inyectamos en nuestro constructor aRoute y nuestro servicio UsuarioService
  constructor(private aRoute: ActivatedRoute,
     private usuarioService: UsuarioService){

      this.nombre = "";
      this.email = "";
      this.genero = "";
      this.status = "";
    

      /*Esta línea de código obtiene el valor del parámetro de ruta "id" 
      de la URL actual en Angular y lo asigna a la propiedad "id" del objeto 
      actual, asumiendo que siempre habrá un valor válido para "id" en la URL.*/
      this.id = this.aRoute.snapshot.paramMap.get('id')!;
      console.log("id es " + this.id);

      //nos suscribimos al servicio
      this.usuarioService.getUsusario(this.id).subscribe(data => {
          this.nombre = data.name;
          this.email = data.email;
          this.genero = data.gender;
          this.status = data.status;
      });
      
  }
  ngOnInit(): void {

  }
}
