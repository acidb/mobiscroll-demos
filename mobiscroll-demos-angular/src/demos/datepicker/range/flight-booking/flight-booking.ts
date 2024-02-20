import { Component, ViewChild } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();

@Component({
  selector: 'app-range-flight-booking',
  templateUrl: './flight-booking.html',
})
export class AppComponent {
  @ViewChild('calInst')
  inst: any;
  booking: any;
  min = now;
  max = new Date(now.getFullYear(), now.getMonth() + 6, now.getDate());
  invalid = [
    {
      recurring: {
        repeat: 'weekly',
        weekDays: 'TU,TH',
      },
    },
    new Date(now.getFullYear(), now.getMonth(), 25),
  ];
  trip = 'round';
  buttons: any = [
    'cancel',
    {
      disabled: true,
      text: 'One way only',
    },
    'set',
  ];

  changeTripType(): void {
    this.buttons = [
      'cancel',
      {
        disabled: !this.inst.getTempVal()[0],
        handler: () => {
          const start = this.inst.getTempVal()[0];
          this.booking = [start, null];
          this.inst.close();
        },
        text: 'One way only',
      },
      'set',
    ];
  }
}
