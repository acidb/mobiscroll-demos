import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MbscModule, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // theme
});

@Component({
  selector: 'app-forms-inputs-text-areas-date-fields',
  templateUrl: './inputs-text-areas-date-fields.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
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
