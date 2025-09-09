import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-datetime-month-year-picker',
  templateUrl: './month-year-picker.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  today = new Date();
  until = new Date(now.getFullYear() + 10, now.getMonth());
}
