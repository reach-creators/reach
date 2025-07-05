import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { health } from "./api-routes";
import { HelloWorld } from "../../data-access/hello-world";

@Injectable({
  providedIn: "root",
})
export class HealthEndpoint {
  private readonly httpClient = inject(HttpClient);

  getHealth() {
    return this.httpClient.get<HelloWorld>(health);
  }
}
