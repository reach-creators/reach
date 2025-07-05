import { Component } from "@angular/core";
import { HealthComponent } from "./components/health/health.component";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-root",
  imports: [HealthComponent],
  providers: [DatePipe],
  templateUrl: "./app.html",
  styleUrl: "./app.scss",
})
export class App {
  protected title = "frontend";
}
