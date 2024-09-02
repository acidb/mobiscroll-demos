import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { MbscDatepickerOptions, MbscPopup, MbscPopupOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-popup-add-edit-modal',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './add-edit-modal.html',
})
export class AppComponent {
  @ViewChild('popup', { static: false }) popup!: MbscPopup;

  colorPicker: any;
  popupEventTitle: string | undefined;
  popupEventDescription = '';
  popupEventAllDay = true;
  popupTravelTime = 0;
  popupEventDates: any;
  popupEventStatus = 'busy';
  calendarSelectedDate: any = new Date();
  switchLabel: any = 'All-day';

  datePickerControls = ['date'];
  datetimePickerControls = ['datetime'];

  datePickerOptions: MbscDatepickerOptions = {
    select: 'range',
    showRangeLabels: false,
    touchUi: true,
    display: 'anchored',
  };

  popupOptions: MbscPopupOptions = {
    width: 400,
    contentPadding: false,
    headerText: 'Add new event',
    display: 'center',
    buttons: [
      'cancel',
      {
        text: 'Add',
        // keyCode: 'enter',
        handler: () => {
          this.popup.close();

          // how to add?? toast // notification? why not works
          // mobiscroll.toast({
          //   message: 'Event added',
          // });
        },
        cssClass: 'mbsc-popup-button-primary',
      },
    ],
    showOverlay: false,
  };

  addEvent(): void {
    this.popup.open();
  }
}
