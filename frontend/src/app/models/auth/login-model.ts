import { FormControl } from "@angular/forms";
import { Login } from "../../data-access/auth/login";

export class LoginModel {
  readonly email: FormControl<string | null>;
  readonly password: FormControl<string | null>;

  constructor() {
    this.email = new FormControl();
    this.password = new FormControl();
  }

  nonConfiguredCredentials(): boolean {
    return (
      (this.email.value ?? "") === "" || (this.password.value ?? "") === ""
    );
  }

  toDomain(): Login {
    return {
      email: this.email.value ?? "",
      password: this.password.value ?? "",
    };
  }
}
