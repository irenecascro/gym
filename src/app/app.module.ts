import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { C404Component } from './components/c404/c404.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EstadisticasComponent,
    FormularioComponent,
    C404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
