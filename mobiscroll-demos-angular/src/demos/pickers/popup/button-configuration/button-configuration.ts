import { CommonModule } from '@angular/common';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscModule, MbscPopup, MbscPopupOptions, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-button-configuration',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './button-configuration.html',
  providers: [Notifications],
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent {
  constructor(private notify: Notifications) {}

  @ViewChild('popupNoBtn', { static: false }) popupNoBtn!: MbscPopup;
  @ViewChild('popupPredefined', { static: false }) popupPredefined!: MbscPopup;
  @ViewChild('popupCustom', { static: false }) popupCustom!: MbscPopup;

  popupOptionsNoBtn: MbscPopupOptions = {
    display: 'center',
  };

  popupOptionsPredefined: MbscPopupOptions = {
    display: 'center',
    buttons: ['ok', 'cancel'],
  };

  popupOptionsCustom: MbscPopupOptions = {
    display: 'center',
    buttons: [
      {
        text: 'Custom',
        handler: () => {
          this.notify.toast({
            message: 'Custom button clicked',
          });
        },
      },
    ],
  };

  openPopupNoBtn(): void {
    this.popupNoBtn.open();
  }

  openPopupPredefined(): void {
    this.popupPredefined.open();
  }

  openPopupCustom(): void {
    this.popupCustom.open();
  }
}
