import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const week = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 6);

@Component({
  selector: 'app-range-mobile-desktop-usage',
  styleUrl: './mobile-desktop-usage.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-desktop-usage.html',
})
export class AppComponent {
  @ViewChild('picker', { static: false })
  pickerInst!: MbscDatepicker;

  thisWeek = [now, week];

  openPicker(): void {
    this.pickerInst.open();
  }
}
