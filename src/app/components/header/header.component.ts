import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  mostrar = false;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    if(this.mostrar==false) this.mostrar=true;
    else this.mostrar=false;
  }

  href(paramId){
    window.scroll(0, document.getElementById(paramId).offsetTop)
  }

  medium(){
    window.location.href = "https://medium.com/@delgadotrueba/";
  }

}
