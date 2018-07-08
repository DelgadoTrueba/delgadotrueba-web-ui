//Modulos
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Services

//Material Design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';


//Flexbox
import { FlexLayoutModule } from "@angular/flex-layout";

//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import {MatIconModule} from '@angular/material/icon';
import { SliderComponent } from './components/slider/slider.component';
import { FraseComponent } from './components/frase/frase.component';
import { MostradorArticulosComponent } from './components/mostrador-articulos/mostrador-articulos.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { TodosArticulosComponent } from './components/todos-articulos/todos-articulos.component';


@NgModule({
  //Importar Componenentes
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    FraseComponent,
    MostradorArticulosComponent,
    FooterComponent,
    ArticuloComponent,
    TodosArticulosComponent
  ],
  //Importar Modulos, Material Design y Flexbox
  imports: [
    BrowserModule,

    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatExpansionModule,
    MatListModule,

    FlexLayoutModule,
  ],
  //Importar Servicios
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
