import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-group-options',
  templateUrl: './group-options.html',
  standalone: false,
})
export class AppComponent {
  singleData = [
    { text: 'Atlanta', group: 'US', value: 'atl' },
    { text: 'Boston', group: 'US', value: 'bos' },
    { text: 'Bath', group: 'UK', value: 'bat' },
    { text: 'Bristol', group: 'UK', value: 'bri' },
    { text: 'Berlin', group: 'DE', value: 'ber' },
    { text: 'Duisburg', group: 'DE', value: 'dus' },
    { text: 'Cologne', group: 'DE', value: 'col' },
    { text: 'Paris', group: 'FR', value: 'par' },
    { text: 'Lyon', group: 'FR', value: 'lyo' },
  ];
  groupData = [
    { text: 'Atlanta', group: 'US', value: 'atl' },
    { text: 'Boston', group: 'US', value: 'bos' },
    { text: 'Bath', group: 'UK', value: 'bat' },
    { text: 'Bristol', group: 'UK', value: 'bri' },
  ];

  multipleData = [
    { text: 'Camera & Photo', group: 'Electronics', value: 1 },
    { text: 'Cell Phones & Accessories', group: 'Electronics', value: 2 },
    { text: 'GPS & Navigation', group: 'Electronics', value: 3 },
    { text: 'Plugs and Outlets', group: 'Smart Home', value: 4 },
    { text: 'Heating and Cooling', group: 'Smart Home', value: 5 },
    { text: 'Detectors and Sensors', group: 'Smart Home', value: 6 },
  ];
}
