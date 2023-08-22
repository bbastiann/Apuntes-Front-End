import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//Importamos el componente creado
import {componenteComponent} from './components/componente/componente.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/dashboard/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    componenteComponent, //Componente que creamos 
    NavbarComponent,
    DashboardComponent,
    FooterComponent,
    CardComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
