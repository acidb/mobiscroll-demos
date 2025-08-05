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
      var $calendarElm = $('#demo-display-cell-template');
      var weatherCache = {};
      var selectedDate = new Date();
      var selectedView = 'month';
      var previousView = 'month';
      var formatDate = mobiscroll.formatDate;
      var myEvents = [
        {
          start: 'dyndatetime(y,m,d-1,15)',
          end: 'dyndatetime(y,m,d-1,17)',
          title: 'Operations Huddle',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d-1,12)',
          end: 'dyndatetime(y,m,d-1,13)',
          title: 'HR Policy Update',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Team Retrospective',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d,10)',
          end: 'dyndatetime(y,m,d,11,30)',
          title: 'Proposal Review Meeting',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d,12)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Solutions Presentation',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,15)',
          title: 'Follow-up Discussion',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,d,15)',
          end: 'dyndatetime(y,m,d,16)',
          title: 'Performance Review',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,d+1,10)',
          end: 'dyndatetime(y,m,d+1,13)',
          title: 'Client Onboarding',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,d+1,15)',
          end: 'dyndatetime(y,m,d+1,16)',
          title: 'Marketing Campaign Brainstorm',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,2,10)',
          end: 'dyndatetime(y,m,2,12)',
          title: 'Innovation Brainstorm',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,2,13)',
          end: 'dyndatetime(y,m,2,15,30)',
          title: 'Onboarding Session',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,2,16)',
          end: 'dyndatetime(y,m,2,17)',
          title: 'Discovery Call',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,9,9)',
          end: 'dyndatetime(y,m,9,10)',
          title: 'Partnership Exploration',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,9,11)',
          end: 'dyndatetime(y,m,9,13)',
          title: 'Service Implementation',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,9,14)',
          end: 'dyndatetime(y,m,9,15)',
          title: 'Future Planning Summit',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,15,10)',
          end: 'dyndatetime(y,m,15,12)',
          title: 'Strategy Alignment',
          type: 'meeting',
          color: '#634b67',
        },
        {
          start: 'dyndatetime(y,m,18,12)',
          end: 'dyndatetime(y,m,18,14)',
          title: 'Project Kick-off',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,18,15)',
          end: 'dyndatetime(y,m,18,16)',
          title: 'Account Review',
          type: 'appointment',
          color: '#656d49',
        },
        {
          start: 'dyndatetime(y,m,22,12)',
          end: 'dyndatetime(y,m,22,14)',
          title: 'Deep Dive Session',
          type: 'meeting',
          color: '#634b67',
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
      ];

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
          { emoji: '🌧️', min: 15, max: 20 },
        ];
        var type = weatherTypes[Math.floor(Math.random() * weatherTypes.length)];
        var degree = Math.floor(Math.random() * (type.max - type.min + 1)) + type.min;

        return {
          date: date,
          degree: degree,
          emoji: type.emoji,
        };
      }

      function getStressLevel(nrEvents) {
        var emoji;
        var color;

        if (nrEvents < 1) {
          emoji = '';
          color = '';
        } else if (nrEvents < 3) {
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

        return { meetings: nrMeetings, appointments: nrAppointments };
      }

      function setSelectedView(view) {
        previousView = selectedView;
        selectedView = view;

        switch (view) {
          case 'month':
            calendar.setOptions({
              cssClass: 'mds-cell-template mds-cell-template-month-view',
              view: {
                calendar: { type: 'month' },
              },
            });
            break;
          case 'week':
            calendar.setOptions({
              cssClass: 'mds-cell-template mds-cell-template-week-view',
              view: {
                schedule: {
                  type: 'week',
                  startTime: '08:00',
                  endTime: '17:00',
                },
              },
            });
            break;
          case 'day':
            calendar.setOptions({
              cssClass: 'mds-cell-template mds-cell-template-day-view',
              view: {
                schedule: {
                  type: 'day',
                  startTime: '08:00',
                  endTime: '17:00',
                },
              },
            });
            break;
        }
      }
      var calendar = $calendarElm
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
              color: '#656d49',
            };
          },
          onSelectedDateChange: function (args) {
            selectedDate = args.date;
          },
          onPageChange: function (args) {
            selectedDate = args.firstDay;
          },
          renderLabel: function () {
            return '';
          },
          renderDay: function (args) {
            var date = args.date;
            var nrEvents = getNrEvents(args.events);
            var nrAllEvents = args.events.length;
            var stressLevel = getStressLevel(nrAllEvents);
            var weather = getWeatherForDate(date);

            return (
              '<div class="mds-cell-template-cont ' +
              (selectedView === 'day' && date.getTime() === selectedDate.getTime() ? 'mds-cell-template-selected-day' : '') +
              '" ' +
              (selectedView === 'week' ? 'data-date="' + date.getTime() + '"' : '') +
              (stressLevel.color && selectedView !== 'day' ? 'style="background:' + stressLevel.color : '') +
              '">' +
              '<div class="mds-cell-template-day">' +
              formatDate('DDD DD, MMM', date) +
              ' ' +
              stressLevel.emoji +
              '</div>' +
              '<div>' +
              weather.emoji +
              ' ' +
              weather.degree +
              '°C</div>' +
              '<div class="mds-cell-template-info" style="color:#634b67">Internal mtgs: ' +
              nrEvents.meetings +
              '</div>' +
              '<div class="mds-cell-template-info" style="color:#656d49">Client mtgs: ' +
              nrEvents.appointments +
              '</div>' +
              '<button class="mds-add-appointment-btn" mbsc-button data-icon="plus"></button>' +
              '</div>'
            );
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav class="mds-cell-template-nav"></div>' +
              '<div class="mds-cell-template-view-switch">' +
              '<button mbsc-button data-color="secondary" data-start-icon="close" class="mds-cell-template-back-btn">Back to calendar</button>' +
              '<div class="mds-cell-template-view-change">' +
              '<label>Calendar<input mbsc-segmented type="radio" name="mds-cell-tpl-view" value="month" class="mds-cell-template-view-change" checked></label>' +
              '<label>Week view<input mbsc-segmented type="radio" name="mds-cell-tpl-view" value="week" class="mds-cell-template-view-change"></label>' +
              '</div></div>' +
              '<button mbsc-calendar-prev></button>' +
              '<button mbsc-calendar-today></button>' +
              '<button mbsc-calendar-next></button>'
            );
          },
          onCellClick: function (args) {
            selectedDate = args.date;

            if (args.domEvent.target.classList.contains('mbsc-button-icon')) {
              var year = selectedDate.getFullYear();
              var month = selectedDate.getMonth();
              var day = selectedDate.getDate();

              var newEvent = {
                title: 'New appointment',
                start: new Date(year, month, day, 9),
                end: new Date(year, month, day, 10),
                color: '#ecee8d',
              };

              calendar.addEvent(newEvent);

              mobiscroll.toast({
                //<hidden>
                // theme,//</hidden>
                // context,
                message: 'Appointment added to ' + formatDate('DDD DD, MMM', selectedDate),
              });
            } else {
              setSelectedView('day');
            }
          },
        })
        .mobiscroll('getInst');

      // Event delegation for dynamic button
      $calendarElm
        .on('click', '.mds-cell-template-back-btn', function () {
          setSelectedView(previousView);
        })
        .on('click', '.mds-cell-template-cont', function (ev) {
          if (selectedView === 'week') {
            selectedDate = new Date($(ev.currentTarget).data('date'));
            setSelectedView('day');
            calendar.setOptions({ selectedDate: selectedDate });
          }
        })
        .on('change', '.mds-cell-template-view-change', function (ev) {
          setSelectedView(ev.target.value);
        });

      // Set initial view
      setSelectedView('month');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-display-cell-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-cell-template-cont {
  padding: 10px;
  text-align: left;
  line-height: 25px;
  position: absolute;
  inset: -1px;
  overflow: hidden;
}
.mbsc-windows.mds-cell-template-month-view .mds-cell-template-cont {
  inset: -2px -1px;
}
.mds-cell-template .mbsc-schedule-header-item {
  min-height: 120px;
  white-space: nowrap;
}
.mds-cell-template-day {
  font-weight: 600;
}
.mds-cell-template-info {
  font-weight: 600;
  font-size: 15px;
  color: #555;
}
.mbsc-calendar-width-sm .mds-cell-template-cont {
  font-size: 14px;
}
.mbsc-calendar-width-sm .mds-cell-template-info {
  font-size: 12px;
}
.mds-add-appointment-btn.mbsc-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
}
.mds-cell-template .mbsc-calendar-cell {
  min-height: 120px;
}
.mds-cell-template .mbsc-calendar-week-days,
.mds-cell-template .mbsc-schedule-all-day-cont {
  display: none;
}
.mds-cell-template .mbsc-calendar-cell-inner:after,
.mds-cell-template-week-view .mds-cell-template-cont:after {
  bottom: 0;
  content: "";
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  inset: -1px;
  transition: background 0.15s ease-in-out;
}
.mds-cell-template .mbsc-hover .mbsc-calendar-cell-inner:after,
.mds-cell-template-week-view .mds-cell-template-cont:hover:after {
  background: rgba(51, 51, 51, .2);
}
.mds-cell-template .mbsc-calendar-day-outer {
  opacity: .7;
}
.mbsc-calendar .mds-cell-template-view-switch .mbsc-segmented {
  max-width: 350px;
  margin: 0 auto;
  display: flex;
}
.mbsc-calendar .mds-cell-template-view-switch .mbsc-segmented.mbsc-material,
.mbsc-calendar .mds-cell-template-view-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}
.mds-cell-template-back-btn.mbsc-button {
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  display: flex;
}
.mds-cell-template-back-btn.mbsc-button.mbsc-ios {
  height: 32px;
  font-size: 13px;
}
.mds-cell-template-nav {
  width: 200px;
}
.mds-cell-template-view-switch {
  flex: 1 0 auto;
}
.mds-cell-template-month-view .mds-cell-template-back-btn,
.mds-cell-template-week-view .mds-cell-template-back-btn,
.mds-cell-template-week-view .mds-add-appointment-btn,
.mds-cell-template-day-view .mds-add-appointment-btn,
.mds-cell-template-day-view .mbsc-schedule-header-item:not(.mbsc-selected),
.mds-cell-template-day-view .mds-cell-template-view-change,
.mds-cell-template .mbsc-calendar-labels {
  display: none;
}
.mds-cell-template-day-view .mds-cell-template-selected-day {
  text-align: center; 
}
/* This should be set from the demo page */
.demo-placeholder .mbsc-eventcalendar.mds-cell-template {
  max-height: 800px;
}
  `,
};
