import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  isActive(route: string): boolean {
    const currentRoute = this.router.routerState.snapshot.url;
    return currentRoute.includes(route);
  }

  iconClass = 'fa-solid fa-bars';

  toggleIcon() {
    this.iconClass =
      this.iconClass === 'fa-solid fa-bars'
        ? 'fa-solid fa-bars-staggered'
        : 'fa-solid fa-bars';
  }
}


