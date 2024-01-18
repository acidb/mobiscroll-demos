import { Component, OnInit, ViewChild } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendar, MbscEventcalendarView, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';
import { print } from '@mobiscroll/print';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-scheduler-printing-the-view',
  templateUrl: './printing-the-view.html',
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  @ViewChild('mycal', { static: false })
  inst!: MbscEventcalendar;

  calendarModules = [print];

  myEvents: MbscCalendarEvent[] = [];

  calView: MbscEventcalendarView = {
    schedule: { type: 'week' },
  };

  printView(): void {
    this.inst.print();
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/events/?vers=5', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
