import { Component, OnInit } from '@angular/core';
import {UbigeoModel} from "../../models/ubigeo.model";
import {UbigeoService} from "../../services/ubigeo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ubigeo',
  templateUrl: './ubigeo.component.html',
  styleUrls: ['./ubigeo.component.scss']
})
export class UbigeoComponent implements OnInit {

  ubigeos: any[] = [];

  constructor(private ubigeoService: UbigeoService,
              private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.ubigeoService.findAll().subscribe((res: any) => {
      console.log(res);
      this.ubigeos = res;
    })
  }

  navigateForm() {
    this.router.navigate(['ubigeo-form']);
  }

  editarUbigeo(ubigeo: UbigeoModel) {
    this.ubigeoService.ubigeoSelect = ubigeo;
    this.navigateForm();
  }

  deleteUbigeo(id: string) {
    this.ubigeoService.delete(id).subscribe(res => {
      console.log('Se elimino correctamente: ', res);
      this.findAll();
    })
  }

}

