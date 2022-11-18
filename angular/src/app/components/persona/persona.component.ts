import { Component, OnInit } from '@angular/core';
import {PersonaService} from "../../services/persona.service";
import {Router} from "@angular/router";
import {UbigeoModel} from "../../models/ubigeo.model";
import {PersonaModel} from "../../models/persona.model";

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.scss']
})
export class PersonaComponent implements OnInit {

  personas: any[] = [];

  constructor(private personaService: PersonaService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.personaService.findAll().subscribe((res: any) => {
      console.log(res);
      this.personas = res;
    })
  }

  navigateForm() {
    this.router.navigate(['persona-form']);
  }

  editarPersona(persona: PersonaModel) {
    this.personaService.personaSelect = persona;
    this.navigateForm();
  }

  deletePersona(idPersona: number) {
    this.personaService.delete(idPersona).subscribe(res => {
      console.log('Se elimino correctamente: ', res);
      this.findAll();
    })
  }

}
