import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-range-disabled-invalid-values',
  templateUrl: './disabled-invalid-values.html',
  standalone: false,
})
export class AppComponent {
  invalid = [
    '2020-02-12',
    '2020-05-20',
    {
      recurring: {
        repeat: 'weekly',
        weekDays: 'SA,SU',
      },
    },
    {
      recurring: {
        repeat: 'yearly',
        day: 24,
        month: 12,
      },
    },
    {
      recurring: {
        repeat: 'yearly',
        day: 31,
        month: 12,
      },
    },
    {
      recurring: {
        repeat: 'monthly',
        day: 1,
      },
    },
    {
      recurring: {
        repeat: 'monthly',
        day: -1,
      },
    },
    {
      start: '2020-03-15',
      end: '2020-03-30',
    },
    {
      start: '2020-07-05',
      end: '2020-08-20',
    },
  ];
}
