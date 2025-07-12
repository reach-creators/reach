import { Routes } from "@angular/router";
import { HealthComponent } from "./components/health/health.component";
import { SignupComponent } from "./components/signup/signup.component";

export const routes: Routes = [
  { path: '', component: HealthComponent },
  { path: 'signup', component: SignupComponent },
];
