import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-mobile-desktop-usage',
  styleUrl: './mobile-desktop-usage.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-desktop-usage.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  @ViewChild('picker', { static: false })
  inst!: MbscSelect;

  selected = 'atl';

  openPicker(): void {
    this.inst.open();
  }
}
