import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mostrador-articulos',
  templateUrl: './mostrador-articulos.component.html',
  styleUrls: ['./mostrador-articulos.component.css']
})
export class MostradorArticulosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
