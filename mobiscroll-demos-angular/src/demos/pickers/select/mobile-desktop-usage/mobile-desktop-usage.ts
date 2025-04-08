import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-mobile-desktop-usage',
  styleUrl: './mobile-desktop-usage.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-desktop-usage.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('picker', { static: false })
  inst!: MbscSelect;

  selected = 'atl';

  openPicker(): void {
    this.inst.open();
  }
}
