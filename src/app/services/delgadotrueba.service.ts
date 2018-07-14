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
  private baseURL = "http://localhost:3000";

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
    
    return this.http.get<any>(this.delgadotrueba_api+"/articles"+"/tags");

  }

  getArchivo(): Observable<String[]> {
    
    return this.http.get<any>(this.delgadotrueba_api+"/articles"+"/archivo");

  }

}
