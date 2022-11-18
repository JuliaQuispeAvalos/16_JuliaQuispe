import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UbigeoService} from "../../services/ubigeo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ubigeo-form',
  templateUrl: './ubigeo-form.component.html',
  styleUrls: ['./ubigeo-form.component.scss']
})
export class UbigeoFormComponent implements OnInit {

  ubigeoForm: FormGroup = new FormGroup({});

  constructor(private router: Router,
              private fb: FormBuilder,
              public ubigeoService: UbigeoService) { }

  ngOnInit(): void {
    this.initUbigeoForm();
  }

  navigateUbigeo() {
    this.router.navigate(['ubigeo']);
  }

  initUbigeoForm() {
    this.ubigeoForm = this.fb.group({
      id: [null],
      departamento: [null],
      provincia: [null],
      distrito: [null],
    });
    if (this.ubigeoService.ubigeoSelect) {
      this.ubigeoForm.patchValue(this.ubigeoService.ubigeoSelect);
    }
  }

  saveUbigeo() {
    if (this.ubigeoService.ubigeoSelect) {
      // Actualizar
      this.updateUbigeo();
    } else {
      // Crear o insertar
      this.createUbigeo();
    }
  }

  createUbigeo() {
    console.log("Datos del Ubigeo: ", this.ubigeoForm.value);
    this.ubigeoService.save(this.ubigeoForm.value).subscribe(res => {
      console.log('Se guardo correctamente: ', res);
      this.ubigeoForm.reset();
      this.navigateUbigeo();
    });
  }

  updateUbigeo() {
    console.log("Datos del Ubigeo: ", this.ubigeoForm.value);
    this.ubigeoService.update(this.ubigeoForm.value).subscribe(res => {
      console.log('Se actualizo correctamente: ', res);
      this.ubigeoForm.reset();
      this.navigateUbigeo();
    });
  }

  ngOnDestroy() {
    this.ubigeoService.ubigeoSelect = undefined;
  }

}
