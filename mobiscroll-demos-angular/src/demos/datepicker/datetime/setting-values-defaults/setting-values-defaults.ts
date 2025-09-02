import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscDatepicker, MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-datetime-setting-values-defaults',
  templateUrl: './setting-values-defaults.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent {
  @ViewChild('nowInst')
  nowInst!: MbscDatepicker;

  @ViewChild('customInst')
  customInst!: MbscDatepicker;

  now: Date | undefined;
  nowOpen!: boolean;
  custom: Date | undefined;
  customVal: Date | undefined;
  myDefaultSelection = new Date(2020, 11, 24);

  nowButtons: any = [
    {
      text: 'Now',
      handler: () => {
        this.now = new Date();
        this.nowInst.close();
      },
    },
    'set',
    'cancel',
  ];

  customButtons: any = [
    {
      text: '05 Jan 2020',
      handler: () => {
        this.custom = new Date(2020, 0, 5);
        this.customInst.close();
      },
    },
    'set',
    'cancel',
  ];

  autoButtons: any = [
    {
      text: 'Close',
      handler: 'cancel',
    },
  ];

  setValue(): void {
    this.customVal = new Date(2020, 0, 2);
  }

  setToday(): void {
    this.customVal = new Date();
  }
}
