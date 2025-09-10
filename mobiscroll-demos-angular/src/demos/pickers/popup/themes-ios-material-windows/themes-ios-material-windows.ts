import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MbscModule, MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-themes-ios-material-windows',
  templateUrl: './themes-ios-material-windows.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;
  popupAnchor: HTMLElement | undefined;

  popupOptions: MbscPopupOptions = {
    theme: 'material', // Can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform
    themeVariant: 'dark', // Can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme
    display: 'anchored',
    buttons: ['ok', 'cancel'],
  };

  openPopup(ev: any): void {
    this.popupAnchor = ev.currentTarget;
    this.popup.open();
  }
}
