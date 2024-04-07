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
services:any[]=[
  {id:0,imageUrl:'assets/images/qurann.png',title:'المصحف'},
  {id:1,imageUrl:'assets/images/reciter.png',title:'تلاوة'},
  {id:2,imageUrl:'assets/images/praying.png',title:'مواقيت الصلاة'},
  {id:3,imageUrl:'assets/images/tasbih.png',title:'الأذكار'},
  // {id:4,imageUrl:'assets/images/tasbih.png',title:'الدعاء'},

]
}
