import { Component } from '@angular/core';
import { QuranService } from '../../../core/services/quran.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-play-quran',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './play-quran.component.html',
  styleUrl: './play-quran.component.scss'
})
export class PlayQuranComponent {
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
        this.suwar=[];
        this.selectedReciterMoshaf = res?.reciters[0]?.moshaf;
        console.log(this.selectedReciterMoshaf, 'selectedReciterMoshaf');
      },
    });
  }

  onMoshafSelected(event: any): void {
    const selectedOption = event.target.selectedOptions[0];
    const surahList = selectedOption.getAttribute('data-surah_list');
    this.getAllSuwarData(surahList);
  }

  getAllSuwarData(surah_list: any): void {
    this.selectedReciterMoshaf.forEach((moshaf: any) => {
      const server = moshaf.server;
      this.quranService.getAllSuwar().subscribe({
        next: (res: any): void => {
          this.suwarIds = surah_list.split(',');
          res.suwar.forEach((surah: any) => {
            if (this.suwarIds.includes(surah.id.toString())) {
              this.suwar.push({
                id: String(surah.id).padStart(3, '0'),
                name: surah.name,
                server: server,
              });
            }
          });

          console.log(server, 'severrrrrr');
        },
        error: (error: any): void => {
          console.log(error);
        },
      });
    });
  }

  selectedSuarh(event: any) {
    console.log(event.target.value, 'selectedSurah');
  }
}
