import { Component, Input, OnInit } from '@angular/core';
import { text } from 'express';
import { DataService } from 'src/app/servicios/data.service';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  contenidoEditor: string = ''; //propiedad que almacena el contenido del area de texto

  constructor( private dataService: DataService ) { } //inyecto el servicio
  //constructor () {}

  ngOnInit(): void {
    this.dataService.contenidoEditor$.subscribe(text => {
      //text = this.contenidoEditor;
      //console.log('desde editor: ', text);
      this.dataService.contenidoConsola$.emit(this.contenidoEditor);
    })
  }

  getContenido(contenido:string){
    this.contenidoEditor = contenido;
    console.log(this.contenidoEditor);
  }

  prueba2(){
    //this.contenidoEditor = cont;
    console.log(this.contenidoEditor);
  }
}

