import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit{

  

  //Creamos las variables para suscribirnos al servicio 
  nombre: string;
  email: string;
  genero: string;
  status: string;
  id: string;

  cargando: boolean;

  //inyectamos en nuestro constructor aRoute y nuestro servicio UsuarioService
  constructor(private aRoute: ActivatedRoute,
    private usuarioService: UsuarioService){

     this.nombre = "";
     this.email = "";
     this.genero = "";
     this.status = "";
     this.id = "";
     this.cargando = true;
   
     this.aRoute.queryParamMap.pipe(filter(params => params.has('id'))).subscribe(params =>{
       // Obtenemos el valor del parámetro `id` usando el método `get()`
       const id = params.get('id');

       // Comprobamos si el valor del parámetro `id` no es nulo
       if (id !== null) {
         // El valor del parámetro `id` no es nulo, así que podemos asignarlo a nuestra variable `id`
         this.id = id;

         // Nos suscribimos al servicio para obtener el usuario
         this.usuarioService.getUsusario(this.id).subscribe(data => {
           this.nombre = data.name;
           this.email = data.email;
           this.genero = data.gender;
           this.status = data.status;
           this.cargando = false;
         });
       }
     });
     
 }

  ngOnInit(): void {

  }
}
