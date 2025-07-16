import { Component, input } from "@angular/core";
import { FloatLabel } from "primeng/floatlabel";
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { InputText } from "primeng/inputtext";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "input-with-icon",
  imports: [
    FloatLabel,
    InputGroup,
    InputGroupAddon,
    InputText,
    ReactiveFormsModule,
  ],
  templateUrl: "./input-with-icon.component.html",
  styleUrl: "./input-with-icon.component.scss",
})
export class InputWithIconComponent {
  icon = input.required<string>();
  label = input.required<string>();
  inputControl = input.required<FormControl<string | null>>();
  isPassword = input(false);
}
