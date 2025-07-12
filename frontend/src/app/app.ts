import { Component } from "@angular/core";
import { HealthComponent } from "./components/health/health.component";
import { DatePipe } from "@angular/common";
import { LoginComponent } from "./components/auth/login/login.component";

@Component({
  selector: "app-root",
  imports: [HealthComponent, LoginComponent],
  providers: [DatePipe],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "frontend";
}
