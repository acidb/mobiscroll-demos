import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-select-country-picker',
  styleUrl: './country-picker.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './country-picker.html',
})
export class AppComponent implements OnInit {
  myData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://trial.mobiscroll.com/content/countries.json').subscribe((resp: any) => {
      const countries = [];
      for (let i = 0; i < resp.length; ++i) {
        const country = resp[i];
        countries.push({ text: country.text, value: country.value });
      }
      this.myData = countries;
    });
  }
}
