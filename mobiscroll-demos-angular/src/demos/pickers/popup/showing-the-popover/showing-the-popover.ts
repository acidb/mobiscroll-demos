import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-showing-the-popover',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './showing-the-popover.html',
  standalone: false,
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;

  popupOptions: MbscPopupOptions = {
    display: 'center',
  };

  openPopup(): void {
    this.popup.open();
  }

  closePopup(): void {
    this.popup.close();
  }
}
