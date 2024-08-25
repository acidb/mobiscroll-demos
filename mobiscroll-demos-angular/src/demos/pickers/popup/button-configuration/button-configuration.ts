import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscPopup, MbscPopupOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-button-configuration',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './button-configuration.html',
  providers: [Notifications],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('popupDefault', { static: false }) popupDefault!: MbscPopup;
  @ViewChild('popupCustom', { static: false }) popupCustom!: MbscPopup;

  popupOptionsDefault: MbscPopupOptions = {
    display: 'center',
  };

  popupOptionsCustom: MbscPopupOptions = {
    display: 'center',
    buttons: [
      'ok',
      {
        text: 'Custom',
        handler: function () {
          // ?!
          // this.notify.toast({
          //   // context,
          //   message: 'Custom button clicked',
          // });
          console.log('clicked');
        },
      },
      'close',
    ],
  };

  openPopupDefault(): void {
    this.popupDefault.open();
  }
  openPopupCustom(): void {
    this.popupCustom.open();
  }
}
