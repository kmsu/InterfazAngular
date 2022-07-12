import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css']
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutInfo(){
    alert("Nombre: Kevin Samayoa \nCarnet: 200915348 \nOLC1")
  }

  Abrir(){
    alert("voy a cargar el archivo")
  }
}
