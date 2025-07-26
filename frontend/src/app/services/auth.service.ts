import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly token = signal(undefined as string | undefined);
  private readonly http = inject(HttpClient);

  registerToken(token: string) {
    this.token.set(token);
  }

  getToken() {
    const token = this.token();
    if (token) {
      return token;
    }
    throw Error("Cannot retrieve undefined token");
  }

}
