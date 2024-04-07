import { Component } from '@angular/core';
import { CardComponent } from '../../../../shared/components/card/card.component';

@Component({
  selector: 'app-home-services',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './home-services.component.html',
  styleUrl: './home-services.component.scss'
})
export class HomeServicesComponent {

}
