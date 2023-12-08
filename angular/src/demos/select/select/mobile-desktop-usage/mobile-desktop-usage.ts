import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { setOptions, MbscSelect /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'mobile-desktop-usage',
  styleUrl: './mobile-desktop-usage.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-desktop-usage.html',
})
export class AppComponent {
  @ViewChild('picker', { static: false })
  inst!: MbscSelect;

  selected = 'atl';

  openPicker(): void {
    this.inst.open();
  }
}
