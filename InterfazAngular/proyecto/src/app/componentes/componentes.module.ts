import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar/navbar.component';
import { ConsolaComponent } from './consola/consola.component';
import { EditorComponent } from './editor/editor.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    NavbarComponent,
    ConsolaComponent,
    EditorComponent
  ],
  imports: [
    CommonModule,
    RouterModule //para tener toda la funcionalidad y hacer enlaces a las paginas de navegacion
  ],
  exports: [
    NavbarComponent,
    EditorComponent,
    ConsolaComponent
  ]
})
export class ComponentesModule { }
