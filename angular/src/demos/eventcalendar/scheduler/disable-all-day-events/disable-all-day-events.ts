import { Component, OnInit } from '@angular/core';
import { setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'disable-all-day-events',
  templateUrl: './disable-all-day-events.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  events: any;

  ngOnInit() {
    this.http.jsonp('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp: any) => {
      this.events = resp;
    });
  }
}
