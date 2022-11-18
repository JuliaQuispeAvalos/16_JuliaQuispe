import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UbigeoComponent } from './components/ubigeo/ubigeo.component';
import { UbigeoFormComponent } from './components/ubigeo-form/ubigeo-form.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PersonaComponent } from './components/persona/persona.component';
import { PersonaFormComponent } from './components/persona-form/persona-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UbigeoComponent,
    UbigeoFormComponent,
    PersonaComponent,
    PersonaFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
