import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscDatepicker, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

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
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  @ViewChild('picker', { static: false })
  pickerInst!: MbscDatepicker;

  thisWeek = [now, week];

  openPicker(): void {
    this.pickerInst.open();
  }
}
