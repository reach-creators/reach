import { Component, input } from "@angular/core";
import { FloatLabel } from "primeng/floatlabel";
import { InputText } from "primeng/inputtext";
import { FormControl, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "input-with-float-label",
  imports: [FloatLabel, InputText, ReactiveFormsModule],
  templateUrl: "./input-with-float-label.component.html",
  styleUrl: "./input-with-float-label.component.scss",
})
export class InputWithFloatLabelComponent {
  label = input.required<string>();
  inputControl = input.required<FormControl<string | null>>();
  isPassword = input(false);
}
