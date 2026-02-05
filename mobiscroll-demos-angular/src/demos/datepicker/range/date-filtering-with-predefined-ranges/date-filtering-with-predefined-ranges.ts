import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  formatDate,
  MbscDatepickerOptions,
  MbscDateType,
  MbscInput,
  MbscModule,
  MbscPopup,
  MbscPopupOptions,
  MbscSelectData,
  MbscSelectOptions,
  options,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

const now = new Date();
const day = now.getDay();
const monday = now.getDate() - day + (day === 0 ? -6 : 1);
const startDate = dyndatetime('y,m,d');
const endDate = dyndatetime('y,m,d+6');

@Component({
  selector: 'app-range-date-filtering-with-predefined-ranges',
  styleUrl: './date-filtering-with-predefined-ranges.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './date-filtering-with-predefined-ranges.html',
  standalone: true,
  imports: [CommonModule, FormsModule, MbscModule],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;

  @ViewChild('input', { static: false })
  input!: MbscInput;

  inputElm!: HTMLElement;
  dateInput = '';
  selected = 'custom';
  selectedDate: MbscDateType[] = [startDate, endDate];
  disableInput = false;

  respPopup: Record<string, MbscPopupOptions & { breakpoint?: number }> = {
    xsmall: {
      display: 'bottom',
      touchUi: true,
      buttons: [
        {
          text: 'Apply',
          handler: () => {
            this.changeInputValue(this.selectedDate[0] as string, (this.selectedDate[1] || this.selectedDate[0]) as string);
            this.popup.close();
          },
        },
        'cancel',
      ],
    },
    custom: {
      breakpoint: 559,
      buttons: [],
      display: 'anchored',
      anchorAlign: 'start',
      touchUi: false,
      scrollLock: false,
      showArrow: false,
      maxWidth: 920,
    },
  };

  respSelect = {
    xsmall: {
      touchUi: true,
    },
    small: {
      touchUi: false,
    },
  };

  myData: MbscSelectData[] = [
    {
      value: 'custom',
      text: 'Custom',
    },
    {
      value: 'today',
      text: 'Today',
    },
    {
      value: 'yesterday',
      text: 'Yesterday',
    },
    {
      value: 'last-week',
      text: 'Last week',
    },
    {
      value: 'last-month',
      text: 'Last month',
    },
    {
      value: 'last-7-days',
      text: 'Last 7 days',
    },
    {
      value: 'last-30-days',
      text: 'Last 30 days',
    },
  ];

  selectOptions: MbscSelectOptions = {
    responsive: {
      xsmall: {
        touchUi: true,
      },
      small: {
        touchUi: false,
      },
    },
    onChange: (args) => {
      const s = args.value;

      if (s === 'custom') {
        this.disableInput = false;
      } else {
        this.disableInput = true;

        switch (s) {
          case 'today':
            this.selectedDate = ['2021-09-15T00:00', '2021-09-15T00:00'];
            break;
          case 'yesterday':
            this.selectedDate = ['2021-09-14T00:00', '2021-09-14T00:00'];
            break;
          case 'last-week':
            this.selectedDate = [
              new Date(now.getFullYear(), now.getMonth(), monday - 7),
              new Date(now.getFullYear(), now.getMonth(), monday - 1),
            ];
            break;
          case 'last-month':
            this.selectedDate = ['2021-08-01T00:00', '2021-08-31T00:00'];
            break;
          case 'last-7-days':
            this.selectedDate = ['2021-09-09T00:00', '2021-09-15T00:00'];
            break;
          case 'last-30-days':
            this.selectedDate = ['2021-08-17T00:00', '2021-09-15T00:00'];
            break;
          default:
            break;
        }
      }
      this.selected = s;
    },
  };

  calendarOptions: MbscDatepickerOptions = {
    controls: ['calendar'],
    select: 'range',
    display: 'inline',
    showRangeLabels: false,
    pages: 'auto',
    returnFormat: 'iso8601',
    showOnClick: false,
    showOnFocus: false,
    onChange: () => {
      this.disableInput = false;
    },
  };

  inputClick(): void {
    this.popup.open();
  }

  changeInputValue(start: string, end: string): void {
    const locale = options.locale || {};
    const dateFormat = locale.dateFormat || 'DD/MM/YYYY';

    this.dateInput = formatDate(dateFormat, new Date(start)) + ' - ' + formatDate(dateFormat, new Date(end));
  }

  applyClick(): void {
    const date = this.selectedDate;

    this.changeInputValue(date[0] as string, (date[1] || date[0]) as string);
    this.popup.close();
  }

  cancelClick(): void {
    this.popup.close();
  }

  ngOnInit(): void {
    this.changeInputValue(startDate, endDate);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.inputElm = this.input.nativeElement;
    });
  }
}
