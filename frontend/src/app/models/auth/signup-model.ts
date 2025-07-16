import { FormControl, Validators } from "@angular/forms";
import { Role } from "../../data-access/role";

const passwordPattern =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

export class SignupModel {
  readonly email = new FormControl<string | null>(null, [Validators.required]);
  readonly password = new FormControl<string | null>(null, [
    Validators.required,
    Validators.pattern(passwordPattern),
  ]);
  readonly passwordConfirmation = new FormControl<string | null>(null, [
    Validators.required,
    (control) => {
      if (control.value === this.password.value && !this.password.invalid) {
        return null;
      }
      return { mismatch: true };
    },
  ]);
  readonly role = new FormControl<Role | null>(null);

  getRoles(): Role[] {
    return Object.values(Role);
  }
}
