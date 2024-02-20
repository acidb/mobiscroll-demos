import { Component } from '@angular/core';
import { setOptions } from '@mobiscroll/angular';

setOptions({
  // theme,
});

@Component({
  selector: 'app-forms-segmented',
  templateUrl: './segmented.html',
})
export class AppComponent {
  multi = ['mon', 'thu'];
}
