import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarOptions, Notifications /* localeImport */ } from '@mobiscroll/angular';

@Component({
  selector: 'app-scheduler-customizing-events',
  styleUrl: './customizing-events.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customizing-events.html',
  providers: [Notifications],
  standalone: false,
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
    // drag,
    responsive: {
      xsmall: {
        view: {
          scheduler: {
            type: 'day',
          },
        },
      },
      medium: {
        view: {
          scheduler: {
            type: 'week',
          },
        },
      },
    },
  };

  getCategory(id: number): any {
    switch (id) {
      case 1:
        return {
          name: 'Project X',
          color: '#ff825d',
        };
      case 2:
        return {
          name: 'Stakeholder Mtg.',
          color: '#bd75d0',
        };
      case 3:
        return {
          name: 'Status Update',
          color: '#7f9230',
        };
      case 4:
        return {
          name: 'Information Sharing',
          color: '#f14590',
        };
      case 5:
        return {
          name: 'Team Building',
          color: '#64cad4',
        };
      default:
        return {
          name: 'No category',
          color: '#5ac8fa',
        };
    }
  }

  getParticipant(id: number): any {
    switch (id) {
      case 1:
        return {
          name: 'Lisa',
          img: 'https://img.mobiscroll.com/demos/f1.png',
        };
      case 2:
        return {
          name: 'Sharon',
          img: 'https://img.mobiscroll.com/demos/f2.png',
        };
      case 3:
        return {
          name: 'Emily',
          img: 'https://img.mobiscroll.com/demos/f3.png',
        };
      case 4:
        return {
          name: 'Rose',
          img: 'https://img.mobiscroll.com/demos/f4.png',
        };
      case 5:
        return {
          name: 'Matt',
          img: 'https://img.mobiscroll.com/demos/m1.png',
        };
      case 6:
        return {
          name: 'Rick',
          img: 'https://img.mobiscroll.com/demos/m2.png',
        };
      case 7:
        return {
          name: 'John',
          img: 'https://img.mobiscroll.com/demos/m3.png',
        };
      case 8:
        return {
          name: 'Ethan',
          img: 'https://img.mobiscroll.com/demos/m4.png',
        };
    }
  }

  edit(): void {
    this.notify.toast({
      message: 'Edit clicked',
    });
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/multi-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
