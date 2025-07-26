import { FormControl, Validators } from "@angular/forms";




export class SignupBrandModel {
  readonly name = new FormControl<string | null>(null);
  readonly revenuePerMonth = new FormControl<number | null>(null);
  
  readonly itemsSold = new FormControl<number | null>(null);
    readonly averageUnitPrice =  new FormControl<number | null>(null);

    readonly region = new FormControl<string | null>(null);
 
}
