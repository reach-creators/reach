import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { Creator } from "../../data-access/creator";
import { Router, RouterModule } from "@angular/router";

interface NicheOption {
  value: string;
  label: string;
}

@Component({
  selector: "app-signup-creator",
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: "./signup-creator.component.html",
  styleUrl: "./signup-creator.component.scss",
})
export class SignupCreatorComponent implements OnInit {
  signupForm!: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  submitError = "";
  selectedNiches: string[] = [];

  availableNiches: NicheOption[] = [
    { value: "BEAUTY_AND_PERSONAL_CARE", label: "Beauty & Personal Care" },
    { value: "HEALTH", label: "Health" },
    { value: "NUTRITION_AND_WELLNESS", label: "Nutrition & Wellness" },
    { value: "SPORTS_AND_OUTDOOR", label: "Sports & Outdoor" },
    {
      value: "VITAMINS_MINERALS_AND_WELLNESS_SUPPLEMENTS",
      label: "Vitamins, Minerals & Wellness Supplements",
    },
    { value: "PHONES_AND_ELECTRONICS", label: "Phones & Electronics" },
    { value: "FASHION_ACCESSORIES", label: "Fashion Accessories" },
    { value: "FRAGRANCE", label: "Fragrance" },
    { value: "SKINCARE", label: "Skincare" },
  ];

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.signupForm = this.fb.group({
      name: ["", [Validators.required]],
      salesPerMonth: [null],
      itemsSold: [null],
      region: [""],
      niches: [[], [Validators.required, Validators.minLength(1)]],
    });
  }

  onNicheChange(event: any, nicheValue: string): void {
    if (event.target.checked) {
      this.selectedNiches.push(nicheValue);
    } else {
      this.selectedNiches = this.selectedNiches.filter(
        (niche) => niche !== nicheValue,
      );
    }

    this.signupForm.patchValue({ niches: this.selectedNiches });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.signupForm.get(fieldName);
    return !!(field && field.invalid && (field.dirty || field.touched));
  }

  onSubmit(): void {
    if (this.signupForm.valid) {
      this.isSubmitting = true;
      this.submitError = "";
      const creator: Creator = {
        name: this.signupForm.value.name,
        salesPerMonth: this.signupForm.value.salesPerMonth,
        itemsSold: this.signupForm.value.itemsSold,
        region: this.signupForm.value.region,
        niches: this.signupForm.value.niches,
      };
    } else {
      this.markFormGroupTouched();
    }
    this.router.navigate(["/"]);
  }

  private markFormGroupTouched(): void {
    Object.keys(this.signupForm.controls).forEach((key) => {
      const control = this.signupForm.get(key);
      control?.markAsTouched();
    });
  }
}
