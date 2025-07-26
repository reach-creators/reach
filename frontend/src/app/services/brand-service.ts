import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../data-access/brand';
import { HttpClient } from '@angular/common/http';
import { brands } from './endpoints/api-routes';


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private readonly httpClient = inject(HttpClient);


  async getAllBrands() {
    return await this.httpClient.get<Brand[]>(brands).toPromise();
  }
}
