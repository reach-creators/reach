import { Component } from "@angular/core";
import { HealthComponent } from "./components/health/health.component";
import { DatePipe } from "@angular/common";
import { SignupComponent } from "./components/signup/signup.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [HealthComponent, SignupComponent, RouterOutlet],
  providers: [DatePipe],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "frontend";
}
