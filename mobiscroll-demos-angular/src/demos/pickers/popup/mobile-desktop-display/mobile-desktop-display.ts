import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscModule, MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-mobile-desktop-display',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './mobile-desktop-display.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  @ViewChild('popupAnchored', { static: false }) popupAnchored!: MbscPopup;
  @ViewChild('popupTop', { static: false }) popupTop!: MbscPopup;
  @ViewChild('popupCenter', { static: false }) popupCenter!: MbscPopup;
  @ViewChild('popupBottom', { static: false }) popupBottom!: MbscPopup;

  popupAnchor: HTMLElement | undefined;

  anchoredOptions: MbscPopupOptions = {
    display: 'anchored',
  };
  topOptions: MbscPopupOptions = {
    display: 'top',
  };
  centerOptions: MbscPopupOptions = {
    display: 'center',
  };
  bottomOptions: MbscPopupOptions = {
    display: 'bottom',
  };

  openAnchored(ev: any): void {
    this.popupAnchor = ev.currentTarget;
    this.popupAnchored.open();
  }

  openTop(): void {
    this.popupTop.open();
  }

  openCenter(): void {
    this.popupCenter.open();
  }

  openBottom(): void {
    this.popupBottom.open();
  }
}
