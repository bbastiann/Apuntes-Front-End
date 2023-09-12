import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private nuevoTextoServicio = new Subject<string>();
  constructor() { }

  //Dashboard a Servicio Usuario
  modificarTexto(texto: string): void {
    this.nuevoTextoServicio.next(texto)
  }

  //De Servicio Usuario a Inicio
  getTexto(): Observable<string>{
    return this.nuevoTextoServicio.asObservable();
  }
}
