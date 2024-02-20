import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-datetime-month-year-picker',
  templateUrl: './month-year-picker.html',
})
export class AppComponent {
  today = new Date();
  until = new Date(now.getFullYear() + 10, now.getMonth());
}
