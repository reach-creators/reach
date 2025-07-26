import { FormControl, Validators } from "@angular/forms";




export class SignupCreatorModel {
  readonly name = new FormControl<string | null>(null);
  readonly salesPerMonth = new FormControl<number | null>(null);
  
  readonly itemsSold = new FormControl<number | null>(null);
   

    readonly region = new FormControl<string | null>(null);
 
}

