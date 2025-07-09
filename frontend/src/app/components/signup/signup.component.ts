import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { InputText } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    MultiSelect,
    InputText,
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  standalone: true,
})
export class SignupComponent {
  step = 1;
  signupForm: FormGroup;
  brandForm: FormGroup;
  typeOptions = [
    { label: 'Brand', value: 'brand' },
    { label: 'Creator', value: 'creator' },
  ];
  // Niche options from backend enum
  nicheOptions = [
    { label: 'Beauty & Personal Care', value: 'BEAUTY_AND_PERSONAL_CARE' },
    { label: 'Health', value: 'HEALTH' },
    { label: 'Nutrition & Wellness', value: 'NUTRITION_AND_WELLNESS' },
    { label: 'Sports & Outdoor', value: 'SPORTS_AND_OUTDOOR' },
    { label: 'Vitamins, Minerals & Wellness Supplements', value: 'VITAMINS_MINERALS_AND_WELLNESS_SUPPLEMENTS' },
    { label: 'Phones & Electronics', value: 'PHONES_AND_ELECTRONICS' },
    { label: 'Fashion Accessories', value: 'FASHION_ACCESSORIES' },
    { label: 'Fragrance', value: 'FRAGRANCE' },
    { label: 'Skincare', value: 'SKINCARE' },
  ];

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      type: [null, Validators.required],
    });
    this.brandForm = this.fb.group({
      name: ['', Validators.required],
      logo: [''],
      revenuePerMonth: [null],
      itemsSold: [null],
      averageUnitPrice: [null],
      niches: [[]],
      region: [''],
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

  submitBrand() {
    if (this.brandForm.valid) {
      // Submit brand signup data
      const signupData = {
        ...this.signupForm.value,
        ...this.brandForm.value,
      };
      // TODO: Call signup service
      console.log('Brand Signup:', signupData);
    } else {
      this.brandForm.markAllAsTouched();
    }
  }
}

signupBrand(brand: Brand) {

  this.healthEndpoint.postSignup(brand); // yro7 3el service
  // yro7 3el home page
}