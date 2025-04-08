import { Component } from '@angular/core';
import { hijriCalendar, jalaliCalendar, localeAr, localeEn, localeFa, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-range-gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
  standalone: false,
})
export class AppComponent {
  public localeEn = localeEn;
  public jalaliCalendar = jalaliCalendar;
  public localeFa = localeFa;
  public hijriCalendar = hijriCalendar;
  public localeAr = localeAr;
}
