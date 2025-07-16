import { Component } from "@angular/core";
import { MenubarModule } from "primeng/menubar";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-navbar",
  imports: [MenubarModule, RouterModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
  standalone: true,
})
export class NavbarComponent {
  items = [
    { label: "Home", icon: "pi pi-home", routerLink: "/" },
    { label: "About", icon: "pi pi-info-circle", routerLink: "/about" },
    { label: "Login", icon: "pi pi-sign-in", routerLink: "/login" },
  ];
}
