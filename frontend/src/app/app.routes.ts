import { Routes } from "@angular/router";
import { HealthComponent } from "./components/health/health.component";
import { SignupComponent } from "./components/signup/signup.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { AboutComponent } from "./components/about/about.component";
import { SignupBrandComponent } from "./components/signup-brand/signup-brand.component";
import { SignupCreatorComponent } from "./components/signup-creator/signup-creator.component";
import { CreatorListComponent } from "./components/creator-list/creator-list.component";
import { BrandListComponent } from "./components/brand-list/brand-list.component";

export const routes: Routes = [
  { path: "", component: NavbarComponent },
  { path: "signup", component: SignupComponent },
  { path: "login", component: LoginComponent },
  { path: "about", component: AboutComponent },
  { path: "signup/brand", component: SignupBrandComponent },
  { path: "signup/creator", component: SignupCreatorComponent },
  { path: "creators", component: CreatorListComponent },
  { path: "brands", component: BrandListComponent } 
];
