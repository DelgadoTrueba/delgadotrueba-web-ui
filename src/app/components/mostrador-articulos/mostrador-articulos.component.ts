import { Component, OnInit } from '@angular/core';

//Import Service
import {DelgadotruebaService} from '../../services/delgadotrueba.service'

@Component({
  selector: 'app-mostrador-articulos',
  templateUrl: './mostrador-articulos.component.html',
  styleUrls: ['./mostrador-articulos.component.css']
})
export class MostradorArticulosComponent implements OnInit {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(
    private _delgadotruebaService :DelgadotruebaService
  ) { }

  ngOnInit() {
  }

  service(){
    this._delgadotruebaService.getArchivo().subscribe(
      (articles) => { console.log(articles) },
      (err) => { console.log(err) }
    )
  }

}
