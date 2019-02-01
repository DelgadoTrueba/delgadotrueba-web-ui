import { Component, OnInit } from '@angular/core';

//Import Service
import {DelgadotruebaService} from '../../services/delgadotrueba.service'

@Component({
  selector: 'app-mostrador-articulos',
  templateUrl: './mostrador-articulos.component.html',
  styleUrls: ['./mostrador-articulos.component.css']
})
export class MostradorArticulosComponent implements OnInit {

  public tags;
  public articles;
  public error = false;

  public selectValue = "All";

  constructor(
    private _delgadotruebaService :DelgadotruebaService
  ) { }

  ngOnInit() {
    this._delgadotruebaService.getTags().subscribe(
      (tags) => { 
        this.tags = tags;
      },
      (err) => { console.log(err) }
    )

    this.articles = null;
    this._delgadotruebaService.getArticles().subscribe(
      (articles) => { 
        this.articles = articles;
      },
      (err) => { console.log(err); this.error = true }
    )
  }

  selectChange(tag){
    this.articles = null;
    if(tag === "All"){
      this._delgadotruebaService.getArticles().subscribe(
        (articles) => { 
          this.articles = articles;
        },
        (err) => { console.log(err); this.error = true }
      )
    }
    else{
      this._delgadotruebaService.getArticuloByTag(tag).subscribe(
        (articles) => { 
          this.articles = articles;
        },
        (err) => { console.log(err) }
      )
    }
  }

  /*
  service(){
    this.articles = null;
  }
  */

}
