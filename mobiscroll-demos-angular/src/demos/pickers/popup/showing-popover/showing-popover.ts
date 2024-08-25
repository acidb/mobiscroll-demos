import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscPopup, MbscPopupOptions, setOptions } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-showing-popover',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './showing-popover.html',
})
export class AppComponent {
  @ViewChild('popupSubscribe', { static: false }) popupSubscribe!: MbscPopup;
  @ViewChild('popupList', { static: false }) popupList!: MbscPopup;

  update: string = '!!!!!todo';

  popupOptionsSubscibe: MbscPopupOptions = {
    display: 'center',
  };

  popupOptionsList: MbscPopupOptions = {
    display: 'center',
  };

  openPopupSubscribe(): void {
    this.popupSubscribe.open();
  }

  openPopupList(): void {
    this.popupList.open();
  }

  subscribe(): void {
    // !!! how to toast "Subscribe"
    this.popupSubscribe.close();
  }
}
