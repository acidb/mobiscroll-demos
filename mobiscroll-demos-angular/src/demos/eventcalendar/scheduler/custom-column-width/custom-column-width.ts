import { Component } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscResource, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';

setOptions({
  // locale,
  // theme,
});

@Component({
  selector: 'app-scheduler-custom-column-width',
  templateUrl: './custom-column-width.html',
  providers: [Notifications],
})
export class AppComponent {
  groupBy: any = 'resource';
  showResources = 'show';
  myClass = 'my-col-width-small';

  /// refactor dynatime not working here...

  myEvents2: MbscCalendarEvent[] = [
    { resource: 1, start: 'dyndatetime(y,m,d,9)', end: 'dyndatetime(y,m,d,12)', title: 'Meeting' },
    { resource: 2, start: 'dyndatetime(y,m,d,11)', end: 'dyndatetime(y,m,d,13)', title: 'Call' },
    { resource: 3, start: 'dyndatetime(y,m,d,14)', end: 'dyndatetime(y,m,d,16)', title: 'Review' },
    { resource: 4, start: 'dyndatetime(y,m,d,10)', end: 'dyndatetime(y,m,d,13)', title: 'Session' },
    { resource: 5, start: 'dyndatetime(y,m,d,15)', end: 'dyndatetime(y,m,d,17)', title: 'Sprint' },
    { resource: 6, start: 'dyndatetime(y,m,d,8)', end: 'dyndatetime(y,m,d,10)', title: 'Stand-up' },
    { resource: 1, start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,12)', title: 'Planning' },
    { resource: 2, start: 'dyndatetime(y,m,d-1,13)', end: 'dyndatetime(y,m,d-1,15)', title: 'Discussion' },
    { resource: 3, start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,12)', title: 'Review' },
    { resource: 4, start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,16)', title: 'Feedback' },
    { resource: 5, start: 'dyndatetime(y,m,d-1,11)', end: 'dyndatetime(y,m,d-1,13)', title: 'Design' },
    { resource: 6, start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,11)', title: 'Meeting' },
    { resource: 1, start: 'dyndatetime(y,m,d-2,8)', end: 'dyndatetime(y,m,d-2,10)', title: 'Kickoff' },
    { resource: 2, start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,17)', title: 'Talk' },
    { resource: 3, start: 'dyndatetime(y,m,d-2,11)', end: 'dyndatetime(y,m,d-2,13)', title: 'Demo' },
    { resource: 4, start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,16)', title: 'Retro' },
    { resource: 5, start: 'dyndatetime(y,m,d-2,10)', end: 'dyndatetime(y,m,d-2,12)', title: 'Review' },
    { resource: 6, start: 'dyndatetime(y,m,d-2,13)', end: 'dyndatetime(y,m,d-2,15)', title: 'Update' },
    { resource: 1, start: 'dyndatetime(y,m,d-3,7)', end: 'dyndatetime(y,m,d-3,9)', title: 'Sync' },
    { resource: 2, start: 'dyndatetime(y,m,d-3,16)', end: 'dyndatetime(y,m,d-3,18)', title: 'Check-in' },
    { resource: 3, start: 'dyndatetime(y,m,d-3,9)', end: 'dyndatetime(y,m,d-3,11)', title: 'Planning' },
    { resource: 4, start: 'dyndatetime(y,m,d-3,12)', end: 'dyndatetime(y,m,d-3,14)', title: 'Collab' },
    { resource: 5, start: 'dyndatetime(y,m,d-3,11)', end: 'dyndatetime(y,m,d-3,13)', title: 'Stand-up' },
    { resource: 6, start: 'dyndatetime(y,m,d-3,14)', end: 'dyndatetime(y,m,d-3,16)', title: 'Retro' },
    { resource: 1, start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,12)', title: 'Review' },
    { resource: 2, start: 'dyndatetime(y,m,d+1,11)', end: 'dyndatetime(y,m,d+1,13)', title: 'Integration' },
    { resource: 3, start: 'dyndatetime(y,m,d+1,15)', end: 'dyndatetime(y,m,d+1,17)', title: 'Retrospective' },
    { resource: 4, start: 'dyndatetime(y,m,d+1,10)', end: 'dyndatetime(y,m,d+1,12)', title: 'Testing' },
    { resource: 5, start: 'dyndatetime(y,m,d+1,16)', end: 'dyndatetime(y,m,d+1,18)', title: 'Demo' },
    { resource: 6, start: 'dyndatetime(y,m,d+1,14)', end: 'dyndatetime(y,m,d+1,16)', title: 'Call' },
    { resource: 1, start: 'dyndatetime(y,m,d+2,8)', end: 'dyndatetime(y,m,d+2,10)', title: 'Kickoff' },
    { resource: 2, start: 'dyndatetime(y,m,d+2,13)', end: 'dyndatetime(y,m,d+2,15)', title: 'Demo' },
    { resource: 3, start: 'dyndatetime(y,m,d+2,11)', end: 'dyndatetime(y,m,d+2,13)', title: 'Review' },
    { resource: 4, start: 'dyndatetime(y,m,d+2,10)', end: 'dyndatetime(y,m,d+2,12)', title: 'Stand-up' },
    { resource: 5, start: 'dyndatetime(y,m,d+2,15)', end: 'dyndatetime(y,m,d+2,17)', title: 'Retro' },
    { resource: 6, start: 'dyndatetime(y,m,d+2,9)', end: 'dyndatetime(y,m,d+2,11)', title: 'Update' },
    { resource: 1, start: 'dyndatetime(y,m,d+3,10)', end: 'dyndatetime(y,m,d+3,12)', title: 'Planning' },
    { resource: 2, start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,16)', title: 'Fixing' },
    { resource: 3, start: 'dyndatetime(y,m,d+3,8)', end: 'dyndatetime(y,m,d+3,10)', title: 'Onboarding' },
    { resource: 4, start: 'dyndatetime(y,m,d+3,13)', end: 'dyndatetime(y,m,d+3,15)', title: 'Rollout' },
    { resource: 5, start: 'dyndatetime(y,m,d+3,12)', end: 'dyndatetime(y,m,d+3,14)', title: 'Review' },
    { resource: 6, start: 'dyndatetime(y,m,d+3,16)', end: 'dyndatetime(y,m,d+3,18)', title: 'Strategy' },
  ];

