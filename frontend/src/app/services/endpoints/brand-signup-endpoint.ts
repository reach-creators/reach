import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { signupBrand } from "./api-routes";
import { Brand } from "../../data-access/brand";

@Injectable({
  providedIn: "root",
})
export class BrandSignupEndpoint {
  private readonly httpClient = inject(HttpClient);

  signupBrand(brand: Brand) {
    return this.httpClient.post<Brand>(signupBrand, brand);
  }
} 