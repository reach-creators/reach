import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { CommonModule } from "@angular/common";

import { Router, RouterModule } from "@angular/router";
import { MultiSelect } from "primeng/multiselect";
import { AuthService } from "../../services/auth.service";
import { AuthEndpoints } from "../../services/endpoints/auth-endpoints";
import { SignupCreatorModel } from "../../models/auth/signup-creator-model";


interface NicheOption {
  value: string;
  label: string;
}

@Component({
  selector: "app-signup-creator",
  imports: [ReactiveFormsModule, CommonModule, RouterModule, MultiSelect],
  templateUrl: "./signup-creator.component.html",
  styleUrl: "./signup-creator.component.scss",
})
export class SignupCreatorComponent implements OnInit {
  signupForm!: FormGroup;
  isSubmitting = false;
  isSuccess = false;
  submitError = "";
  selectedNiches: string[] = [];
  signupCreatorModel = new SignupCreatorModel();




niches: string[] = [];

 

  constructor(
    private fb: FormBuilder,
    protected router: Router,
    private authService: AuthService,
    private authendpoints: AuthEndpoints
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

 


  async signupCreator() {
    //hash password before sending to backend
  
    this.authendpoints.signupCreator({
        name: this.signupCreatorModel.name.value!,
        salesPerMonth: this.signupCreatorModel.salesPerMonth.value!,
        itemsSold: this.signupCreatorModel.itemsSold.value!,
        region: this.signupCreatorModel.region.value!,

      })// no need to specify response type
      .subscribe((response) => {
        console.log(response);
      });
  }

  
}
