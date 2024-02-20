import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-inputs-text-areas-date-fields',
  templateUrl: './inputs-text-areas-date-fields.html',
})
export class AppComponent {
  errorMessage = 'Error message!';
  empty = ' ';
  select = 'select';
  iconSelect = 'select';
  leftIconSelect = 'select';
  errorSelect = 'select';
  disabledSelect = 'select';
}
