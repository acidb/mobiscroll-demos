import { Component, ViewChild } from '@angular/core';
import { MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-responsive',
  templateUrl: './responsive.html',
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;
  popupAnchor: HTMLElement | undefined;

  popupOptions: MbscPopupOptions = {
    responsive: {
      xsmall: {
        display: 'bottom',
      },
      small: {
        display: 'center',
      },
      custom: {
        // Custom breakpoint
        breakpoint: 800,
        display: 'anchored',
      },
    },
  };

  openPopup(ev: any): void {
    this.popupAnchor = ev.currentTarget;
    this.popup.open();
  }
}
