import { Component, ViewChild } from '@angular/core';
import { MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'popup',
  templateUrl: './popup.html',
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
