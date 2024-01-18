import { Component, ViewChild, OnInit, ViewEncapsulation } from '@angular/core';
import {
  formatDate,
  MbscCalendarEvent,
  MbscEventcalendarOptions,
  MbscPopup,
  MbscPopupOptions,
  Notifications,
  setOptions /* localeImport */,
} from '@mobiscroll/angular';
import { HttpClient } from '@angular/common/http';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-timeline-meal-planner',
  styleUrl: './meal-planner.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './meal-planner.html',
  providers: [Notifications],
})
export class AppComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private notify: Notifications,
  ) {}
  @ViewChild('popup', { static: false })
  popup!: MbscPopup;
  myMeals: MbscCalendarEvent[] = [];
  name = '';
  calories = '';
  notes = '';
  type = 1;
  tempMeal: any;
  popupHeader!: string;
  types = [
    {
      id: 1,
      name: 'Breakfast',
      color: '#e20f0f',
      kcal: '300 - 400 kcal',
      icon: '🍳',
    },
    {
      id: 2,
      name: 'Elevenses',
      color: '#157d13',
      kcal: '100 - 200 kcal',
      icon: '🍌',
    },
    {
      id: 3,
      name: 'Lunch',
      color: '#32a6de',
      kcal: '500 - 700 kcal',
      icon: '🍜',
    },
    {
      id: 4,
      name: 'Dinner',
      color: '#e29d1d',
      kcal: '400 - 600 kcal',
      icon: '🥙',
    },
    {
      id: 5,
      name: 'Snack',
      color: '#68169c',
      kcal: '100 - 200 kcal',
      icon: '🥨',
    },
  ];
  popupAddButtons = [
    'cancel',
    {
      handler: () => {
        this.saveEvent();
      },
      keyCode: 'enter',
      text: 'Add',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  popupEditButtons = [
    'cancel',
    {
      handler: () => {
        this.saveEvent();
      },
      keyCode: 'enter',
      text: 'Save',
      cssClass: 'mbsc-popup-button-primary',
    },
  ];
  popupButtons: any = [];
  popupOptions: MbscPopupOptions = {
    display: 'bottom',
    contentPadding: false,
    fullScreen: true,
    onClose: () => {
      if (!this.isEdit) {
        // refresh the list, if add popup was canceled, to remove the temporary event
        this.myMeals = [...this.myMeals];
      }
    },
    responsive: {
      medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false,
      },
    },
  };
  isEdit = false;
  calendarOptions: MbscEventcalendarOptions = {
    view: {
      timeline: {
        type: 'week',
        eventList: true,
      },
    },
    dragToCreate: false,
    dragToResize: false,
    dragToMove: true,
    clickToCreate: true,
    extendDefaultEvent: () => {
      return {
        title: 'New meal',
        allDay: true,
      };
    },
    onEventClick: (args: any) => {
      const event = args.event;
      this.isEdit = true;
      this.tempMeal = event;
      // fill popup form with event data
      this.loadPopupForm(event);
      // set popup options
      this.popupButtons = this.popupEditButtons;
      this.popupHeader =
        '<div>New meal</div><div class="md-meal-type">' + formatDate('DDDD, DD MMMM YYYY', new Date(this.tempMeal.start)) + '</div>';
      this.type = +event.resource;
      // open the popup
      this.popup.open();
    },
    onEventCreated: (args: any) => {
      const event = args.event;
      setTimeout(() => {
        this.isEdit = false;
        this.tempMeal = event;
        // fill popup form with event data
        this.loadPopupForm(event);
        // set popup options
        this.popupButtons = this.popupAddButtons;
        this.popupHeader =
          '<div>New meal</div><div class="md-meal-type">' + formatDate('DDDD, DD MMMM YYYY', new Date(this.tempMeal.start)) + '</div>';
        this.type = +event.resource;
        // open the popup
        this.popup.open();
      });
    },
    onEventDeleted: (args) => {
      setTimeout(() => {
        this.deleteMeal(args.event);
      });
    },
  };

  ngOnInit(): void {
    this.http.jsonp<MbscCalendarEvent[]>('https://trial.mobiscroll.com/meal-planner/', 'callback').subscribe((resp) => {
      this.myMeals = resp;
    });
  }
  loadPopupForm(event: any): void {
    this.name = event.title;
    this.calories = event.calories;
    this.notes = event.notes;
  }
  saveEvent(): void {
    this.tempMeal.title = this.name;
    this.tempMeal.calories = this.calories;
    this.tempMeal.notes = this.notes;
    this.tempMeal.allDay = true;
    this.tempMeal.resource = this.type;
    if (this.isEdit) {
      // update the event in the list
      this.myMeals = [...this.myMeals];
    } else {
      // add the new event to the list
      this.myMeals = [...this.myMeals, this.tempMeal];
    }
    // close the popup
    this.popup.close();
  }
  deleteMeal(event: MbscCalendarEvent): void {
    this.myMeals = this.myMeals.filter((item) => item.id !== event.id);
    this.notify.snackbar({
      button: {
        action: () => {
          this.myMeals = [...this.myMeals, event];
        },
        text: 'Undo',
      },
      message: 'Meal deleted',
    });
  }
  onDeleteClick(): void {
    this.deleteMeal(this.tempMeal);
    this.popup.close();
  }
}
