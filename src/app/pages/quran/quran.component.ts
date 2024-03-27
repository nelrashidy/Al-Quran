import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlayQuranComponent } from './play-quran/play-quran.component';
import { ReadQuranComponent } from './read-quran/read-quran.component';

@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [FormsModule, PlayQuranComponent, ReadQuranComponent],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.scss',
})
export class QuranComponent {
  selectedComponent: string = 'playQuranComponent'; // Default selected component
  selectComponent(component: string) {
    this.selectedComponent = component;
  }
}
