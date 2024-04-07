import { Component, OnInit } from '@angular/core';
import { QuranService } from '../../core/services/quran.service';
import { LocationService } from '../../core/services/location.service';

@Component({
  selector: 'app-prayers',
  standalone: true,
  imports: [],
  templateUrl: './prayers.component.html',
  styleUrl: './prayers.component.scss',
})
export class PrayersComponent implements OnInit {
  constructor(
    private quranService: QuranService,
    private locationService: LocationService
  ) {}

  // Get today's date
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); // January is 0!
  yyyy = this.today.getFullYear().toString().substr(-2); // Get last two digits of the year
  formattedDate: string = this.dd + '-' + this.mm + '-' + this.yyyy;
  latitude!: any;
  longitude!: any;

  todayPrayerTimes: any[] = [];
  PrayerTimesCalender: any[] = [];

  ngOnInit(): void {
    this.getGeoLocation();
  }
  getGeoLocation() {
    this.locationService.getCurrentPosition().subscribe({
      next: (position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.getPrayerTimes();
        this.getPrayerTimesCalender();
      },
      error: (error) => {
        console.error('Error getting geolocation:', error);
      },
    });
  }

  getPrayerTimes() {
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.quranService
        .getPrayerTimesByCity(this.latitude, this.longitude)
        .subscribe({
          next: (res: any): void => {
            console.log(res, 'day');
            this.todayPrayerTimes = res?.data?.timings;
            console.log(this.todayPrayerTimes);
            this.findClosestPrayerTime();

          },
          error: (error: any): void => {
            console.log(error);
          },
        });
    } else {
      console.error('Latitude or longitude is undefined');
    }
  }

  findClosestPrayerTime() {
    const currentTime = new Date();
  
    // Convert the object into an array of key-value pairs
    const prayerTimesArray = Object.entries(this.todayPrayerTimes);
  
    // Filter out the keys representing the primary prayers and convert them to Date objects
    const prayerTimes = prayerTimesArray
      .filter(([key, value]) => !['Sunrise', 'Sunset', 'Midnight', 'Firstthird', 'Imsak'].includes(key))
      .map(([key, value]) => {
        const timeParts = (value as string).split(':');
        const hours = parseInt(timeParts[0]);
        const minutes = parseInt(timeParts[1]);
        const prayerTime = new Date(currentTime);
        prayerTime.setHours(hours, minutes, 0); // Set hours and minutes
        return { key, time: prayerTime };
      });
  
    // Filter future prayer times
    const futurePrayerTimes = prayerTimes.filter(prayer => prayer.time > currentTime);
  
    const closestPrayerTime = futurePrayerTimes.length > 0
      ? futurePrayerTimes.reduce((closest, current) => {
          const closestDiff = closest.time.getTime() - currentTime.getTime();
          const currentDiff = current.time.getTime() - currentTime.getTime();
          return Math.abs(currentDiff) < Math.abs(closestDiff) ? current : closest;
        })
      : prayerTimes[0];
  
    console.log('Closest prayer time:', closestPrayerTime.key, closestPrayerTime.time.toLocaleTimeString());
  }
  
  
  
  

  getPrayerTimesCalender() {
    this.quranService
      .getPrayerTimesCalenderByCity(this.latitude, this.longitude)
      .subscribe({
        next: (res: any): void => {
          console.log(res, 'month');
          this.PrayerTimesCalender = res.data;
          console.log(this.PrayerTimesCalender);
        },
        error: (error: any): void => {
          console.log(error);
        },
      });
  }
}
