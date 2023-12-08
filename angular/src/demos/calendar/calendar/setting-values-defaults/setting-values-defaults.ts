import { Component, ViewChild } from '@angular/core';
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'setting-values-defaults',
  templateUrl: './setting-values-defaults.html',
})
export class AppComponent {
  @ViewChild('nowInst')
  nowInst!: MbscDatepicker;

  @ViewChild('customInst')
  customInst!: MbscDatepicker;

  customVal: Date | undefined;
  now: Date | undefined;
  custom: Date | undefined;
  myDefaultSelection = new Date(2020, 11, 24);

  nowButtons: any = [
    {
      text: 'Now',
      handler: () => {
        this.now = new Date();
        this.nowInst.close();
      },
    },
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

  autoButtons: any = ['close'];

  setValue(): void {
    this.customVal = new Date(2020, 0, 2);
  }

  setToday(): void {
    this.customVal = new Date();
  }
}
