import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaComponent } from './components/pagina/pagina.component';
import { SwitchDataComponent } from './components/switch-data/switch-data.component';
import { SwitchComponent } from './components/switch/switch.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'formulario',
    pathMatch: 'full'
  },
  {
    path: 'pagina',
    component: PaginaComponent
  },

  {
    path: 'formulario',
    component: FormularioComponent
  },

  {
    path: 'switch',
    component: SwitchComponent
  },

  {
    path: 'switch-data',
    component: SwitchDataComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
