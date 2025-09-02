import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { hijriCalendar, jalaliCalendar, localeAr, localeEn, localeFa, MbscModule, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-datetime-gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  localeEn = localeEn;
  jalaliCalendar = jalaliCalendar;
  localeFa = localeFa;
  hijriCalendar = hijriCalendar;
  localeAr = localeAr;
}
