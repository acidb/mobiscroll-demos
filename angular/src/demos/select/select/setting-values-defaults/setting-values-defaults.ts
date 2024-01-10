import { Component, ViewChild } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'setting-values-defaults',
  templateUrl: './setting-values-defaults.html',
})
export class AppComponent {
  @ViewChild('selectInst', { static: false })
  selectInst: any;

  myData = [
    { text: 'Atlanta', value: 'atl' },
    { text: 'Berlin', value: 'ber' },
    { text: 'Boston', value: 'bos' },
    { text: 'Chicago', value: 'chi' },
    { text: 'London', value: 'lon' },
  ];

  myDefault = 'ber';
  customVal = '';

  customButtons = [
    {
      text: 'Custom',
      handler: () => {
        this.selectInst.setTempVal('chi');
      },
    },
    'set',
    'cancel',
  ];

  setBoston(): void {
    this.customVal = 'bos';
  }

  setLondon(): void {
    this.customVal = 'lon';
  }
}
