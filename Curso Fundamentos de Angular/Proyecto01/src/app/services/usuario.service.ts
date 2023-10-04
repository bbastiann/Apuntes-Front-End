import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private nuevoTextoServicio = new Subject<string>();
  constructor(private http: HttpClient) { }

  
  
  /*
  //Dashboard a Servicio Usuario
  modificarTexto(texto: string): void {
    this.nuevoTextoServicio.next(texto)
  }

  //De Servicio Usuario a Inicio
  getTexto(): Observable<string>{
    return this.nuevoTextoServicio.asObservable();
  }
  */

  getUsusarios(): Observable<any>{
    const URL = "https://gorest.co.in/public/v2/users";
    return this.http.get(URL)
  }


  //Creamos un metodo para recibir la informacion de un usuario en especifico
  //con su ID
  getUsusario(id: any): Observable<any>{
    const URL = "https://gorest.co.in/public/v2/users/" + id;
    return this.http.get(URL)
  }
}
