import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

const regions: any = [
  { value: 'reg-1', text: 'Northeast' },
  { value: 'reg-2', text: 'Midwest' },
  { value: 'reg-3', text: 'South' },
  { value: 'reg-4', text: 'West' },
];
const divisions: any = {
  'reg-1': [
    { value: 'div-1', text: 'New England' },
    { value: 'div-2', text: 'Mid-Atlantic' },
  ],
  'reg-2': [
    { value: 'div-3', text: 'East North Central' },
    { value: 'div-4', text: 'West North Central' },
  ],
  'reg-3': [
    { value: 'div-5', text: 'South Atlantic' },
    { value: 'div-6', text: 'East South Central' },
    { value: 'div-7', text: 'West South Central' },
  ],
  'reg-4': [
    { value: 'div-8', text: 'Mountain' },
    { value: 'div-9', text: 'Pacific' },
  ],
};
const subdivisions: any = {
  'div-1': [
    { value: 'sub-1', text: 'Connecticut' },
    { value: 'sub-2', text: 'Maine' },
    { value: 'sub-3', text: 'Massachusetts' },
    { value: 'sub-4', text: 'New Hampshire' },
    { value: 'sub-5', text: 'Rhode Island' },
    { value: 'sub-6', text: 'Vermont' },
  ],
  'div-2': [
    { value: 'sub-7', text: 'New Jersey' },
    { value: 'sub-8', text: 'New York' },
    { value: 'sub-9', text: 'Pennsylvania' },
  ],
  'div-3': [
    { value: 'sub-10', text: 'Illinois' },
    { value: 'sub-11', text: 'Indiana' },
    { value: 'sub-12', text: 'Michigan' },
    { value: 'sub-13', text: 'Ohio' },
  ],
  'div-4': [
    { value: 'sub-14', text: 'Wisconsin' },
    { value: 'sub-15', text: 'Iowa' },
    { value: 'sub-16', text: 'Kansas' },
    { value: 'sub-17', text: 'Minnesota' },
    { value: 'sub-18', text: 'Missouri' },
    { value: 'sub-19', text: 'Nebraska' },
    { value: 'sub-20', text: 'North Dakota' },
    { value: 'sub-21', text: 'South Dakota' },
  ],
  'div-5': [
    { value: 'sub-22', text: 'Delaware' },
    { value: 'sub-23', text: 'Florida' },
    { value: 'sub-24', text: 'Georgia' },
    { value: 'sub-25', text: 'Maryland' },
    { value: 'sub-26', text: 'North Carolina' },
    { value: 'sub-27', text: 'South Carolina' },
    { value: 'sub-28', text: 'Virginia' },
    { value: 'sub-29', text: 'District of Columbia' },
    { value: 'sub-30', text: 'West Virginia' },
  ],
  'div-6': [
    { value: 'sub-31', text: 'Alabama' },
    { value: 'sub-32', text: 'Kentucky' },
    { value: 'sub-33', text: 'Mississippi' },
    { value: 'sub-34', text: 'Tennessee' },
  ],
  'div-7': [
    { value: 'sub-35', text: 'Arkansas' },
    { value: 'sub-36', text: 'Louisiana' },
    { value: 'sub-37', text: 'Oklahoma' },
    { value: 'sub-38', text: 'Texas' },
  ],
  'div-8': [
    { value: 'sub-39', text: 'Arizona' },
    { value: 'sub-40', text: 'Colorado' },
    { value: 'sub-41', text: 'Idaho' },
    { value: 'sub-42', text: 'Montana' },
    { value: 'sub-43', text: 'Nevada' },
    { value: 'sub-44', text: 'New Mexico' },
    { value: 'sub-45', text: 'Utah' },
    { value: 'sub-46', text: 'Wyoming' },
  ],
  'div-9': [
    { value: 'sub-47', text: 'Alaska' },
    { value: 'sub-48', text: 'California' },
    { value: 'sub-49', text: 'Hawaii' },
    { value: 'sub-50', text: 'Oregon' },
    { value: 'sub-51', text: 'Washington' },
  ],
};

@Component({
  selector: 'app-select-linked-hierarchical-pickers',
  templateUrl: './linked-hierarchical-pickers.html',
  standalone: false,
})
export class AppComponent {
  divData = [];
  subData = [];
  divDisabled = true;
  subDisabled = true;

  getData(region: any, division: any): any {
    let arr = [];

    if (division) {
      arr = subdivisions[division];
    } else if (region) {
      arr = divisions[region];
    } else {
      arr = regions;
    }

    return arr;
  }

  regChange(event: any): void {
    this.divData = this.getData(event.value, null);
    this.divDisabled = false;
    this.subDisabled = true;
  }

  divChange(event: any): void {
    const val = event.value;
    if (val) {
      this.subData = this.getData(null, event.value);
      this.subDisabled = false;
    } else {
      this.subData = [];
      this.subDisabled = true;
    }
  }
}
