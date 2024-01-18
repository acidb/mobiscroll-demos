import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agenda-event-content-customization',
  styleUrl: './event-content-customization.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './event-content-customization.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  eventSettings: MbscEventcalendarOptions = {
    // locale,
    // theme,
    view: {
      calendar: { type: 'week' },
      agenda: { type: 'day' },
    },
  };

  getParticipant(id: number): any {
    switch (id) {
      case 1:
        return {
          img: 'https://img.mobiscroll.com/demos/m1.png',
          name: 'Barry L.',
        };
      case 2:
        return {
          img: 'https://img.mobiscroll.com/demos/f1.png',
          name: 'Hortense T.',
        };
      case 3:
        return {
          img: 'https://img.mobiscroll.com/demos/m2.png',
          name: 'Carl H.',
        };
    }
  }

  add(ev: any, data: any): void {
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: data.title + ' clicked',
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/custom-events/', 'callback').subscribe((resp: any) => {
      this.myEvents = resp;
    });
  }
}
