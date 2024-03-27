import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class QuranService {
  constructor(private http: HttpClient) {}
  baseUrl: string = environment.baseUrl;

  fetchAllReciters() {
    this.http.get(`${this.baseUrl}`);
  }
}
