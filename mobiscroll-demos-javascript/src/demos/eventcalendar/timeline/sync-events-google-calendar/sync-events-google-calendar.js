import { googleCalendarSync as googleSync } from '@mobiscroll/calendar-integration';
import * as m from '@mobiscroll/javascript';

var mobiscroll = Object.assign({}, m);
mobiscroll.googleCalendarSync = googleSync;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var googleCalendarSync = mobiscroll.googleCalendarSync;

    var calendarElm = document.getElementById('demo-sync-events-google-calendar');
    var popupElm = document.getElementById('demo-sync-events-google-calendar-popup');
    var editButton = document.getElementById('demo-google-cal-edit');

    var startDate;
    var endDate;
    var calendarIds = [];
    var events = [];
    var readonlyCals = [];
    var debounce;
    var calendarData = {};

    function toggleContainers(loggedIn) {
      var loggedOutCont = document.getElementById('google-cal-sign-in');
      var loggedInCont = document.getElementById('google-cal-get-calendars');

      if (loggedIn) {
        loggedOutCont.style.display = 'none';
        loggedInCont.style.display = 'block';
      } else {
        loggedInCont.style.display = 'none';
        loggedOutCont.style.display = 'block';
      }
    }

    function loadEvents(checked, calendarId) {
      if (checked) {
        loadingEvents(true);
        calendarIds.push(calendarId);
        googleCalendarSync
          .getEvents([calendarId], startDate, endDate)
          .then(function (resp) {
            var newResource = calendarData[calendarId];
            var newResources = inst.s.resources.slice();
            newResources.push({ id: calendarId, name: newResource.name, color: newResource.color });
            loadingEvents(false);
            resp.forEach(function (event) {
              event.resource = event.googleCalendarId;
            });
            events = events.concat(resp);
            inst.setOptions({ resources: newResources, data: events });
          })
          .catch(onError);
      } else {
        var index = calendarIds.indexOf(calendarId);
        var newResources = inst.s.resources.slice();
        newResources = newResources.filter(function (c) {
          return c.id !== calendarId;
        });
        inst.setOptions({ resources: newResources });
        if (index !== -1) {
          calendarIds.splice(index, 1);
        }
        events = events.filter(function (event) {
          return event.googleCalendarId !== calendarId;
        });
        inst.setEvents(events);
      }
    }

    function loadingEvents(show) {
      if (show) {
        calendarElm.classList.add('md-loading-events');
      } else {
        calendarElm.classList.remove('md-loading-events');
      }
    }

    function onError(resp) {
      mobiscroll.toast({
        message: resp.error ? resp.error : resp.result.error.message,
      });
    }

    function onSignedIn() {
      toggleContainers(true);

      googleCalendarSync
        .getCalendars()
        .then(function (calendars) {
          var myResources = [];
          var calList = '';

          calendars.sort(function (c) {
            return c.primary ? -1 : 1;
          });

          for (var i = 0; i < calendars.length; ++i) {
            var c = calendars[i];
            calList +=
              '<label>' +
              '<input mbsc-switch value="' +
              c.id +
              '" data-label="' +
              c.summary +
              '" type="checkbox" class="google-calendar-switch" checked />' +
              '</label>';

            calendarIds.push(c.id);
            myResources.push({ id: c.id, name: c.summary, color: c.backgroundColor });
            calendarData[c.id] = { name: c.summary, color: c.backgroundColor };

            if (!(c.accessRole === 'writer' || c.accessRole === 'owner')) {
              readonlyCals.push(c.id);
            }
          }

          inst.setOptions({
            resources: myResources,
            invalid: [
              {
                recurring: {
                  repeat: 'daily',
                },
                resource: readonlyCals,
              },
            ],
          });

          var calendarList = document.getElementById('google-cal-list');
          calendarList.innerHTML = calList;

          loadingEvents(true);

          googleCalendarSync
            .getEvents(calendarIds, startDate, endDate)
            .then(function (resp) {
              loadingEvents(false);
              resp.forEach(function (event) {
                event.resource = event.googleCalendarId;
              });
              events = resp;
              inst.setEvents(events);
            })
            .catch(onError);

          mobiscroll.enhance(calendarList);
        })
        .catch(onError);
    }

    function onSignedOut() {
      toggleContainers(false);
      popup.close();
      calendarIds = [];
      calendarData = [];
      events = [];
      readonlyCals = [];
      inst.setOptions({ resources: undefined, invalid: undefined, data: [] });
    }

    var inst = mobiscroll.eventcalendar('#demo-sync-events-google-calendar', {
      view: {
        timeline: {
          type: 'week',
          eventList: true,
        },
      },
      exclusiveEndDates: true,
      clickToCreate: false,
      dragToCreate: false,
      dragToMove: false,
      dragToResize: false,
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav class="md-sync-events-google-nav"></div>' +
          '<div class="md-spinner">' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '<div class="md-spinner-blade"></div>' +
          '</div>' +
          '<div class="md-google-calendar-buttons">' +
          '<button mbsc-button id="google-cal-sign-in" class="md-sync-events-google-button">Sync my google calendars</button>' +
          '<button mbsc-button id="google-cal-get-calendars" style="display:none" class="md-sync-events-google-button">My Calendars</button>' +
          '<button mbsc-button id="google-cal-today">Today</button></div>' +
          '<button mbsc-calendar-prev></button>' +
          '<button mbsc-calendar-next></button>' +
          '</div>'
        );
      },
      onPageLoading: function (args) {
        startDate = args.viewStart;
        endDate = args.viewEnd;
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          if (googleCalendarSync.isSignedIn()) {
            loadingEvents(true);
            googleCalendarSync
              .getEvents(calendarIds, startDate, endDate)
              .then(function (resp) {
                loadingEvents(false);
                resp.forEach(function (event) {
                  event.resource = event.googleCalendarId;
                });
                events = resp;
                inst.setEvents(events);
              })
              .catch(onError);
          }
        }, 200);
      },
      onEventCreate: function (args) {
        if (googleCalendarSync.isSignedIn()) {
          var event = args.event;
          var calendarId = event.resource;
          if (readonlyCals.indexOf(calendarId) !== -1) {
            mobiscroll.toast({
              message: 'This calendar is readonly',
            });
          } else {
            googleCalendarSync
              .addEvent(calendarId, event)
              .then(function (resp) {
                inst.removeEvent(event);
                resp.resource = event.resource;
                inst.addEvent(resp);
                events.push(resp);
                mobiscroll.toast({
                  message: 'Event created on "' + calendarData[calendarId].name + '" calendar',
                });
              })
              .catch(function (error) {
                inst.removeEvent(args.event);
                onError(error);
              });
          }
        }
      },
      onEventUpdate: function (args) {
        if (googleCalendarSync.isSignedIn()) {
          mobiscroll
            .confirm({
              title: 'Are you sure you want to update this event?',
              message: 'This action will affect your Google Calendar event.',
              okText: 'Update',
            })
            .then(function (result) {
              if (result) {
                var event = args.event;
                var calendarId = event.googleCalendarId;
                googleCalendarSync
                  .updateEvent(calendarId, event)
                  .then(function () {
                    mobiscroll.toast({
                      message: 'Event updated on "' + calendarData[calendarId].name + '" calendar',
                    });
                  })
                  .catch(function (error) {
                    inst.updateEvent(args.oldEvent);
                    onError(error);
                  });
              } else {
                inst.updateEvent(args.oldEvent);
              }
            });
        }
      },
      onEventDelete: function (args) {
        if (googleCalendarSync.isSignedIn()) {
          mobiscroll
            .confirm({
              title: 'Are you sure you want to delete this event?',
              message: 'This action will remove the event from your Google Calendar as well.',
              okText: 'Delete',
            })
            .then(function (result) {
              if (result) {
                var event = args.event;
                var calendarId = event.googleCalendarId;
                googleCalendarSync
                  .deleteEvent(calendarId, event)
                  .then(function () {
                    inst.removeEvent(event);
                    events = events.filter(function (ev) {
                      return event.id !== ev.id;
                    });
                    mobiscroll.toast({
                      message: 'Event deleted from "' + calendarData[calendarId].name + '" calendar',
                    });
                  })
                  .catch(onError);
              }
            });
        }
        return false;
      },
    });

    var popup = mobiscroll.popup('#demo-sync-events-google-calendar-popup', {
      anchor: document.getElementById('google-cal-get-calendars'),
      width: 400,
      touchUi: false,
      showOverlay: false,
      scrollLock: false,
      contentPadding: false,
      display: 'anchored',
    });

    // Sign in
    calendarElm.addEventListener('click', function (ev) {
      if (ev.target.id === 'google-cal-sign-in') {
        if (!googleCalendarSync.isSignedIn()) {
          googleCalendarSync.signIn().catch(onError);
        }
      } else if (ev.target.id === 'google-cal-today') {
        inst.navigate(new Date());
      } else if (ev.target.id === 'google-cal-get-calendars') {
        popup.open();
      }
    });

    // Switch click
    popupElm.addEventListener('change', function (ev) {
      if (ev.target.classList.contains('google-calendar-switch')) {
        loadEvents(ev.target.checked, ev.target.value);
      }
    });

    // Edit click
    editButton.addEventListener('change', function (ev) {
      var isEditable = ev.target.checked;
      inst.setOptions({
        clickToCreate: isEditable,
        dragToCreate: isEditable,
        dragToMove: isEditable,
        dragToResize: isEditable,
      });
    });

    // Sign out
    popupElm.addEventListener('click', function (ev) {
      if (ev.target.id === 'google-cal-sign-in') {
        googleCalendarSync.signOut().catch(onError);
      }
    });

    // Init google client
    googleCalendarSync.init({
      apiKey: '<YOUR_GOOGLE_API_KEY>',
      clientId: '<YOUR_GOOGLE_CLIENT_ID>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-sync-events-google-calendar"></div>

<div id="demo-sync-events-google-calendar-popup">

    <div class="mbsc-form-group-inset mbsc-align-center">
        <p class="mbsc-italic mbsc-txt-muted">Editing events sync back to your calendar when enabled. You'll be asked for confirmation on every action.</p>
    </div>
    <div class="mbsc-form-group-inset">
        <label>
            <input id="demo-google-cal-edit" mbsc-switch data-label="Enable editing" />
        </label>
    </div>

    <div class="mbsc-form-group-inset md-sync-events-google-inset">
        <div class="mbsc-form-group-title">My calendars</div>
        <div id="google-cal-list"></div>
    </div>
    <div class="mbsc-form-group-inset">
        <button mbsc-button id="google-cal-sign-out" class="md-sync-events-google-button mbsc-button-block">Log out of my account</button>
    </div>

</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-google-calendar-buttons {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
}

.md-sync-events-google-calendar {
    border-left: 1px solid #ccc;
}

.md-google-calendar-header {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
}

.md-sync-events-google-nav {
    justify-content: flex-start;
}

.md-sync-events-google-button.mbsc-button {
    text-transform: capitalize;
}

.md-sync-events-google-inset {
    margin-bottom: 0;
}

/* loading spinner and overlay */

.md-loading-events .md-sync-events-overlay {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
}

.md-spinner {
    visibility: hidden;
    position: relative;
    width: 20px;
    height: 20px;
}

.md-loading-events .md-spinner {
    visibility: visible;
}

.md-spinner .md-spinner-blade {
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 10%;
    height: 25%;
    border-radius: 50%/20%;
    background-color: #8C8C8C;
    -webkit-animation: md-spinner-fade 1s linear infinite;
    animation: md-spinner-fade 1s linear infinite;
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
}

.md-spinner .md-spinner-blade:nth-child(1) {
    -webkit-animation-delay: -1.66667s;
    animation-delay: -1.66667s;
    -webkit-transform: rotate(30deg) translate(0, -150%);
    transform: rotate(30deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(2) {
    -webkit-animation-delay: -1.58333s;
    animation-delay: -1.58333s;
    -webkit-transform: rotate(60deg) translate(0, -150%);
    transform: rotate(60deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(3) {
    -webkit-animation-delay: -1.5s;
    animation-delay: -1.5s;
    -webkit-transform: rotate(90deg) translate(0, -150%);
    transform: rotate(90deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(4) {
    -webkit-animation-delay: -1.41667s;
    animation-delay: -1.41667s;
    -webkit-transform: rotate(120deg) translate(0, -150%);
    transform: rotate(120deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(5) {
    -webkit-animation-delay: -1.33333s;
    animation-delay: -1.33333s;
    -webkit-transform: rotate(150deg) translate(0, -150%);
    transform: rotate(150deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(6) {
    -webkit-animation-delay: -1.25s;
    animation-delay: -1.25s;
    -webkit-transform: rotate(180deg) translate(0, -150%);
    transform: rotate(180deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(7) {
    -webkit-animation-delay: -1.16667s;
    animation-delay: -1.16667s;
    -webkit-transform: rotate(210deg) translate(0, -150%);
    transform: rotate(210deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(8) {
    -webkit-animation-delay: -1.08333s;
    animation-delay: -1.08333s;
    -webkit-transform: rotate(240deg) translate(0, -150%);
    transform: rotate(240deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(9) {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
    -webkit-transform: rotate(270deg) translate(0, -150%);
    transform: rotate(270deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(10) {
    -webkit-animation-delay: -0.91667s;
    animation-delay: -0.91667s;
    -webkit-transform: rotate(300deg) translate(0, -150%);
    transform: rotate(300deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(11) {
    -webkit-animation-delay: -0.83333s;
    animation-delay: -0.83333s;
    -webkit-transform: rotate(330deg) translate(0, -150%);
    transform: rotate(330deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(12) {
    -webkit-animation-delay: -0.75s;
    animation-delay: -0.75s;
    -webkit-transform: rotate(360deg) translate(0, -150%);
    transform: rotate(360deg) translate(0, -150%);
}

.md-loading-events .md-spinner-blade {
    -webkit-animation-play-state: running;
    animation-play-state: running;
}

@-webkit-keyframes md-spinner-fade {
    0% {
        opacity: 0.85;
    }
    50% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}

@keyframes md-spinner-fade {
    0% {
        opacity: 0.85;
    }
    50% {
        opacity: 0.25;
    }
    100% {
        opacity: 0.25;
    }
}
  `,
};
