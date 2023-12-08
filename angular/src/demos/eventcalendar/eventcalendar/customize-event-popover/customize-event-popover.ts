import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscEventcalendarOptions, Notifications, MbscCalendarEvent /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth();

@Component({
  selector: 'customize-event-popover',
  styleUrl: './customize-event-popover.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customize-event-popover.html',
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
      calendar: {
        labels: false,
        popover: true,
        popoverClass: 'custom-event-popover',
      },
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
    ev.stopPropagation();
    this.notify.toast({
      //<hidden>
      // theme,//</hidden>
      message: this.getParticipant(data.participant).name + "'s event clicked",
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/custom-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
