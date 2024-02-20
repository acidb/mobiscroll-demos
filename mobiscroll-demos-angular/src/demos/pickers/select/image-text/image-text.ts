import { Component, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-image-text',
  styleUrl: './image-text.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './image-text.html',
})
export class AppComponent {
  selected: any = ['42976', '47883'];
  myData = [
    {
      text: 'Barry Lyon',
      value: '42976',
      avatar: 'm1',
    },
    {
      text: 'Hortense Tinker',
      value: '45290',
      avatar: 'f1',
    },
    {
      text: 'Carl Hambledon',
      value: '76208',
      avatar: 'm2',
    },
    {
      text: 'Arlene Sharman',
      value: '47883',
      avatar: 'f2',
    },
    {
      text: 'Keila Delores',
      value: '33379',
      avatar: 'f3',
    },
    {
      text: 'Paula Bush',
      value: '16076',
      avatar: 'f4',
    },
    {
      text: 'Gene Cortez',
      value: '62551',
      avatar: 'm3',
    },
    {
      text: 'Pete Nichols',
      value: '20929',
      avatar: 'm4',
    },
  ];
}
