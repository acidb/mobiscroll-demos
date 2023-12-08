import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { setOptions, Notifications, MbscEventcalendarView, MbscCalendarEvent, MbscResource /* localeImport */ } from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'zoom-in-out',
  styleUrl: './zoom-in-out.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './zoom-in-out.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  @ViewChild('mycalendar', { static: false })
  mycalendar: any;

  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}

  myEvents: MbscCalendarEvent[] = [];

  view: MbscEventcalendarView = {
    timeline: {
      type: 'day',
      size: 3,
      resolution: 'hour',
      timeCellStep: 360,
      timeLabelStep: 360,
    },
  };

  zoom = 7;
  cssClass = '';
  timer: any;
  refDate = 'dyndatetime(y,m,d-1)';

  myResources: MbscResource[] = [
    {
      id: 1,
      name: 'Resource A',
      color: '#e20000',
    },
    {
      id: 2,
      name: 'Resource B',
      color: '#76e083',
    },
    {
      id: 3,
      name: 'Resource C',
      color: '#4981d6',
    },
    {
      id: 4,
      name: 'Resource D',
      color: '#e25dd2',
    },
    {
      id: 5,
      name: 'Resource E',
      color: '#1dab2f',
    },
    {
      id: 6,
      name: 'Resource F',
      color: '#d6d145',
    },
  ];

  changeView(step: number) {
    let calView: MbscEventcalendarView;
    let toastText: string;
    let newRefDate: any;
    let cssClass = '';
    const newZoom = this.zoom + step;
    const viewDate = this.mycalendar.getViewDate();
    const oneDay = 60000 * 60 * 24;

    clearTimeout(this.timer);
    this.timer = null;

    switch (newZoom) {
      case 9:
      default:
        // Multiple days, 30m resolution, 1h labels
        calView = {
          timeline: {
            type: 'day',
            size: 3,
            resolution: 'hour',
            timeCellStep: 30,
            timeLabelStep: 60,
          },
        };
        toastText = '30 minutes';
        newRefDate = new Date(viewDate - oneDay);
        break;
      case 8:
        // Multiple days, 3h resolution, 6h labels
        calView = {
          timeline: {
            type: 'day',
            size: 3,
            resolution: 'hour',
            timeCellStep: 180,
            timeLabelStep: 360,
          },
        };
        toastText = '3 hours';
        newRefDate = new Date(viewDate - oneDay);
        break;
      case 7:
        // Multiple days, 6h resolution
        calView = {
          timeline: {
            type: 'day',
            size: 3,
            resolution: 'hour',
            timeCellStep: 360,
            timeLabelStep: 360,
          },
        };
        toastText = '6 hours';
        newRefDate = new Date(viewDate - oneDay);
        break;
      case 6:
        // Multiple weeks, day resolution
        calView = {
          timeline: {
            type: 'week',
            size: 5,
            resolution: 'day',
          },
        };
        cssClass = 'column-large';
        toastText = 'Multiple days';
        newRefDate = new Date(viewDate - oneDay * 17);
        break;
      case 5:
        // Multiple weeks, day resolution - smaller width columns
        calView = {
          timeline: {
            type: 'week',
            size: 5,
            resolution: 'day',
          },
        };
        cssClass = 'column-medium';
        toastText = 'Medium column width';
        newRefDate = new Date(viewDate - oneDay * 17);
        break;
      case 4:
        // Multiple weeks, day resolution - even smaller width columns
        calView = {
          timeline: {
            type: 'week',
            size: 5,
            resolution: 'day',
          },
        };
        toastText = 'Small column width';
        newRefDate = new Date(viewDate - oneDay * 17);
        break;
      case 3:
        // Multiple weeks, week resolution
        calView = {
          timeline: {
            type: 'week',
            size: 5,
            resolution: 'week',
            // eventList: true
          },
        };
        toastText = 'Multiple weeks';
        newRefDate = new Date(viewDate - oneDay * 17);
        break;
      case 2:
        var currentDate = new Date(viewDate);
        // Multiple months, month resolution
        calView = {
          timeline: {
            type: 'month',
            size: 6,
            resolution: 'month',
            // eventList: true
          },
        };
        toastText = 'Multiple months';
        newRefDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1);
        break;
      case 1:
        var currentDate = new Date(viewDate);
        // Multiple years, year resolution
        calView = {
          timeline: {
            type: 'year',
            size: 6,
            resolution: 'year',
            // eventList: true
          },
        };
        toastText = 'Multiple years';
        newRefDate = new Date(currentDate.getFullYear() - 2, 0, 1);
        break;
    }

    if (!this.timer) {
      this.timer = setTimeout(() => {
        this.zoom = newZoom;
        this.view = calView;
        this.refDate = newRefDate;
        this.cssClass = cssClass;
        this.notify.toast({
          message: toastText,
        });
      }, 100);
    }
  }

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trialdev.mobiscroll.com/big-timeline-events/', 'callback').subscribe((resp) => {
      this.myEvents = resp;
    });
  }
}
