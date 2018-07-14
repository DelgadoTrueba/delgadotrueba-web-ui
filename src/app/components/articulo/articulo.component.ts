import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    window.location.href = this.article.link+"";
  }

}
