import { Component } from '@angular/core';
import { setOptions } from '@mobiscroll/angular';

setOptions({
  theme: 'ios',
  themeVariant: 'light',
});

@Component({
  selector: 'segmented',
  templateUrl: './segmented.html',
})
export class AppComponent {
  multi = ['mon', 'thu'];
}
