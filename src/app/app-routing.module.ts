import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { C404Component } from './components/c404/c404.component';
import { EstadisticasComponent } from './components/estadisticas/estadisticas.component';
import { FormularioComponent } from './components/formulario/formulario.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: '/estadisticas' },
  { path: "estadisticas", component: EstadisticasComponent },
  { path: "formulario", component: FormularioComponent },
  { path: "**", component: C404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
