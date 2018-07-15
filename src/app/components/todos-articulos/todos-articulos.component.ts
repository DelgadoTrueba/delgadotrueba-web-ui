import { Component, OnInit } from '@angular/core';

//Import Service
import {DelgadotruebaService} from '../../services/delgadotrueba.service'

@Component({
  selector: 'app-todos-articulos',
  templateUrl: './todos-articulos.component.html',
  styleUrls: ['./todos-articulos.component.css']
})
export class TodosArticulosComponent implements OnInit {

  public archivo;

  constructor(
    private _delgadotruebaService :DelgadotruebaService
  ) { }

  ngOnInit() {
    this._delgadotruebaService.getArchivo().subscribe(
      (archivo) => { 
        this.archivo = archivo;
        console.log(archivo);
      },
      (err) => { console.log(err) }
    )
  }

}
