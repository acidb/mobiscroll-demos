import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'date-time-picker',
  templateUrl: './date-time-picker.html',
})
export class AppComponent {
  onChangeHandler(args) {
    if (args.value === null) {
      this.testDate = args.inst._selectedTime;
    }
  }
}
