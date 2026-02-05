import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MbscCalendarEvent, MbscEventcalendarView, MbscModule, MbscResource, Notifications, setOptions /* localeImport */ } from '@mobiscroll/angular';
import { dyndatetime } from '../../../../app/app.util';

setOptions({
  // locale,
  // theme
});

@Component({
  selector: 'app-role-based-views-with-different-permission',
  styleUrl: './role-based-views-with-different-permission.css',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './role-based-views-with-different-permission.html',
  standalone: true,
  imports: [CommonModule, MbscModule],
})
export class AppComponent implements OnInit {
  constructor(private notify: Notifications) { }

  user = { id: 2, name: 'Willis Cane', role: 'limited' };

  /* Other user examples
  user = { id: 'client', name: 'Client', role: 'readonly' };
  user = { id: 'manager', name: 'Project Manager', role: 'full' }; */

  editEvents = false;
  defaultColor = '';

  myView: MbscEventcalendarView = {
    timeline: {
      type: 'week',
      startTime: '08:00',
      endTime: '20:00',
    },
  };

  myEvents: MbscCalendarEvent[] = [
    {
      start: dyndatetime('y,m,d-1,11'),
      end: dyndatetime('y,m,d-1,15'),
      title: 'Task 1',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d-1,14'),
      end: dyndatetime('y,m,d-1,17'),
      title: 'Task 2',
      resource: 3,
    },
    {
      start: dyndatetime('y,m,d-1,12'),
      end: dyndatetime('y,m,d-1,14'),
      title: 'Task 3',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,15'),
      title: 'Task 4',
      resource: 1,
    },
    {
      start: dyndatetime('y,m,d,11'),
      end: dyndatetime('y,m,d,13'),
      title: 'Task 5',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,17'),
      title: 'Task 6',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,15'),
      title: 'Task 7',
      resource: 3,
    },
    {
      start: dyndatetime('y,m,d,17'),
      end: dyndatetime('y,m,d,20'),
      title: 'Task 8',
      resource: 3,
    },
    {
      start: dyndatetime('y,m,d,8'),
      end: dyndatetime('y,m,d,11,30'),
      title: 'Task 9',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,12'),
      end: dyndatetime('y,m,d,14'),
      title: 'Task 10',
      resource: 4,
    },
    {
      start: dyndatetime('y,m,d,10'),
      end: dyndatetime('y,m,d,13'),
      title: 'Task 11',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d,14'),
      end: dyndatetime('y,m,d,16'),
      title: 'Task 12',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d,16,30'),
      end: dyndatetime('y,m,d,19'),
      title: 'Task 13',
      resource: 5,
    },
    {
      start: dyndatetime('y,m,d+1,11'),
      end: dyndatetime('y,m,d+1,14'),
      title: 'Task 14',
      resource: 2,
    },
    {
      start: dyndatetime('y,m,d+1,16'),
      end: dyndatetime('y,m,d+1,20'),
      title: 'Task 15',
      resource: 5,
    },
  ];

  myResources: MbscResource[] = [
    { id: 1, name: 'Jude Chester', color: '#af2ec3' },
    { id: 2, name: 'Willis Cane', color: '#cccc39' },
    { id: 3, name: 'Derek Austyn', color: '#56ca2c' },
    { id: 4, name: 'Merv Kenny', color: '#af2424' },
    { id: 5, name: 'Fred Waldez', color: '#256ebc' }
  ];

  myDefaultEvent = (): MbscCalendarEvent => ({
    color: this.defaultColor
  })

  // Simulate login
  login(): void {
    const newTasks = [...this.myEvents];
    const newResources = [...this.myResources];

    if (this.user.role === 'readonly') {
      this.defaultColor = '';
      for (const task of newTasks) {
        task.editable = false;
        task.color = '#af2ec3';
      }

      this.notify.toast({
        message: 'Client with read-only access logged in',
      });
    } else if (this.user.role === 'limited') {
      this.defaultColor = '#af2424';
      for (const task of newTasks) {
        if (task.resource !== this.user.id) {
          task.editable = false;
          task.color = '#6a6a6a';
        } else {
          task.color = '#af2424';
        }
      }

      for (const res of newResources) {
        if (res.id !== this.user.id) {
          res.eventCreation = false;
        }
      }

      this.notify.toast({
        message: 'User ' + this.user.name + ' with limited access logged in',
      });
    } else {
      this.defaultColor = '';
      this.notify.toast({
        message: 'User with full access logged in',
      });
    }

    this.myEvents = newTasks;
    this.myResources = newResources;
    this.editEvents = this.user.role != 'readonly';
  }

  ngOnInit(): void {
    this.login();
  }

}
