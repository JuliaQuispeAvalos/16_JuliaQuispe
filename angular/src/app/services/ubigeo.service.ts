import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UbigeoModel} from "../models/ubigeo.model";

@Injectable({
  providedIn: 'root'
})
export class UbigeoService {

  url: string = 'http://localhost:3000/Ubigeos';

  constructor(private http: HttpClient) { }

  ubigeoSelect: UbigeoModel | undefined = undefined;

  findAll() {
    return this.http.get(this.url);
  }

  save(ubigeo: UbigeoModel) {
    return this.http.post(this.url, ubigeo);
  }

  update(ubigeo: UbigeoModel){
    return this.http.put(this.url, ubigeo);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
