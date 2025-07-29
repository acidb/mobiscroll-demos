import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme,
    });

    $(function () {
      var weather = [{
        date: 'dyndatetime(y,m,1)',
        degree: 20,
        emoji: '☁️'
      }, {
        date: 'dyndatetime(y,m,2)',
        degree: 21,
        emoji: '☁️'
      }, {
        date: 'dyndatetime(y,m,3)',
        degree: 21,
        emoji: '🌤️'
      }, {
        date: 'dyndatetime(y,m,4)',
        degree: 22,
        emoji: '🌤️'
      }, {
        date: 'dyndatetime(y,m,5)',
        degree: 24,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,6)',
        degree: 26,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,7)',
        degree: 25,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,8)',
        degree: 22,
        emoji: '🌤️'
      }, {
        date: 'dyndatetime(y,m,9)',
        degree: 20,
        emoji: '☁️'
      }, {
        date: 'dyndatetime(y,m,10)',
        degree: 18,
        emoji: '🌧️'
      }, {
        date: 'dyndatetime(y,m,11)',
        degree: 20,
        emoji: '🌧️'
      }, {
        date: 'dyndatetime(y,m,12)',
        degree: 20,
        emoji: '🌧️'
      }, {
        date: 'dyndatetime(y,m,13)',
        degree: 21,
        emoji: '🌤️'
      }, {
        date: 'dyndatetime(y,m,14)',
        degree: 23,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,15)',
        degree: 23,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,16)',
        degree: 24,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,17)',
        degree: 25,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,18)',
        degree: 25,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,19)',
        degree: 25,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,20)',
        degree: 26,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,21)',
        degree: 28,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,22)',
        degree: 29,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,23)',
        degree: 27,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,24)',
        degree: 25,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,25)',
        degree: 25,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,26)',
        degree: 24,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,27)',
        degree: 23,
        emoji: '☀️'
      }, {
        date: 'dyndatetime(y,m,28)',
        degree: 22,
        emoji: '🌤️'
      }, {
        date: 'dyndatetime(y,m,29)',
        degree: 20,
        emoji: '☁️'
      }, {
        date: 'dyndatetime(y,m,30)',
        degree: 20,
        emoji: '☁️'
      }, {
        date: 'dyndatetime(y,m,31)',
        degree: 19,
        emoji: '🌧️'
      }];

      var myEvents = [
        {
          start: 'dyndatetime(y,m,2,10)',
          end: 'dyndatetime(y,m,2,12)',
          title: 'Innovation Brainstorm',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          start: 'dyndatetime(y,m,2,13)',
          end: 'dyndatetime(y,m,2,15,30)',
          title: 'Onboarding Session',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,2,16)',
          end: 'dyndatetime(y,m,2,17)',
          title: 'Discovery Call',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,9,9)',
          end: 'dyndatetime(y,m,9,10)',
          title: 'Partnership Exploration',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,9,11)',
          end: 'dyndatetime(y,m,9,13)',
          title: 'Service Implementation',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,9,14)',
          end: 'dyndatetime(y,m,9,15)',
          title: 'Future Planning Summit',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          start: 'dyndatetime(y,m,15,10)',
          end: 'dyndatetime(y,m,15,12)',
          title: 'Strategy Alignment',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          start: 'dyndatetime(y,m,17,8)',
          end: 'dyndatetime(y,m,17,10)',
          title: 'Team Retrospective',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          start: 'dyndatetime(y,m,17,10)',
          end: 'dyndatetime(y,m,17,11,30)',
          title: 'Proposal Review Meeting',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          start: 'dyndatetime(y,m,17,12)',
          end: 'dyndatetime(y,m,17,13)',
          title: 'Solutions Presentation',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,17,14)',
          end: 'dyndatetime(y,m,17,15)',
          title: 'Follow-up Discussion',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,17,15)',
          end: 'dyndatetime(y,m,17,16)',
          title: 'Performance Review',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          start: 'dyndatetime(y,m,18,12)',
          end: 'dyndatetime(y,m,18,14)',
          title: 'Project Kick-off',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,18,15)',
          end: 'dyndatetime(y,m,18,16)',
          title: 'Account Review',
          type: 'appointment',
          color: '#ecee8d'
        },
        {
          start: 'dyndatetime(y,m,22,12)',
          end: 'dyndatetime(y,m,22,14)',
          title: 'Deep Dive Session',
          type: 'meeting',
          color: '#dea9e6'
        },
        {
          title: 'Fresh start meeting',
          start: '09:00',
          end: '10:00',
          type: 'meeting',
          color: '#dea9e6',
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
          color: '#dea9e6',
          recurring: {
            repeat: 'weekly',
            weekDays: 'FR',
          },
        },

      ]

      function getWeatherIcon(date) {
        var weatherInfo = weather.find(function (w) {
          return new Date(w.date).getTime() === new Date(date).getTime();
        });
        return weatherInfo ? weatherInfo.emoji + ' ' + weatherInfo.degree + '°C' : '-';
      }

      function getStressLevel(nrEvents) {
        var emoji;
        var color;

        if (nrEvents < 1) {
          emoji = '😃';
          color = '';
        }
        else if (nrEvents < 3) {
          emoji = '😃';
          color = '#28A745 ';
        } else if (nrEvents < 5) {
          emoji = '😐';
          color = '#FD7E14 ';
        } else {
          emoji = '😫';
          color = '#DC3545 ';
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
          renderDay: function (args) {
            var date = args.date;
            var nrEvents = getNrEvents(args.events);
            var nrAllEvents = args.events.length;
            return '<div class="md-cell-template" style="background:' + getStressLevel(nrAllEvents).color + ';">' +
              '<div class="md-cell-template-day">' + mobiscroll.formatDate('DDD DD', date) + ' ' + getStressLevel(nrAllEvents).emoji + '</div>' +
              '<div>' + getWeatherIcon(date) + '</div>' +
              '<div class="md-cell-template-info">Meetings: ' + nrEvents.meetings + '</div>' +
              '<div class="md-cell-template-info">Clients: ' + nrEvents.appointments + '</div>' +
              '<button data-date="' + mobiscroll.formatDate('YYYY-MM-DD', date) + '" class="md-add-appointment-btn" mbsc-button data-icon="plus"></button>' +
              '</div>'
          },
          renderHeader: function () {
            return (
              '<div mbsc-calendar-nav></div>' +
              '<div class="md-cell-template-view-switch">' +
              '<label>Month view<input mbsc-segmented type="radio" name="md-cell-tpl-view" value="month" class="md-cell-template-view-change" checked></label>' +
              '<label>Week view<input mbsc-segmented type="radio" name="md-cell-tpl-view" value="week" class="md-cell-template-view-change"></label>' +
              '</div>' +
              '<div mbsc-calendar-prev></div>' +
              '<div mbsc-calendar-today></div>' +
              '<div mbsc-calendar-next></div>'
            );
          },
          onCellClick: function (args) {
            var d = args.date;
            var year = d.getFullYear();
            var month = d.getMonth();
            var day = d.getDate();

            if (!args.domEvent.target.classList.contains('mbsc-button-icon')) {
              calendar.setOptions({
                view: {
                  schedule: { type: 'week' },
                },
                colors: [{
                  start: new Date(year, month, day, 0, 0),
                  end: new Date(year, month, day, 23, 59),
                  background: '#e2f8ff'
                }]
              });
              $('.md-cell-template-view-change[value="week"]').mobiscroll('getInst').checked = true;
            }
          }
        })
        .mobiscroll('getInst');

      $('#demo-display-cell-template').on('click', '.md-add-appointment-btn', function () {
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
          message: 'Appoitment added',
        });
      });

      $('.md-cell-template-view-change').change(function (ev) {
        switch (ev.target.value) {
          case 'month':
            calendar.setOptions({
              view: {
                calendar: { type: 'month' },
              },
              colors: []
            });
            break;
          case 'week':
            calendar.setOptions({
              view: {
                schedule: { type: 'week' },
              }
            });
            break;
        }
      });


    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-display-cell-template" class="md-cell-template"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-cell-template {
  padding:10px;
  text-align:left;
  line-height: 25px;
}
.md-cell-template-day {
  font-weight: 600;
}
.md-cell-template-info {
  font-weight: 600;
  font-size: 15px;
  color: #555;
}
.md-add-appointment-btn {
  position: absolute;
  bottom: 28px;
  right: 6px;
}
.md-cell-template .mbsc-calendar-week-days {
  display: none;
}
.mbsc-calendar .md-cell-template-view-switch .mbsc-segmented {
  max-width: 200px;
  margin: 0 auto;
}
.md-cell-template-view-switch {
  flex: 1 0 auto;
}
.md-cell-template .mbsc-schedule-all-day-cont {
  display: none;
}
  `,
};
