import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscInput,
  MbscPageLoadingEvent,
  MbscPopup,
  MbscPopupOptions,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-agenda-searching-events-in-popup',
  styleUrl: './searching-events-in-popup.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './searching-events-in-popup.html',
  standalone: false,
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  @ViewChild('searchInput', { static: false })
  set searchInputElm(elm: MbscInput) {
    setTimeout(() => {
      this.searchInput = elm.nativeElement;
    });
  }

  @ViewChild('calendar', { static: false })
  calendar!: MbscEventcalendar;

  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  calEvents: MbscCalendarEvent[] = [];
  calView: MbscEventcalendarView = { agenda: { type: 'month' } };
  listEvents: MbscCalendarEvent[] = [];
  listView: MbscEventcalendarView = { agenda: { type: 'year', size: 5 } };
  searchInput: HTMLElement | undefined;
  selectedEvent: MbscCalendarEvent[] = [];
  timer?: ReturnType<typeof setTimeout>;

  popupOptions: MbscPopupOptions = {
    contentPadding: false,
    display: 'anchored',
    focusOnClose: false,
    focusOnOpen: false,
    maxHeight: 500,
    scrollLock: false,
    showArrow: false,
    showOverlay: false,
    width: 400,
  };

  onInput(ev: Event): void {
    const searchText = (ev.target as HTMLInputElement).value;

    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      if (searchText.length > 0) {
        this.http
          .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?text=' + searchText, 'callback')
          .subscribe((resp) => {
            this.listEvents = resp;
            this.popup.open();
          });
      } else {
        this.popup.close();
      }
    }, 200);
  }

  onFocus(ev: Event): void {
    if ((ev.target as HTMLInputElement).value.length > 0) {
      this.popup.open();
    }
  }

  onPageLoading(args: MbscPageLoadingEvent): void {
    const start = formatDate('YYYY-MM-DD', args.viewStart);
    const end = formatDate('YYYY-MM-DD', args.viewEnd);

    this.http
      .jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end, 'callback')
      .subscribe((resp) => {
        this.calEvents = resp;
      });
  }

  onEventClick(args: MbscEventClickEvent): void {
    this.calendar.navigateToEvent(args.event);
    this.selectedEvent = [args.event];
    this.popup.close();
  }
}
