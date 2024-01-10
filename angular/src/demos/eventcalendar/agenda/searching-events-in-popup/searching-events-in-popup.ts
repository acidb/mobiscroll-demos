import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPopup,
  MbscPopupOptions,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'searching-events-in-popup',
  styleUrl: './searching-events-in-popup.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-popup.html',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('searchInput', { static: false })
  searchInputElm!: any;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  currentDate: any = new Date();
  mySelectedEvent: MbscCalendarEvent[] = [];
  searchInput: HTMLElement | undefined;
  timer: any;

  calEvents: MbscCalendarEvent[] = [];
  listEvents: MbscCalendarEvent[] = [];

  calView: MbscEventcalendarView = {
    agenda: {
      type: 'month',
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
    this.currentDate = args.event.start;
    this.mySelectedEvent = [args.event];
    this.popup.close();
  }
}
