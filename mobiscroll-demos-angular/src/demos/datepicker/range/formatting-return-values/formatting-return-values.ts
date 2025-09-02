import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

const currentWeek: any = [dyndatetime('y,m,d'), dyndatetime('y,m,d+6')];
const currentTime: any = [dyndatetime('y,m,d,h'), dyndatetime('y,m,d,h+2')];

@Component({
  selector: 'app-range-formatting-return-values',
  templateUrl: './formatting-return-values.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  rangeValue: any = currentWeek;
  separatorValue: any = currentWeek;
  monthValue: any = currentWeek;
  dayValue: any = currentWeek;
  atomValue: any = currentWeek;
  cookieValue: any = currentWeek;
  timeValue: any = currentTime;
  h12Value: any = currentTime;
  h24Value: any = currentTime;
  hmsValue: any = currentTime;
  dateTimeValue: any = currentTime;
  dayNameValue: any = currentTime;
}
