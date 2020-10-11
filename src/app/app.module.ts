import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';

import { FilmeService } from './cadastrar-filme/filme.service';

import { AppComponent } from './app.component';
import { CadastrarFilmeComponent } from './cadastrar-filme/cadastrar-filme.component'
import { ConsultarFilmeComponent } from './consultar-filme/consultar-filme.component';
import { PrimeiroComponenteComponent } from './primeiro-componente/primeiro-componente.component';
import { SegundoComponenteComponent } from './segundo-componente/segundo-componente.component'

@NgModule({
  declarations: [
    AppComponent,
    CadastrarFilmeComponent,
    ConsultarFilmeComponent,
    PrimeiroComponenteComponent,
    SegundoComponenteComponent
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