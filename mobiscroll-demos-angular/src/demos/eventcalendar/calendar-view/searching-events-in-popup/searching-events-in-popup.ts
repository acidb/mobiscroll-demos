import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscPopup,
  MbscPopupOptions,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-eventcalendar-searching-events-in-popup',
  styleUrl: './searching-events-in-popup.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-popup.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('searchInput', { static: false })
  searchInputElm!: any;

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  mySelectedEvent: MbscCalendarEvent[] = [];
  searchInput: HTMLElement | undefined;
  timer: any;

  calEvents: MbscCalendarEvent[] = [];
  listEvents: MbscCalendarEvent[] = [];

  calView: MbscEventcalendarView = {
    calendar: {
      labels: true,
    },
  };

  listView: MbscEventcalendarView = {
    agenda: {
      type: 'year',
      size: 5,
    },
  };

  popupOptions: MbscPopupOptions = {
    display: 'anchored',
    showArrow: false,
    showOverlay: false,
    scrollLock: false,
    contentPadding: false,
    focusOnOpen: false,
    focusOnClose: false,
  };

  initPopup(): void {
    setTimeout(() => {
      this.searchInput = this.searchInputElm.nativeElement;
    });
  }

  onSearch(ev: any): void {
    const text = ev.target.value;

    clearTimeout(this.timer);
    this.timer = null;

    if (!this.timer) {
      this.timer = setTimeout(() => {
        if (text.length > 0) {
          this.http
            .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?text=' + text, 'callback')
            .subscribe((resp: MbscCalendarEvent[]) => {
              this.listEvents = resp;
              this.popup.open();
            });
        } else {
          this.popup.close();
        }
      }, 200);
    }
  }

  onFocus(ev: any): void {
    if (ev.target.value.length > 0) {
      this.popup.open();
    }
  }

  onPageLoading(args: any): void {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    setTimeout(() => {
      this.http
        .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end, 'callback')
        .subscribe((resp: MbscCalendarEvent[]) => {
          this.calEvents = resp;
        });
    });
  }

  eventClick(args: any): void {
    this.calendar.navigateToEvent(args.event);
    this.mySelectedEvent = [args.event];
    this.popup.close();
  }
}
