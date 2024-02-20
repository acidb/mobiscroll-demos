import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-datetime-event-hooks',
  templateUrl: './event-hooks.html',
})
export class AppComponent {
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

  onInit(): void {
    // Logic running on component init
  }

  onOpen(): void {
    // Your custom event handler goes here
  }

  onPageChange(): void {
    // Your custom event handler goes here
  }

  onPageLoaded(): void {
    // Use it to inject custom markup & attach custom listeners
  }

  onPageLoading(): void {
    // Use it to load data on demand
  }

  onPosition(): void {
    // Logic for component positioning
  }

  onTempChange(): void {
    // Logic for temporary value change
  }
}
