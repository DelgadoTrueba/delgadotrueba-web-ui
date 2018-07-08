import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    window.location.href = "https://medium.com/@delgadotrueba/titulo-de-prueba-abacdaf9ea90";
  }

}
