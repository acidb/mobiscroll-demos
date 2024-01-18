import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-event-hooks',
  templateUrl: './event-hooks.html',
})
export class AppComponent {
  myData = [
    {
      text: 'Atlanta',
      value: 'atl',
    },
    {
      text: 'Berlin',
      value: 'ber',
    },
    {
      text: 'Boston',
      value: 'bos',
    },
    {
      text: 'Chicago',
      value: 'chi',
    },
    {
      text: 'London',
      value: 'lon',
    },
    {
      text: 'Los Angeles',
      value: 'la',
    },
    {
      text: 'New York',
      value: 'ny',
    },
    {
      text: 'Paris',
      value: 'par',
    },
    {
      text: 'San Francisco',
      value: 'sf',
    },
  ];

  onCancel(event: any): void {
    // Logic for cancel button click
  }

  onChange(event: any): void {
    // Logic for value change
  }

  onClose(event: any): void {
    // Your custom event handler goes here
  }

  onDestroy(event: any): void {
    // Your custom event handler goes here
  }

  onFilter(event: any): void {
    // Your custom event handler goes here
  }

  onInit(event: any): void {
    // Logic running on component init
  }

  onOpen(event: any): void {
    // Your custom event handler goes here
  }

  onPosition(event: any): void {
    // Logic for component positioning
  }

  onTempChange(event: any): void {
    // Logic for temporary value change
  }
}
