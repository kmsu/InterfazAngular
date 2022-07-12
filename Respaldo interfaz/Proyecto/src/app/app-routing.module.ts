import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditorComponent } from './componentes/editor/editor.component';
import { PrincipalComponent } from './componentes/principal/principal.component';

const routes: Routes = [
  //esto es un json puedo meter mas rutas usando ,{}
  {
    path: 'index',
    component: PrincipalComponent
  },
  { path: '**', pathMatch: 'full', redirectTo: 'index'},//Cualquier ruta redirige a index
  //esta es otra pagina
  {
    path: 'editor',
    component: EditorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
