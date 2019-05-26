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

  api_rest(){
    window.location.href = "https://github.com/DelgadoTrueba/Api-Rest-with-Spring-Boot";
  }

  delgadotruebaUI(){
    window.location.href = "https://github.com/DelgadoTrueba/delgadotrueba-ui";
  }

  delgadotruebaAPI(){
    window.location.href = "https://github.com/DelgadoTrueba/delgadotrueba-api";
  }

}
