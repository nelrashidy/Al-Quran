import { Component } from '@angular/core';
import { HomeHeaderComponent } from './components/home-header/home-header.component';
import { HomeServicesComponent } from './components/home-services/home-services.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeaderComponent, HomeServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
