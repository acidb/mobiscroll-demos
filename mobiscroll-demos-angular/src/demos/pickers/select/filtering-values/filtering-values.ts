import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MbscModule, MbscSelectOptions, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-filtering-values',
  templateUrl: './filtering-values.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  names = [
    {
      text: 'Abigail Hodges',
      value: 1,
    },
    {
      text: 'Adam Robertson',
      value: 2,
    },
    {
      text: 'Blake Nolan',
      value: 3,
    },
    {
      text: 'Dylan Manning',
      value: 4,
    },
    {
      text: 'Jane Clarkson',
      value: 5,
    },
    {
      text: 'Julian Parr',
      value: 6,
    },
    {
      text: 'Lily Blake',
      value: 7,
    },
    {
      text: 'Luke Wright',
      value: 8,
    },
    {
      text: 'Nathan Poole',
      value: 9,
    },
    {
      text: 'Olivia Vance',
      value: 10,
    },
    {
      text: 'Paul Hudson',
      value: 11,
    },
    {
      text: 'Rose Taylor',
      value: 12,
    },
    {
      text: 'Samantha Martin',
      value: 13,
    },
    {
      text: 'Steven Cameron',
      value: 14,
    },
    {
      text: 'Wanda Mills',
      value: 15,
    },
  ];

  remoteData: any;

  remoteOptions: MbscSelectOptions = {
    onFilter: (ev: any) => {
      this.remoteFiltering(ev.filterText);
      return false;
    },
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.remoteFiltering('');
  }

  remoteFiltering(filterText: any): void {
    this.http.jsonp<any>('https://trial.mobiscroll.com/airports/' + encodeURIComponent(filterText), 'callback').subscribe((data) => {
      const airports = [];
      for (const item of data) {
        airports.push({ text: item.name, value: item.code });
      }
      this.remoteData = airports;
    });
  }
}
