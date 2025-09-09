import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import moment from 'moment';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-date-object-iso-8601-moment',
  templateUrl: './date-object-ISO-8601-moment.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  date: Date | undefined;
  iso: string | undefined;
  momentJs: any;

  setDate(): void {
    this.date = new Date(2020, 10, 15, 10, 45);
  }

  setISO(): void {
    this.iso = '2020-05-20T12:30:00';
  }

  setMoment(): void {
    // Make sure that moment js is loaded
    this.momentJs = moment([2020, 2, 6, 15, 30]);
  }
}
