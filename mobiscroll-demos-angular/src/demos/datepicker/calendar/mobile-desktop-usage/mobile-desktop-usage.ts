import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-calendar-mobile-desktop-usage',
  styleUrl: './mobile-desktop-usage.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-desktop-usage.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('picker', { static: false })
  inst!: MbscDatepicker;

  today = new Date();

  openPicker(): void {
    this.inst.open();
  }
}
