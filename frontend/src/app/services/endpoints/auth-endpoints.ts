import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignupRequest } from "../../data-access/auth/signup-request";
import { AuthResponse } from "../../data-access/auth/auth-response";
import { signup, creator, brand } from "./api-routes";
import { CreatorSignUpRequest } from "../../data-access/auth/creator-signup-request";
import { BrandSignUpRequest } from "../../data-access/auth/brand-signup-request";
import { AuthService } from "../auth.service";
@Injectable({
  providedIn: "root",
})
export class AuthEndpoints {
  private readonly httpClient = inject(HttpClient);
  private readonly authService = inject(AuthService);
  signup(signupRequest: SignupRequest) {
    return this.httpClient.post<AuthResponse>(signup, signupRequest, {
      headers: {
        //Authentication: `Bearer ${token}`,
      },
    });
  }

  signupCreator(creatorSignUpRequest: CreatorSignUpRequest){
    return this.httpClient.post(creator, creatorSignUpRequest, {
      headers: {
        Authentication: `Bearer ${this.authService.getToken()}`,
      },
    });
  }
  signupBrand(brandSignUpRequest: BrandSignUpRequest){
   return this.httpClient.post(brand, brandSignUpRequest, {
    headers: {
      Authentication: `Bearer ${this.authService.getToken()}`,
    },
   });
  }
}
