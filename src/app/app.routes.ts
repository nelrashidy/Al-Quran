import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuranComponent } from './pages/quran/quran.component';
import { MushafComponent } from './pages/mushaf/mushaf.component';
import { RecitersComponent } from './pages/reciters/reciters.component';
import { PrayersComponent } from './pages/prayers/prayers.component';
import { AdhkarComponent } from './pages/adhkar/adhkar.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'mushaf', component: MushafComponent },
  { path: 'reciters', component: RecitersComponent },
  { path: 'prayer-times', component: PrayersComponent },
  { path: 'adhkar', component: AdhkarComponent },
  { path: 'quran', component: QuranComponent },
  { path: '**', component: NotFoundComponent },
];
