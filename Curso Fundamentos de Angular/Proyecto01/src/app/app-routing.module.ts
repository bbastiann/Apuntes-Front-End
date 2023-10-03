import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ListadoUsuariosComponent } from './components/dashboard/listado-usuarios/listado-usuarios.component';
import { UsuarioComponent } from './components/dashboard/usuario/usuario.component';

const routes: Routes = [
  
  { path: 'inicio', component: InicioComponent },
  { path: 'Dashboard', component: DashboardComponent, children: [
        {path: '', component: ListadoUsuariosComponent},
        {path: 'usuario', component: UsuarioComponent}
  ]},
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent} // el ** significa cualquier otra cosa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }