import { Component } from '@angular/core';
import { Router , ActivatedRoute, RouterLink , RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
constructor(private router: Router, private route: ActivatedRoute) {
  
}

isActive(route: string): boolean {
  const currentRoute = this.router.routerState.snapshot.url;
  return currentRoute.includes(route);
}
}
