import { Component, inject } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonModule } from "primeng/button";
import { SelectModule } from "primeng/select";
import { MultiSelect } from "primeng/multiselect";
import { InputText } from "primeng/inputtext";
import { CommonModule } from "@angular/common";
import { SignupCreatorComponent } from "../signup-creator/signup-creator.component";
import { Brand } from "../../data-access/brand";
import { Router, RouterModule } from "@angular/router";
import { Card } from "primeng/card";
import { FloatLabel } from "primeng/floatlabel";
import { InputGroup } from "primeng/inputgroup";
import { InputGroupAddon } from "primeng/inputgroupaddon";
import { InputWithIconComponent } from "../utils/input-with-icon/input-with-icon.component";
import { SignupModel } from "../../models/auth/signup-model";
import { Role } from "../../data-access/role";
import { AuthEndpoints } from "../../services/endpoints/auth-endpoints";

@Component({
  selector: "app-signup",
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    MultiSelect,
    InputText,
    SignupCreatorComponent,
    RouterModule,
    Card,
    InputWithIconComponent,
  ],
  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.scss",
  standalone: true,
})
export class SignupComponent {
  private readonly authEndpoints = inject(AuthEndpoints);

  signupModel = new SignupModel();

  toTitleCase(role: Role): string {
    return role.charAt(0) + role.substring(1).toLowerCase();
  }

  async signupUser() {
    //hash password before sending to backend
    const hashedPassword = await this.hashPassword(
      this.signupModel.password.value!,
    );
    this.authEndpoints
      .signup({
        email: this.signupModel.email.value!,
        password: hashedPassword,
        role: this.signupModel.role.value!,
      })
      .subscribe((authResponse) => {});
    if (this.signupModel.role.value == "BRAND") {
      // navigate to /signup/brand
      this.router.navigate(["/signup/brand"]);
    }
    else if (this.signupModel.role.value == "CREATOR") {
      // navigate to /signup/creator
      this.router.navigate(["/signup/creator"]);
    }
  }

  step = 1;
  signupForm: FormGroup;
  brandForm: FormGroup;
  typeOptions = [
    { label: "Brand", value: "brand" },
    { label: "Creator", value: "creator" },
  ];
  // Niche options from backend enum
  nicheOptions = [
    { label: "Beauty & Personal Care", value: "BEAUTY_AND_PERSONAL_CARE" },
    { label: "Health", value: "HEALTH" },
    { label: "Nutrition & Wellness", value: "NUTRITION_AND_WELLNESS" },
    { label: "Sports & Outdoor", value: "SPORTS_AND_OUTDOOR" },
    {
      label: "Vitamins, Minerals & Wellness Supplements",
      value: "VITAMINS_MINERALS_AND_WELLNESS_SUPPLEMENTS",
    },
    { label: "Phones & Electronics", value: "PHONES_AND_ELECTRONICS" },
    { label: "Fashion Accessories", value: "FASHION_ACCESSORIES" },
    { label: "Fragrance", value: "FRAGRANCE" },
    { label: "Skincare", value: "SKINCARE" },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    this.signupForm = this.fb.group(
      {
        username: ["", Validators.required],
        password: [
          "",
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern(passwordPattern),
          ],
        ],
        confirmPassword: ["", Validators.required],
        type: [null, Validators.required],
      },
      { validators: passwordMatchValidator },
    );
    this.brandForm = this.fb.group({
      name: ["", Validators.required],
      logo: [""],
      revenuePerMonth: [null],
      itemsSold: [null],
      averageUnitPrice: [null],
      niches: [[]],
      region: [""],
    });
  }

  nextStep() {
    if (this.signupForm.valid) {
      this.step = 2;
    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  prevStep() {
    this.step = 1;
  }

  async hashPassword(password: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
    return Array.from(new Uint8Array(hashBuffer))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  async submitBrand() {
    if (this.brandForm.valid) {
      const hashedPassword = await this.hashPassword(
        this.signupForm.value.password,
      );
      const brand: Brand = {
        name: this.brandForm.value.name,
        logo: this.brandForm.value.logo,
        revenuePerMonth: this.brandForm.value.revenuePerMonth,
        itemsSold: this.brandForm.value.itemsSold,
        averageUnitPrice: this.brandForm.value.averageUnitPrice,
        niches: this.brandForm.value.niches,
        region: this.brandForm.value.region,
        // Add hashed password if backend expects it (e.g., password: hashedPassword)
      };
      // If backend expects password in signupForm, add it here:
      const payload = {
        ...brand,
        username: this.signupForm.value.username,
        password: hashedPassword,
      };
    } else {
      this.brandForm.markAllAsTouched();
    }
  }
  // go back to the home page
}

// Custom validator for password match
export const passwordMatchValidator: ValidatorFn = (
  group: AbstractControl,
): ValidationErrors | null => {
  const password = group.get("password")?.value;
  const confirmPassword = group.get("confirmPassword")?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
};
