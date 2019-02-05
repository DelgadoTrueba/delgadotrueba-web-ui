import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  porfolio(){
    window.location.href = "https://github.com/DelgadoTrueba/angular6-EsqueletoBasico";
  }

}
