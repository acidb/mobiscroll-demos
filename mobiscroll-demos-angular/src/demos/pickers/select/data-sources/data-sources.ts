import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-data-sources',
  templateUrl: './data-sources.html',
})
export class AppComponent implements OnInit {
  myData = [
    {
      text: 'Atlanta',
      value: 'atl',
    },
    {
      text: 'Berlin',
      value: 'ber',
    },
    {
      text: 'Boston',
      value: 'bos',
    },
    {
      text: 'Chicago',
      value: 'chi',
    },
    {
      text: 'London',
      value: 'lon',
    },
    {
      text: 'Los Angeles',
      value: 'la',
    },
    {
      text: 'New York',
      value: 'ny',
    },
    {
      text: 'Paris',
      value: 'par',
    },
    {
      text: 'San Francisco',
      value: 'sf',
    },
  ];

  remoteData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://trial.mobiscroll.com/content/languages.json').subscribe((resp: any) => {
      this.remoteData = resp;
    });
  }
}
