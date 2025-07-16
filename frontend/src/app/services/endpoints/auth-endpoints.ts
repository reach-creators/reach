import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SignupRequest } from "../../data-access/auth/signup-request";
import { AuthResponse } from "../../data-access/auth/auth-response";
import { signup } from "./api-routes";

@Injectable({
  providedIn: "root",
})
export class AuthEndpoints {
  private readonly httpClient = inject(HttpClient);

  signup(signupRequest: SignupRequest) {
    return this.httpClient.post<AuthResponse>(signup, signupRequest, {
      headers: {
        Authentication: `Bearer ${token}`,
      },
    });
  }
}
