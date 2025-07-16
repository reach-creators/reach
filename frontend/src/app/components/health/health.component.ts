import { Component, inject, signal } from "@angular/core";
import { HealthEndpoint } from "../../services/endpoints/health-endpoint";
import { HelloWorldModel } from "../../models/hello-world-model";
import { DatePipe } from "@angular/common";
import { Button } from "primeng/button";
import { RouterModule } from "@angular/router";

@Component({
  selector: "health-component",
  imports: [DatePipe, Button, RouterModule],
  templateUrl: "./health.component.html",
  styleUrl: "./health.component.scss",
})
export class HealthComponent {
  helloWorld = signal(undefined as HelloWorldModel | undefined);
  hasError = signal(false);

  private readonly healthEndpoint = inject(HealthEndpoint);

  queryHealth() {
    this.healthEndpoint.getHealth().subscribe({
      next: (health) => {
        this.helloWorld.set(new HelloWorldModel(health));
        this.hasError.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.helloWorld.set(undefined);
      },
    });
  }
}
