import { Component } from '@angular/core';
import { hijriCalendar, jalaliCalendar, localeAr, localeEn, localeFa, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-calendar-gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
  standalone: false,
})
export class AppComponent {
  localeEn = localeEn;
  jalaliCalendar = jalaliCalendar;
  localeFa = localeFa;
  hijriCalendar = hijriCalendar;
  localeAr = localeAr;
}
