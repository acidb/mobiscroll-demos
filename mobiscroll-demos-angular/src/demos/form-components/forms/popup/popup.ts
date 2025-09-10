import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MbscModule, MbscPopup, MbscPopupOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-popup',
  templateUrl: './popup.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  @ViewChild('popup', {
    static: false,
  })
  inst!: MbscPopup;

  popupSettings: MbscPopupOptions = {
    buttons: ['set', 'cancel'],
    display: 'anchored',
    contentPadding: false,
    responsive: {
      medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    },
  };

  openPopup(event: any): void {
    this.popupSettings.anchor = event.target;
    this.inst.open();
  }
}
