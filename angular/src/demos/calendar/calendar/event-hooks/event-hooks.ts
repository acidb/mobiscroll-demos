import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'event-hooks',
  templateUrl: './event-hooks.html',
})
export class AppComponent {
  onCancel(event: any): void {
    // Logic for cancel button click
  }

  onCellClick(event: any): void {
    // Logic for event click
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

  onInit(event: any): void {
    // Logic running on component init
  }

  onLabelClick(event: any): void {
    // Logic for label click
  }

  onOpen(event: any): void {
    // Your custom event handler goes here
  }

  onPageChange(event: any): void {
    // Your custom event handler goes here
  }

  onPageLoaded(event: any): void {
    // Use it to inject custom markup & attach custom listeners
  }

  onPageLoading(event: any): void {
    // Use it to load data on demand
  }

  onPosition(event: any): void {
    // Logic for component positioning
  }

  onTempChange(event: any): void {
    // Logic for temporary value change
  }
}
