import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UbigeoComponent} from "./components/ubigeo/ubigeo.component";
import {UbigeoFormComponent} from "./components/ubigeo-form/ubigeo-form.component";
import {PersonaComponent} from "./components/persona/persona.component";
import {PersonaFormComponent} from "./components/persona-form/persona-form.component";

const routes: Routes = [
  {
    path: 'ubigeo',
    component: UbigeoComponent,
  },
  {
    path: 'ubigeo-form',
    component: UbigeoFormComponent,
  },
  {
    path: 'persona',
    component: PersonaComponent,
  },
  {
    path: 'persona-form',
    component: PersonaFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
