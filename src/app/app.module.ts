import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component'
import { HttpClientModule } from '@angular/common/http'

import { FilmeService } from './cadastrar-filme/filme.service';
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component'
@NgModule({
  declarations: [
    AppComponent,
    CadastrarFilmeComponent,
    ConsultarFilmeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