  myResEvents: MbscCalendarEvent[] = [
    { resource: 1, start: 'dyndatetime(y,m,d,9)', end: 'dyndatetime(y,m,d,12)', title: 'Meeting' },
    { resource: 2, start: 'dyndatetime(y,m,d,11)', end: 'dyndatetime(y,m,d,13)', title: 'Call' },
    { resource: 3, start: 'dyndatetime(y,m,d,14)', end: 'dyndatetime(y,m,d,16)', title: 'Review' },
    { resource: 4, start: 'dyndatetime(y,m,d,10)', end: 'dyndatetime(y,m,d,13)', title: 'Session' },
    { resource: 5, start: 'dyndatetime(y,m,d,15)', end: 'dyndatetime(y,m,d,17)', title: 'Sprint' },
    { resource: 6, start: 'dyndatetime(y,m,d,8)', end: 'dyndatetime(y,m,d,10)', title: 'Stand-up' },
    { resource: 1, start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,12)', title: 'Planning' },
    { resource: 2, start: 'dyndatetime(y,m,d-1,13)', end: 'dyndatetime(y,m,d-1,15)', title: 'Discussion' },
    { resource: 3, start: 'dyndatetime(y,m,d-1,10)', end: 'dyndatetime(y,m,d-1,12)', title: 'Review' },
    { resource: 4, start: 'dyndatetime(y,m,d-1,14)', end: 'dyndatetime(y,m,d-1,16)', title: 'Feedback' },
    { resource: 5, start: 'dyndatetime(y,m,d-1,11)', end: 'dyndatetime(y,m,d-1,13)', title: 'Design' },
    { resource: 6, start: 'dyndatetime(y,m,d-1,9)', end: 'dyndatetime(y,m,d-1,11)', title: 'Meeting' },
    { resource: 1, start: 'dyndatetime(y,m,d-2,8)', end: 'dyndatetime(y,m,d-2,10)', title: 'Kickoff' },
    { resource: 2, start: 'dyndatetime(y,m,d-2,15)', end: 'dyndatetime(y,m,d-2,17)', title: 'Talk' },
    { resource: 3, start: 'dyndatetime(y,m,d-2,11)', end: 'dyndatetime(y,m,d-2,13)', title: 'Demo' },
    { resource: 4, start: 'dyndatetime(y,m,d-2,14)', end: 'dyndatetime(y,m,d-2,16)', title: 'Retro' },
    { resource: 5, start: 'dyndatetime(y,m,d-2,10)', end: 'dyndatetime(y,m,d-2,12)', title: 'Review' },
    { resource: 6, start: 'dyndatetime(y,m,d-2,13)', end: 'dyndatetime(y,m,d-2,15)', title: 'Update' },
    { resource: 1, start: 'dyndatetime(y,m,d-3,7)', end: 'dyndatetime(y,m,d-3,9)', title: 'Sync' },
    { resource: 2, start: 'dyndatetime(y,m,d-3,16)', end: 'dyndatetime(y,m,d-3,18)', title: 'Check-in' },
    { resource: 3, start: 'dyndatetime(y,m,d-3,9)', end: 'dyndatetime(y,m,d-3,11)', title: 'Planning' },
    { resource: 4, start: 'dyndatetime(y,m,d-3,12)', end: 'dyndatetime(y,m,d-3,14)', title: 'Collab' },
    { resource: 5, start: 'dyndatetime(y,m,d-3,11)', end: 'dyndatetime(y,m,d-3,13)', title: 'Stand-up' },
    { resource: 6, start: 'dyndatetime(y,m,d-3,14)', end: 'dyndatetime(y,m,d-3,16)', title: 'Retro' },
    { resource: 1, start: 'dyndatetime(y,m,d+1,9)', end: 'dyndatetime(y,m,d+1,12)', title: 'Review' },
    { resource: 2, start: 'dyndatetime(y,m,d+1,11)', end: 'dyndatetime(y,m,d+1,13)', title: 'Integration' },
    { resource: 3, start: 'dyndatetime(y,m,d+1,15)', end: 'dyndatetime(y,m,d+1,17)', title: 'Retrospective' },
    { resource: 4, start: 'dyndatetime(y,m,d+1,10)', end: 'dyndatetime(y,m,d+1,12)', title: 'Testing' },
    { resource: 5, start: 'dyndatetime(y,m,d+1,16)', end: 'dyndatetime(y,m,d+1,18)', title: 'Demo' },
    { resource: 6, start: 'dyndatetime(y,m,d+1,14)', end: 'dyndatetime(y,m,d+1,16)', title: 'Call' },
    { resource: 1, start: 'dyndatetime(y,m,d+2,8)', end: 'dyndatetime(y,m,d+2,10)', title: 'Kickoff' },
    { resource: 2, start: 'dyndatetime(y,m,d+2,13)', end: 'dyndatetime(y,m,d+2,15)', title: 'Demo' },
    { resource: 3, start: 'dyndatetime(y,m,d+2,11)', end: 'dyndatetime(y,m,d+2,13)', title: 'Review' },
    { resource: 4, start: 'dyndatetime(y,m,d+2,10)', end: 'dyndatetime(y,m,d+2,12)', title: 'Stand-up' },
    { resource: 5, start: 'dyndatetime(y,m,d+2,15)', end: 'dyndatetime(y,m,d+2,17)', title: 'Retro' },
    { resource: 6, start: 'dyndatetime(y,m,d+2,9)', end: 'dyndatetime(y,m,d+2,11)', title: 'Update' },
    { resource: 1, start: 'dyndatetime(y,m,d+3,10)', end: 'dyndatetime(y,m,d+3,12)', title: 'Planning' },
    { resource: 2, start: 'dyndatetime(y,m,d+3,14)', end: 'dyndatetime(y,m,d+3,16)', title: 'Fixing' },
    { resource: 3, start: 'dyndatetime(y,m,d+3,8)', end: 'dyndatetime(y,m,d+3,10)', title: 'Onboarding' },
    { resource: 4, start: 'dyndatetime(y,m,d+3,13)', end: 'dyndatetime(y,m,d+3,15)', title: 'Rollout' },
    { resource: 5, start: 'dyndatetime(y,m,d+3,12)', end: 'dyndatetime(y,m,d+3,14)', title: 'Review' },
    { resource: 6, start: 'dyndatetime(y,m,d+3,16)', end: 'dyndatetime(y,m,d+3,18)', title: 'Strategy' },
  ];

  myEvents: MbscCalendarEvent[] = [];

  myResources: MbscResource[] = [
    { id: 1, name: 'Bart', color: '#328E39' },
    { id: 2, name: 'Jake', color: '#00AABB' },
    { id: 3, name: 'Carl', color: '#EA72C0' },
    { id: 4, name: 'Dana', color: '#FF5733' },
    { id: 5, name: 'Evan', color: '#3366FF' },
    { id: 6, name: 'Faye', color: '#FFD700' },
  ];

  myResources2: MbscResource[] = [];

  myView: MbscEventcalendarView = {
    schedule: { type: 'month', startTime: '08:00', endTime: '20:00', allDay: false },
  };

  toggleResources() {
    [this.myResources, this.myEvents] = this.showResources === 'show' ? [this.myResources2, this.myResEvents] : [[], []];
  }

  changeColumnWidth(value: string) {
    this.myClass = value;
  }

  log() {
    console.log('myClass:', this.myClass);
  }
}
