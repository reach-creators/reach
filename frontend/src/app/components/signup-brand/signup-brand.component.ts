import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextModule } from 'primeng/inputtext';
import { SignupCreatorComponent } from '../signup-creator/signup-creator.component';
import { Router, RouterModule } from '@angular/router';
import { Card } from 'primeng/card';
import { InputWithIconComponent } from '../utils/input-with-icon/input-with-icon.component';
import { Brand } from '../../data-access/brand';
import { AuthService } from '../../services/auth.service';
import { AuthEndpoints } from '../../services/endpoints/auth-endpoints';
import { SignupBrandModel } from '../../models/auth/signup-brand-model';
@Component({
  selector: 'app-signup-brand',
  imports: [
        CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    SelectModule,
    MultiSelectModule,
    InputTextModule,
    
    RouterModule,
    Card,
    InputWithIconComponent,
  ],
  templateUrl: './signup-brand.component.html',
  styleUrl: './signup-brand.component.scss'
})
export class SignupBrandComponent {




  signupBrandModel = new SignupBrandModel();
  constructor(
    private fb: FormBuilder,
    public  router: Router,
    private authService: AuthService,
    private authendpoints: AuthEndpoints
  ) {}

brandForm!: FormGroup;
/*async submitBrand() {
    if (this.brandForm.valid) {
     
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
        username: this.brandForm.value.username,
        password: this.brandForm.value.password,
      };
    } else {
      this.brandForm.markAllAsTouched();
    }
    this.router.navigate(["/"]);
  }
 */
  async signupBrand() {
    //hash password before sending to backend
  
    this.authendpoints.signupBrand({
        name: this.signupBrandModel.name.value!,
        revenuePerMonth: this.signupBrandModel.revenuePerMonth.value!,
        itemsSold: this.signupBrandModel.itemsSold.value!,
        averageUnitPrice: this.signupBrandModel.averageUnitPrice.value!,
        region: this.signupBrandModel.region.value!,

      })// no need to specify response type
      .subscribe((response) => {
        console.log(response);
      });
  }



}
