import { Component } from "@angular/core";
import { LoginModel } from "../../../models/auth/login-model";
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { ReactiveFormsModule } from "@angular/forms";
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { Button } from "primeng/button";
import { Card } from "primeng/card";

@Component({
  selector: "login-component",
  imports: [
    FloatLabel,
    InputText,
    ReactiveFormsModule,
    InputGroup,
    InputGroupAddon,
    Button,
    Card,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginModel = new LoginModel();

  submit() {
    console.log(this.loginModel.toDomain());
  }
}
