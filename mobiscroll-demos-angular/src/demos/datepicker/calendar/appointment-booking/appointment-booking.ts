import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { MbscDatepickerOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

const minDate = dyndatetime('y,m,d');
const maxDate = dyndatetime('y,m+6,d');

@Component({
  selector: 'app-calendar-appointment-booking',
  styleUrl: './appointment-booking.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './appointment-booking.html',
  standalone: false,
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  multiple = [dyndatetime('y,m,11'), dyndatetime('y,m,16'), dyndatetime('y,m,17')];

  singleLabels = [];
  singleInvalid = [];
  datetimeLabels = [];
  datetimeInvalid = [];
  multipleLabels = [];
  multipleInvalid = [];

  singleSettings: MbscDatepickerOptions = {
    display: 'inline',
    controls: ['calendar'],
    min: minDate,
    max: maxDate,
    pages: 'auto',
    onPageLoading: (args) => {
      this.getPrices(args.firstDay, (bookings: any) => {
        this.singleLabels = bookings.labels;
        this.singleInvalid = bookings.invalid;
      });
    },
  };

  datetimeSettings: MbscDatepickerOptions = {
    display: 'inline',
    controls: ['calendar', 'timegrid'],
    min: minDate,
    max: maxDate,
    minTime: '08:00',
    maxTime: '19:59',
    stepMinute: 60,
    width: undefined,
    onPageLoading: (args) => {
      this.getDatetimes(args.firstDay, (bookings: any) => {
        this.datetimeLabels = bookings.labels;
        this.datetimeInvalid = bookings.invalid;
      });
    },
  };

  multipleSettings: MbscDatepickerOptions = {
    display: 'inline',
    controls: ['calendar'],
    min: minDate,
    max: maxDate,
    pages: 'auto',
    selectMultiple: true,
    onPageLoading: (args) => {
      this.getBookings(args.firstDay, (bookings: any) => {
        this.multipleLabels = bookings.labels;
        this.multipleInvalid = bookings.invalid;
      });
    },
  };

  getPrices(d: Date, callback: any): void {
    const myInvalid: any = [];
    const myLabels: any = [];
    const y = d.getFullYear();
    const m = d.getMonth();

    this.http.jsonp('https://trial.mobiscroll.com/getprices/?year=' + y + '&month=' + m, 'callback').subscribe((bookings: any) => {
      for (const booking of bookings) {
        const date = new Date(booking.d);

        if (booking.price > 0) {
          myLabels.push({
            start: date,
            title: '$' + booking.price,
            textColor: '#e1528f',
          });
        } else {
          myInvalid.push(date);
        }
      }
      callback({ labels: myLabels, invalid: myInvalid });
    });
  }

  getDatetimes(d: Date, callback: any): void {
    let myInvalid: any = [];
    const myLabels: any = [];
    const y = d.getFullYear();
    const m = d.getMonth();

    this.http.jsonp('https://trial.mobiscroll.com/getbookingtime/?year=' + y + '&month=' + m, 'callback').subscribe((bookings: any) => {
      for (const booking of bookings) {
        const date = new Date(booking.d);
        if (booking.nr > 0) {
          myLabels.push({
            start: date,
            title: booking.nr + ' SPOTS',
            textColor: '#e1528f',
          });
          myInvalid = [...myInvalid, ...booking.invalid];
        } else {
          myInvalid.push(date);
        }
      }
      callback({ labels: myLabels, invalid: myInvalid });
    });
  }

  getBookings(d: Date, callback: any): void {
    const myInvalid: any = [];
    const myLabels: any = [];
    const y = d.getFullYear();
    const m = d.getMonth();

    this.http.jsonp('https://trial.mobiscroll.com/getbookings/?year=' + y + '&month=' + m, 'callback').subscribe((bookings: any) => {
      for (const booking of bookings) {
        const date = new Date(booking.d);
        if (booking.nr > 0) {
          myLabels.push({
            start: date,
            title: booking.nr + ' SPOTS',
            textColor: '#e1528f',
          });
        } else {
          myInvalid.push(date);
        }
      }
      callback({ labels: myLabels, invalid: myInvalid });
    });
  }
}
