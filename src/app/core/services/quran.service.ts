import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuranService {
  constructor(private http: HttpClient) {}
  RecitersBaseUrl: string = environment.RecitersBaseUrl;
  MushafBaseUrl: string = environment.MushafBaseUrl;
  PrayersBaseUrl: string = environment.PrayerBaseUrl;
  language: string = 'ar';

  // Play Quran
  getAllReciters(): Observable<any> {
    return this.http.get(
      `${this.RecitersBaseUrl}/reciters?language=${this.language}`
    );
  }
  getOneReciter(reciterId: number): Observable<any> {
    return this.http.get(
      `${this.RecitersBaseUrl}/reciters?language=${this.language}&reciter=${reciterId}`
    );
  }

  getAllSuwar(): Observable<any> {
    return this.http.get(
      `${this.RecitersBaseUrl}/suwar?language=${this.language}`
    );
  }

  getChaptersList() {
    return this.http.get(`${this.MushafBaseUrl}/chapters`);
  }

  getPrayerTimesByCity(latitude: any, longitude: any) {
    let params = new HttpParams();
    params = params.append('latitude', latitude);
    params = params.append('longitude', longitude);
    return this.http.get(`${this.PrayersBaseUrl}/timings`, { params });
  }

  getPrayerTimesCalenderByCity(latitude: any, longitude: any) {
    let params = new HttpParams();
    params = params.append('latitude', latitude);
    params = params.append('longitude', longitude);
    return this.http.get(`${this.PrayersBaseUrl}/calendar`, { params });
  }
}
