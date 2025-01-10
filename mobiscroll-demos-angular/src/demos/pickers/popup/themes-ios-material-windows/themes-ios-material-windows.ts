import { Component, ViewChild } from '@angular/core';
import { MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;
  popupAnchor: HTMLElement | undefined;

  popupOptions: MbscPopupOptions = {
    theme: 'material', // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
    themeVariant: 'dark', // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
    display: 'anchored',
    buttons: ['ok', 'cancel'],
  };

  openPopup(ev: any): void {
    this.popupAnchor = ev.currentTarget;
    this.popup.open();
  }
}
