import { Component } from '@angular/core';
import { localeEn, jalaliCalendar, localeFa, hijriCalendar, localeAr, setOptions } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'gregorian-jalali-hijri',
  templateUrl: './gregorian-jalali-hijri.html',
})
export class AppComponent {
  public localeEn = localeEn;
  public jalaliCalendar = jalaliCalendar;
  public localeFa = localeFa;
  public hijriCalendar = hijriCalendar;
  public localeAr = localeAr;
}
