import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      $('#demo-hide-non-working-resources')
        .mobiscroll()
        .eventcalendar({
          view: {
            schedule: {
              type: 'week',
              allDay: false,
              startDay: 1,
              endDay: 5,
              startTime: '08:00',
              endTime: '20:00',
              hideEmptyColumns: true,
              hideInvalidColumns: true,
            },
          },
          resources: [
            {
              id: 1,
              name: 'Alice Johnson (Project Manager)',
              color: '#fcb39dff',
            },
            {
              id: 2,
              name: 'Bob Smith (Senior Developer)',
              color: '#a1f0a6ff',
            },
            {
              id: 3,
              name: 'Charlie Brown (UX Designer)',
              color: '#e1a6f3ff',
            },
            {
              id: 4,
              name: 'Diana Lee (QA Engineer)',
              color: '#85b9e0ff',
            },
          ],
          data: [
            {
              start: 'dyndatetime(y,m,d-6,10)',
              end: 'dyndatetime(y,m,d-6,11,30)',
              title: 'One-on-One with Bob',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d-4,14)',
              end: 'dyndatetime(y,m,d-4,16)',
              title: 'Project Planning - Team Delta',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,11)',
              title: 'Kickoff with Client A',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Project Planning - Team Alpha',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+2,13)',
              end: 'dyndatetime(y,m,d+2,15)',
              title: 'Budget Review',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+3,14)',
              end: 'dyndatetime(y,m,d+3,16)',
              title: 'Design Review with Charlie',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+3,16,30)',
              end: 'dyndatetime(y,m,d+3,18,30)',
              title: 'Client B Progress Update',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+7,10)',
              end: 'dyndatetime(y,m,d+7,11,30)',
              title: 'Stakeholder Check-in',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d+9,18,30)',
              end: 'dyndatetime(y,m,d+9,20)',
              title: 'Late Client Call',
              resource: 1,
            },
            {
              start: 'dyndatetime(y,m,d-4,12)',
              end: 'dyndatetime(y,m,d-4,15)',
              title: 'Debugging Session',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+1,9)',
              end: 'dyndatetime(y,m,d+1,12)',
              title: 'Code Review - Feature X',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+2,11)',
              end: 'dyndatetime(y,m,d+2,14)',
              title: 'Database Optimization',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+3,8)',
              end: 'dyndatetime(y,m,d+3,10)',
              title: 'Pair Programming with Diana',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+3,17,30)',
              end: 'dyndatetime(y,m,d+3,20)',
              title: 'System Integration Testing',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+4,12)',
              end: 'dyndatetime(y,m,d+4,15)',
              title: 'Backend API Development',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+9,17)',
              end: 'dyndatetime(y,m,d+9,19)',
              title: 'Overtime Deployment',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d+10,12)',
              end: 'dyndatetime(y,m,d+10,15)',
              title: 'Code Walkthrough',
              resource: 2,
            },
            {
              start: 'dyndatetime(y,m,d,11)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'UI Mockups - Mobile App',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+2,8)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'UX Workshop',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+3,14)',
              end: 'dyndatetime(y,m,d+3,16)',
              title: 'Design Review with Alice',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+4,10)',
              end: 'dyndatetime(y,m,d+4,11,30)',
              title: 'Wireframe Feedback',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+4,13)',
              end: 'dyndatetime(y,m,d+4,15)',
              title: 'Prototype Testing',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d-7,8)',
              end: 'dyndatetime(y,m,d-7,10)',
              title: 'Creative Brainstorm',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+7,8)',
              end: 'dyndatetime(y,m,d+7,10)',
              title: 'UI Color Review',
              resource: 3,
            },
            {
              start: 'dyndatetime(y,m,d+8,16)',
              end: 'dyndatetime(y,m,d+8,18)',
              title: 'UX Report Prep',
              resource: 3,
            },

            {
              start: 'dyndatetime(y,m,d-7,11,30)',
              end: 'dyndatetime(y,m,d-7,13)',
              title: 'Lunch & Learn: Testing Tools',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d,9,30)',
              end: 'dyndatetime(y,m,d,11,30)',
              title: 'Test Case Writing',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+1,15)',
              end: 'dyndatetime(y,m,d+1,17)',
              title: 'Regression Testing',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+2,8)',
              end: 'dyndatetime(y,m,d+2,12)',
              title: 'Automation Setup',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+3,8)',
              end: 'dyndatetime(y,m,d+3,10)',
              title: 'Pair Programming with Bob',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+3,13)',
              end: 'dyndatetime(y,m,d+3,15)',
              title: 'Bug Triage',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+4,17,30)',
              end: 'dyndatetime(y,m,d+4,19)',
              title: 'Cross-Browser Testing',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+7,11,30)',
              end: 'dyndatetime(y,m,d+7,13)',
              title: 'Smoke Testing',
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+9,18)',
              end: 'dyndatetime(y,m,d+9,20)',
              title: 'Evening Regression Run',
              resource: 4,
            },
          ],
          invalid: [
            {
              recurring: { repeat: 'weekly', weekDays: 'FR' },
              resource: 1,
            },
            {
              recurring: { repeat: 'weekly', weekDays: 'MO' },
              resource: 2,
            },
            {
              recurring: { repeat: 'weekly', weekDays: 'TU,TH' },
              resource: 3,
            },
            {
              recurring: { repeat: 'weekly', weekDays: 'TH,FR' },
              resource: 4,
            },
            {
              start: 'dyndatetime(y,m,d+1)',
              end: 'dyndatetime(y,m,d+1)',
              allDay: true,
              resource: 1,
              title: 'Alice OFF',
            },
            {
              start: 'dyndatetime(y,m,d-2)',
              end: 'dyndatetime(y,m,d-2)',
              allDay: true,
              resource: 2,
              title: 'Bob OFF',
            },
            {
              start: 'dyndatetime(y,m,d-3)',
              end: 'dyndatetime(y,m,d-3)',
              allDay: true,
              resource: 3,
              title: 'Charlie OFF',
            },
            {
              start: 'dyndatetime(y,m,d+5)',
              end: 'dyndatetime(y,m,d+5)',
              allDay: true,
              resource: 4,
              title: 'Diana OFF',
            },
          ],
          height: 750,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-hide-non-working-resources"></div>
  `,
};
