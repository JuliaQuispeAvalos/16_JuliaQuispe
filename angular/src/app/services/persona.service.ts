import { Injectable } from '@angular/core';
import {PersonaModel} from "../models/persona.model";
import {HttpClient} from "@angular/common/http";
import {UbigeoModel} from "../models/ubigeo.model";

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  url: string = 'http://localhost:3000/Personas';

  constructor(private http: HttpClient) { }

  personaSelect: PersonaModel | undefined = undefined;

  findAll() {
    return this.http.get(this.url);
  }

  save(persona: PersonaModel) {
    return this.http.post(this.url, persona);
  }

  update(persona: PersonaModel){
    return this.http.put(this.url, persona);
  }

  delete(idPersona: number) {
    return this.http.delete(`${this.url}/${idPersona}`);
  }

}
