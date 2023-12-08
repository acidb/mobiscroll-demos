import { Component, ViewEncapsulation } from '@angular/core';
import { Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const curr = new Date();
const yesterday = new Date(curr.getFullYear(), curr.getMonth(), curr.getDate() - 1);
const startWeek = new Date(curr.setDate(curr.getDate() - curr.getDay()));
const endWeek = new Date(curr.setDate(curr.getDate() - curr.getDay() + 6));
const startMonth = new Date(curr.getFullYear(), curr.getMonth() - 1, 1);
const endMonth = new Date(curr.getFullYear(), curr.getMonth(), 0);

@Component({
  selector: 'presets',
  styleUrl: './presets.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './presets.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  range: any;

  today(): void {
    this.range = [now, now];
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'Today Selected',
    });
  }

  yesterday(): void {
    this.range = [yesterday, yesterday];
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'Yesterday Selected',
    });
  }

  thisWeek(): void {
    this.range = [startWeek, endWeek];
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'This Week Selected',
    });
  }

  lastMonth(): void {
    this.range = [startMonth, endMonth];
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'Last Month Selected',
    });
  }

  clear(): void {
    this.range = null;
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: 'Clear Value',
    });
  }
}
