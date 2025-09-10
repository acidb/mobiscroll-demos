import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscModule, MbscPopup, MbscPopupOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-event-hooks',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-hooks.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;
  popupAnchor: HTMLElement | undefined;

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    buttons: ['ok', 'cancel'],
  };

  openPopup(ev: any): void {
    this.popupAnchor = ev.currentTarget;
    this.popup.open();
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

  onPosition(): void {
    // Logic for component positioning
  }
}
