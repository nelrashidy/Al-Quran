import { Component, OnInit } from '@angular/core';
import { QuranService } from '../../core/services/quran.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-quran',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quran.component.html',
  styleUrl: './quran.component.scss',
})
export class QuranComponent implements OnInit {
  constructor(private quranService: QuranService) {}
  reciters: any[] = [];
  selectedReciterId!: number;
  selectedReciterMoshaf: any[] = [];
  suwar: any[] = [];
  suwarIds: any;
  selectedOneMoshaf: any[] = [];

  ngOnInit(): void {
    new Promise((resolve) => {
      this.quranService.getAllReciters().subscribe({
        next: (res: any): void => {
          this.reciters = res?.reciters;
          if (this.reciters) {
            this.reciters.sort((a: any, b: any) =>
              a.letter.localeCompare(b.letter)
            );
            console.log(this.reciters);
          }
        },
        error: (error: any): void => {
          console.log(error);
        },
      });
    });
  }

  getOneReciterData(): void {
    this.quranService.getOneReciter(this.selectedReciterId).subscribe({
      next: (res: any) => {
        console.log(res, 'one reciter');
        this.selectedReciterMoshaf = res?.reciters[0]?.moshaf;
        console.log(this.selectedReciterMoshaf, 'selectedReciterMoshaf');
      },
    });
  }
  
}
