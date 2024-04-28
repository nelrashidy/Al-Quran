export interface DateInfo {
  readable: string;
  timestamp: string;
  hijri: HijriDateInfo;
  gregorian: GregorianDateInfo;
}

export interface HijriDateInfo {
  date: string;
  format: string;
  day: string;
  weekday: WeekdayInfo;
  month: MonthInfo;
  year: string;
  designation: DesignationInfo;
  holidays: string[];
}

export interface GregorianDateInfo {
  date: string;
  format: string;
  day: string;
  weekday: WeekdayEnglishInfo;
  month: MonthEnglishInfo;
  year: string;
  designation: DesignationInfo;
}

export interface WeekdayInfo {
  en: string;
  ar: string;
}

export interface MonthInfo {
  number: number;
  en: string;
  ar: string;
}

export interface DesignationInfo {
  abbreviated: string;
  expanded: string;
}

export interface WeekdayEnglishInfo {
  en: string;
}

export interface MonthEnglishInfo {
  number: number;
  en: string;
}
export interface TodayPrayers {
  Asr: string;
  Dhuhr: string;
  Fajr: string;
  FirstThird: string;
  Imsak: string;
  Isha: string;
  LastThird: string;
  Maghrib: string;
  Midnight: string;
  Sunrise: string;
  Sunset: string;
}
