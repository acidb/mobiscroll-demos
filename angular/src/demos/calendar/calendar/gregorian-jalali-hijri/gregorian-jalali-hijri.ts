import { Component } from '@angular/core';
import { setOptions, localeEn, jalaliCalendar, localeFa, hijriCalendar, localeAr } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
})
export class AppComponent {
  localeEn = localeEn;
  jalaliCalendar = jalaliCalendar;
  localeFa = localeFa;
  hijriCalendar = hijriCalendar;
  localeAr = localeAr;
}
