import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { signupCreator } from "./api-routes";
import { Creator } from "../../data-access/creator";

@Injectable({
  providedIn: "root",
})
export class CreatorSignupEndpoint {
  private readonly httpClient = inject(HttpClient);

  signupCreator(creator: Creator) {
    return this.httpClient.post<Creator>(signupCreator, creator);
  }
} 