import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      mobiscroll.momentTimezone.moment = moment;

      var calendarInst = $('#demo-showing-multiple-timezone')
        .mobiscroll()
        .eventcalendar({
          timezonePlugin: mobiscroll.momentTimezone,
          dataTimezone: 'utc',
          displayTimezone: 'America/New_York',
          view: {
            schedule: {
              type: 'week',
              timezones: [
                {
                  timezone: 'America/Los_Angeles',
                  label: 'LA (-3)',
                },
                {
                  timezone: 'America/Chicago',
                  label: 'CHI (-1)',
                },
                {
                  timezone: 'America/New_York',
                  label: 'PHI',
                },
              ],
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d-2,7)',
              end: 'dyndatetime(y,m,d-2,9)',
              title: 'Stakeholder mtg.',
              color: '#408cff',
            },
            {
              start: 'dyndatetime(y,m,d-1,18)',
              end: 'dyndatetime(y,m,d-1,19,30)',
              title: 'Wrapup mtg.',
              color: '#ecbc72',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Business of Software Conference',
              color: '#ff6d42',
            },
            {
              start: 'dyndatetime(y,m,d+1,20)',
              end: 'dyndatetime(y,m,d+1,21,50)',
              title: 'Product Team mtg.',
              color: '#913aa7',
            },
            {
              start: 'dyndatetime(y,m,d+2,13)',
              end: 'dyndatetime(y,m,d+2,15)',
              title: 'Decision Making mtg.',
              color: '#5bb7c5',
            },
            {
              start: 'dyndatetime(y,m,d+3,13)',
              end: 'dyndatetime(y,m,d+3,14)',
              title: 'Quick mtg. with Martin',
              color: '#fd002f',
            },
            {
              start: 'dyndatetime(y,m,d+4,12)',
              end: 'dyndatetime(y,m,d+4,16)',
              color: '#50b166',
              title: 'Team-Building',
            },
          ],
        })
        .mobiscroll('getInst');
    });
  },
  markup: `
<div id="demo-showing-multiple-timezone"></div>
  `,
};