import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Importamos el componente creado
import {componenteComponent} from './components/componente/componente.component';

@NgModule({
  declarations: [
    AppComponent,
    componenteComponent //Importamos nuestro nuevo componente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
