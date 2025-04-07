import { Component } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-multiple-select',
  templateUrl: './multiple-select.html',
  standalone: false,
})
export class AppComponent {
  myData = [
    {
      value: 1,
      text: 'Books',
    },
    {
      value: 2,
      text: 'Movies, Music & Games',
    },
    {
      value: 3,
      text: 'Electronics & Computers',
    },
    {
      value: 4,
      text: 'Home, Garden & Tools',
    },
    {
      value: 5,
      text: 'Health & Beauty',
    },
    {
      value: 6,
      text: 'Toys, Kids & Baby',
    },
    {
      value: 7,
      text: 'Clothing & Jewelry',
    },
    {
      value: 8,
      text: 'Sports & Outdoors',
    },
    {
      value: 9,
      text: 'Automotive & Industrial',
    },
  ];
}
