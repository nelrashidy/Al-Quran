import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuranService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.baseUrl;
  language: string = 'ar';

  getAllReciters(): Observable<any> {
    return this.http.get(`${this.baseUrl}/reciters?language=${this.language}`);
  }
  getOneReciter(reciterId: number): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/reciters?language=${this.language}&reciter=${reciterId}`
    );
  }

  getAllSuwar(): Observable<any> {
    return this.http.get(`${this.baseUrl}/suwar?language=${this.language}`);
  }
}
