import { Injectable } from '@angular/core';

//MODELS
import {Article} from '../models/article';

//MODULOS
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/internal/Observable";

const httpOptions = {
  headers: new HttpHeaders({ 'Accept': 'application/json', 'Content-Type': 'application/json' })
};

@Injectable()

export class DelgadotruebaService {

  // URL to web api
  // private baseURL = "http://www.delgadotrueba.com:3000";
  private baseURL = "http://192.168.1.100:3000";

  private delgadotrueba_api = this.baseURL; 

  constructor(
      private http: HttpClient 
  ) { }

  //GET
  //queryString revisar
  
  getArticles(): Observable<Article[]> {
    
    return this.http.get<any>(this.delgadotrueba_api+"/articles");

  }

  getTags(): Observable<String[]> {
    
    return this.http.get<any>(this.delgadotrueba_api+"/tags");

  }

  getArchivo(): Observable<String[]> {
    
    return this.http.get<any>(this.delgadotrueba_api+"/archivo");

  }

  getArticuloByTag(tag: string): Observable<String[]> {
    
    return this.http.get<any>(this.delgadotrueba_api+"/articles/findBy/"+tag);

  }

}
