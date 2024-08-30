import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscPopup, MbscPopupOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-show-hide-tooltip-hover-in-out',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './show-hide-tooltip-hover-in-out.html',
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;
  popupAnchor: HTMLElement | undefined;

  currentDeveloper: string | null = null;
  timeout: any = null;

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
  };

  // repeatly open closes, need to solve

  openPopup(ev: any, developer: string): void {
    clearTimeout(this.timeout);
    this.popupAnchor = ev.currentTarget;
    this.currentDeveloper = developer;
    this.popup.open();
  }

  closePopup(): void {
    this.timeout = setTimeout(() => {
      this.popup.close();
    }, 500);
  }
}
