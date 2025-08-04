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
      var weatherCache = {};
      var selectedDate = new Date();
      var selectedView = 'month';
      var formatDate = mobiscroll.formatDate;
      var myEvents = [
        {
          start: 'dyndatetime(y,m,d-1,15)',
          end: 'dyndatetime(y,m,d-1,17)',
          title: 'Operations Huddle',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: 'HR Policy Update',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Team Retrospective',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,11,30)',
          title: 'Proposal Review Meeting',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Solutions Presentation',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Follow-up Discussion',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Performance Review',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,d+1,10)',
          end: 'dyndatetime(y,m,d+1,13)',
          title: 'Client Onboarding',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,d+1,15)',
          end: 'dyndatetime(y,m,d+1,16)',
          title: 'Marketing Campaign Brainstorm',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,2,10)',
          end: 'dyndatetime(y,m,2,12)',
          title: 'Innovation Brainstorm',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,2,13)',
          end: 'dyndatetime(y,m,2,15,30)',
          title: 'Onboarding Session',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,2,16)',
          end: 'dyndatetime(y,m,2,17)',
          title: 'Discovery Call',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,9,9)',
          end: 'dyndatetime(y,m,9,10)',
          title: 'Partnership Exploration',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,9,11)',
          end: 'dyndatetime(y,m,9,13)',
          title: 'Service Implementation',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,9,14)',
          end: 'dyndatetime(y,m,9,15)',
          title: 'Future Planning Summit',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,15,10)',
          end: 'dyndatetime(y,m,15,12)',
          title: 'Strategy Alignment',
          type: 'meeting',
          color: '#634b67'
        },
        {
          start: 'dyndatetime(y,m,18,12)',
          end: 'dyndatetime(y,m,18,14)',
          title: 'Project Kick-off',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,18,15)',
          end: 'dyndatetime(y,m,18,16)',
          title: 'Account Review',
          type: 'appointment',
          color: '#656d49'
        },
        {
          start: 'dyndatetime(y,m,22,12)',
          end: 'dyndatetime(y,m,22,14)',
          title: 'Deep Dive Session',
          type: 'meeting',
          color: '#634b67'
        },
        {
          title: 'Fresh start meeting',
          start: '09:00',
          end: '10:00',
          type: 'meeting',
          color: '#634b67',
          recurring: {
            repeat: 'weekly',
            weekDays: 'MO',
          },
        },
        {
          title: 'Weekly wrapup',
          start: '16:00',
          end: '16:30',
          type: 'meeting',
          color: '#634b67',
          recurring: {
            repeat: 'weekly',
            weekDays: 'FR',
          },
        },
      ]

      function getWeatherForDate(date) {
        var key = formatDate('YYYY-MM-DD', date);
        if (!weatherCache[key]) {
          weatherCache[key] = generateRandomWeather(date);
        }
        return weatherCache[key];
      }

      function generateRandomWeather(date) {
        var weatherTypes = [
          { emoji: '☀️', min: 24, max: 30 },
          { emoji: '🌤️', min: 20, max: 25 },
          { emoji: '☁️', min: 17, max: 22 },
          { emoji: '🌧️', min: 15, max: 20 }
        ];
        var type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        var degree = Math.floor(Math.random() * (type.max - type.min + 1)) + type.min;

        return {
          date: date,
          degree: degree,
          emoji: type.emoji
        };
      }

      function getStressLevel(nrEvents) {
        var emoji;
        var color;

        if (nrEvents < 1) {
          emoji = '';
          color = '';
        }
        else if (nrEvents < 3) {
          emoji = '😃';
          color = '#6ece86ff';
        } else if (nrEvents < 5) {
          emoji = '😐';
          color = '#d89c6aff';
        } else {
          emoji = '😫';
          color = '#d6727aff';
        }
        return { emoji: emoji, color: color };
      }

      function getNrEvents(events) {
        var nrMeetings = 0;
        var nrAppointments = 0;

        for (var i = 0; i < events.length; i++) {
          var event = events[i];

          if (event.type === 'meeting') {
            nrMeetings++;
          } else {
            nrAppointments++;
          }
        }

        return { meetings: nrMeetings, appointments: nrAppointments }
      }

      var calendar = $('#demo-display-cell-template')
        .mobiscroll()
        .eventcalendar({
          data: myEvents,
          clickToCreate: true,
          dragToCreate: true,
          dragToMove: true,
          dragToResize: true,
          eventDelete: true,
          extendDefaultEvent: function () {
            return {
              title: 'New appointment',
              type: 'appointment',
              color: '#656d49'
            }
          },
          renderLabel: function () {
            return ''
          },
          renderDay: function (args) {
            var date = args.date;
            var nrEvents = getNrEvents(args.events);
            var nrAllEvents = args.events.length;
            var stressLevel = getStressLevel(nrAllEvents);
            var weather = getWeatherForDate(date);

            return selectedView !== 'day' || (selectedView === 'day' && date.getTime() === selectedDate.getTime()) ?
              ('<div class="mds-cell-template-cont" ' + (stressLevel.color && selectedView !== 'day' ? ('style="background:' + stressLevel.color) : '') + '">' +
                '<div class="mds-cell-template-day">' + formatDate('DDD DD, MMM', date) + ' ' + stressLevel.emoji + '</div>' +
                '<div>' + weather.emoji + ' ' + weather.degree + '°C</div>' +
                '<div class="mds-cell-template-info" style="color:#634b67">Internal meetings: ' + nrEvents.meetings + '</div>' +
                '<div class="mds-cell-template-info" style="color:#656d49">Client meetings: ' + nrEvents.appointments + '</div>' +
                (selectedView === 'month' ? ('<button data-date="' + formatDate('YYYY-MM-DD', date) + '" class="mds-add-appointment-btn" mbsc-button data-icon="plus"></button>') : '') +
                '</div>') : '';
          },
          renderHeader: function () {
            return ('<div mbsc-calendar-nav class="mds-cell-template-nav"></div>' +
              '<div class="mds-cell-template-view-switch">' +
              (selectedView === 'day' ? ('<button mbsc-button data-color="secondary" data-start-icon="close" class="mds-cell-template-back-btn">Back to calendar</button>') :
                ('<label>Calendar<input mbsc-segmented type="radio" name="mds-cell-tpl-view" value="month" class="mds-cell-template-view-change" checked></label>' +
                  '<label>Week view<input mbsc-segmented type="radio" name="mds-cell-tpl-view" value="week" class="mds-cell-template-view-change"></label>')) +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>')
          },
          onCellClick: function (args) {
            selectedDate = args.date;

            if (!args.domEvent.target.classList.contains('mbsc-button-icon')) {
              selectedView = 'day';
              calendar.setOptions({
                view: {
                  schedule: {
                    type: 'day',
                    startTime: '08:00',
                    endTime: '17:00',
                  },
                }
              });
            }
          }
        })
        .mobiscroll('getInst');

      $('.mds-cell-template-view-change').change(function (ev) {
        selectedView = ev.target.value;

        switch (ev.target.value) {
          case 'month':
            calendar.setOptions({
              view: {
                calendar: { type: 'month' },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              view: {
                schedule: {
                  type: 'week',
                  startTime: '08:00',
                  endTime: '17:00',
                },
              },
            });
            break;
        }
      });

      // Event delegation for dynamic button
      $('#demo-display-cell-template')
        .off('click', '.mds-add-appointment-btn')
        .on('click', '.mds-add-appointment-btn', function () {
          var d = new Date($(this).data('date'));
          var year = d.getFullYear();
          var month = d.getMonth();
          var day = d.getDate();

          var newEvent = {
            title: 'New appointment',
            start: new Date(year, month, day, 9),
            end: new Date(year, month, day, 10),
            color: '#ecee8d'
          };

          calendar.addEvent(newEvent);

          mobiscroll.toast({
            //<hidden>
            // theme,//</hidden>
            // context,
            message: 'Appointment added to ' + formatDate('DDD DD, MMM', d),
          });
        })
        .off('click', '.mds-cell-template-back-btn')
        .on('click', '.mds-cell-template-back-btn', function () {
          calendar.setOptions({
            view: {
              calendar: { type: 'month' },
            },
          });
          selectedView = 'month';
        })
        .off('click', '.mds-cell-template-cont')
        .on('click', '.mds-cell-template-cont', function () {
          if (selectedView === 'week') {
            selectedView = 'day';
            calendar.setOptions({
              view: {
                schedule: {
                  type: 'day',
                  startTime: '08:00',
                  endTime: '17:00',
                },
              }
            });
          }
        });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-display-cell-template" class="mds-cell-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-cell-template-cont {
  padding: 10px;
  text-align: left;
  line-height: 25px;
}
.mds-cell-template-day {
  font-weight: 600;
}
.mds-cell-template-info {
  font-weight: 600;
  font-size: 15px;
  color: #555;
}
.mds-add-appointment-btn.mbsc-button {
  position: absolute;
  bottom: 37px;
  right: 8px;
  font-size: 10px;
}
.mds-cell-template .mbsc-calendar-week-days {
  display: none;
}
.mds-cell-template .mbsc-calendar-cell-inner:after {
  bottom: 0;
  content: "";
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
}
.mds-cell-template .mbsc-hover .mbsc-calendar-cell-inner:after {
  background: rgba(51, 51, 51, .2);
}
.mbsc-calendar .mds-cell-template-view-switch .mbsc-segmented,
.mds-cell-template-back-btn.mbsc-button {
  max-width: 350px;
  margin: 0 auto;
  display: flex;
}
.mds-cell-template-nav {
  width: 200px;
}
.mds-cell-template-view-switch {
  flex: 1 0 auto;
}
.mds-cell-template .mbsc-schedule-all-day-cont {
  display: none;
}
.mds-cell-template .mbsc-calendar-day-outer {
  opacity: .7;
}
  `,
};
