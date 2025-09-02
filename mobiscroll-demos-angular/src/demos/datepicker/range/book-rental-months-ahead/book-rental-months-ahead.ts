import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { formatDate, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-range-book-rental-months-ahead',
  styleUrl: './book-rental-months-ahead.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './book-rental-months-ahead.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  min = dyndatetime('y,m,d');
  labels: any = [];
  invalid: any = [];
  colors: any = [];
  monthColors = [
    {
      background: '#b2f1c080',
      start: dyndatetime('y,1,1'),
      end: dyndatetime('y,1,31'),
      cellCssClass: 'md-book-rental-bg-off',
      recurring: {
        repeat: 'yearly',
        month: 1,
        day: 1,
      },
    },
    {
      background: '#b2f1c080',
      start: dyndatetime('y,2,1'),
      end: dyndatetime('y,2,28'),
      cellCssClass: 'md-book-rental-bg-off',
      recurring: {
        repeat: 'yearly',
        month: 2,
        day: 1,
      },
    },
    {
      background: '#b2f1c080',
      cellCssClass: 'md-book-rental-bg-off',
      recurring: {
        repeat: 'yearly',
        month: 2,
        day: 29,
      },
    },
    {
      background: '#a3cdff80',
      start: dyndatetime('y,3,1'),
      end: dyndatetime('y,3,31,23,59'),
      cellCssClass: 'md-book-rental-bg-pre',
      recurring: {
        repeat: 'yearly',
        month: 3,
        day: 1,
      },
    },
    {
      background: '#a3cdff80',
      start: dyndatetime('y,4,1'),
      end: dyndatetime('y,4,30'),
      cellCssClass: 'md-book-rental-bg-pre',
      recurring: {
        repeat: 'yearly',
        month: 4,
        day: 1,
      },
    },
    {
      background: '#a3cdff80',
      start: dyndatetime('y,5,1'),
      end: dyndatetime('y,5,31'),
      cellCssClass: 'md-book-rental-bg-pre',
      recurring: {
        repeat: 'yearly',
        month: 5,
        day: 1,
      },
    },
    {
      background: '#f7f7bb80',
      start: dyndatetime('y,6,1'),
      end: dyndatetime('y,6,30'),
      cellCssClass: 'md-book-rental-bg-in',
      recurring: {
        repeat: 'yearly',
        month: 6,
        day: 1,
      },
    },
    {
      background: '#f7f7bb80',
      start: dyndatetime('y,7,1'),
      end: dyndatetime('y,7,31'),
      cellCssClass: 'md-book-rental-bg-in',
      recurring: {
        repeat: 'yearly',
        month: 7,
        day: 1,
      },
    },
    {
      background: '#f7f7bb80',
      start: dyndatetime('y,8,1'),
      end: dyndatetime('y,8,31'),
      cellCssClass: 'md-book-rental-bg-in',
      recurring: {
        repeat: 'yearly',
        month: 8,
        day: 1,
      },
    },
    {
      background: '#f7f7bb80',
      start: dyndatetime('y,9,1'),
      end: dyndatetime('y,9,30'),
      cellCssClass: 'md-book-rental-bg-in',
      recurring: {
        repeat: 'yearly',
        month: 9,
        day: 1,
      },
    },
    {
      background: '#f7f7bb80',
      start: dyndatetime('y,10,1'),
      end: dyndatetime('y,10,31,23,59'),
      cellCssClass: 'md-book-rental-bg-in',
      recurring: {
        repeat: 'yearly',
        month: 10,
        day: 1,
      },
    },
    {
      background: '#b2f1c080',
      start: dyndatetime('y,11,1'),
      end: dyndatetime('y,11,30'),
      cellCssClass: 'md-book-rental-bg-off',
      recurring: {
        repeat: 'yearly',
        month: 11,
        day: 1,
      },
    },
    {
      background: '#b2f1c080',
      start: dyndatetime('y,12,1'),
      end: dyndatetime('y,12,31'),
      cellCssClass: 'md-book-rental-bg-off',
      recurring: {
        repeat: 'yearly',
        month: 12,
        day: 1,
      },
    },
  ];

  getColors(start: Date, end: Date) {
    return [
      {
        date: start,
        cellCssClass: 'vacation-check-in',
      },
      {
        date: end,
        cellCssClass: 'vacation-check-out',
      },
      {
        start: new Date(start.getFullYear(), start.getMonth(), start.getDate() + 1),
        end: new Date(end.getFullYear(), end.getMonth(), end.getDate() - 1),
        background: '#ffbaba80',
        cellCssClass: 'vacation-booked',
      },
    ];
  }

  ngOnInit(): void {
    const y = now.getFullYear();
    const m = now.getMonth();
    this.http.jsonp('https://trial.mobiscroll.com/getrentals/?year=' + y + '&month=' + m, 'callback').subscribe((data: any) => {
      const prices = data.prices;
      const bookings = data.bookings;
      const labels: any = [];
      const invalids: any = [];
      let colors: any = [];
      let endDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0);

      for (const price of prices) {
        const booked = bookings.find((b: { checkIn: any }) => formatDate('YYYY-M-D', new Date(b.checkIn)) === price.date);
        if (booked) {
          const checkIn = new Date(booked.checkIn);
          const checkOut = new Date(booked.checkOut);
          const newCheckOut = new Date(checkOut.getFullYear(), checkOut.getMonth(), checkOut.getDate() - 1);
          colors = [...colors, ...this.getColors(checkIn, checkOut)];
          labels.push({
            start: checkIn,
            end: newCheckOut,
            text: 'booked',
            textColor: '#1e1e1ecc',
          });
          invalids.push({
            start: checkIn,
            end: newCheckOut,
          });
          endDate = checkOut;
        } else if (new Date(price.date) >= endDate) {
          labels.push({
            date: new Date(price.date),
            text: price.text,
            textColor: price.textColor,
          });
        }
      }
      this.labels = labels;
      this.invalid = invalids;
      this.colors = [...colors, ...this.monthColors];
    });
  }
}
