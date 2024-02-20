import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-datetime-formatting-return-values',
  templateUrl: './formatting-return-values.html',
})
export class AppComponent {
  dateValue: any = now;
  separatorValue: any = now;
  monthValue: any = now;
  monthNameValue: any = now;
  monthYearValue: any = now;
  dayValue: any = now;
  atomValue: any = now;
  cookieValue: any = now;
  timeValue: any = now;
  h12Value: any = now;
  h24Value: any = now;
  hmsValue: any = now;
  dateTimeValue: any = now;
  dayNameValue: any = now;
}
