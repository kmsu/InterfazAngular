import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { ComponentesModule } from '../componentes/componentes.module';
import { ReporteErroresComponent } from './reporte-errores/reporte-errores.component';
import { ReporteASTComponent } from './reporte-ast/reporte-ast.component';
import { ReporteTSComponent } from './reporte-ts/reporte-ts.component';


@NgModule({
  declarations: [
    HomeComponent,
    ReporteErroresComponent,
    ReporteASTComponent,
    ReporteTSComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule //importar para poder usar los componentes en las paginas
  ]
})
export class PaginasModule { }
