import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-event-hooks',
  templateUrl: './event-hooks.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
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

  onCancel(): void {
    // Logic for cancel button click
  }

  onChange(): void {
    // Logic for value change
  }

  onClose(): void {
    // Your custom event handler goes here
  }

  onDestroy(): void {
    // Your custom event handler goes here
  }

  onFilter(): void {
    // Your custom event handler goes here
  }

  onInit(): void {
    // Logic running on component init
  }

  onOpen(): void {
    // Your custom event handler goes here
  }

  onPosition(): void {
    // Logic for component positioning
  }

  onTempChange(): void {
    // Logic for temporary value change
  }
}
