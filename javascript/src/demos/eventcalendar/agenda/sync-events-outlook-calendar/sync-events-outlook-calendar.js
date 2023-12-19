import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';
import { outlookCalendarSync as outlookSync } from '@mobiscroll/calendar-integration';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var outlookCalendarSync = outlookSync;

    var calendarElm = document.getElementById('demo-sync-events-outlook-calendar');
    var popupElm = document.getElementById('demo-sync-events-outlook-calendar-popup');

    var startDate;
    var endDate;
    var calendarIds = [];
    var events = [];
    var debounce;

    function toggleContainers(loggedIn) {
      var loggedOutCont = document.getElementById('outlook-cal-sign-in');
      var loggedInCont = document.getElementById('outlook-cal-get-calendars');

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
        outlookCalendarSync
          .getEvents([calendarId], startDate, endDate)
          .then(function (resp) {
            var newEvents = resp;
            loadingEvents(false);
            events = events.concat(newEvents);
            inst.setEvents(events);
          })
          .catch(onError);
      } else {
        var index = calendarIds.indexOf(calendarId);
        if (index !== -1) {
          calendarIds.splice(index, 1);
        }
        events = events.filter(function (event) {
          return event.outlookCalendarId !== calendarId;
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

    function onSignedIn() {
      toggleContainers(true);
      outlookCalendarSync
        .getCalendars()
        .then(function (calendars) {
          var calList = '';

          calendars.sort(function (c) {
            return c.isDefaultCalendar ? -1 : 1;
          });

          for (var i = 0; i < calendars.length; ++i) {
            var c = calendars[i];
            calList +=
              '<label>' +
              '<input mbsc-switch value="' +
              c.id +
              '" data-label="' +
              c.name +
              '" type="checkbox" class="outlook-calendar-switch" checked />' +
              '</label>';

            calendarIds.push(c.id);
          }

          var calendarList = document.getElementById('outlook-cal-list');
          calendarList.innerHTML = calList;

          loadingEvents(true);

          outlookCalendarSync
            .getEvents(calendarIds, startDate, endDate)
            .then(function (resp) {
              var newEvents = resp;
              loadingEvents(false);
              events = newEvents;
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
      events = [];
      inst.setEvents([]);
    }

    function onError(resp) {
      mobiscroll.toast({
        message: resp.message,
      });
    }

    var inst = mobiscroll.eventcalendar('#demo-sync-events-outlook-calendar', {
      view: {
        agenda: { type: 'month' },
      },
      exclusiveEndDates: true,
      clickToCreate: false,
      dragToCreate: false,
      dragToMove: false,
      dragToResize: false,
      onPageLoading: function (args) {
        startDate = args.viewStart;
        endDate = args.viewEnd;
        clearTimeout(debounce);
        debounce = setTimeout(function () {
          if (outlookCalendarSync.isSignedIn()) {
            loadingEvents(true);
            outlookCalendarSync
              .getEvents(calendarIds, startDate, endDate)
              .then(function (resp) {
                loadingEvents(false);
                events = resp;
                inst.setEvents(events);
              })
              .catch(onError);
          }
        }, 200);
      },
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav class="md-sync-events-outlook-nav"></div>' +
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
          '<div class="md-outlook-calendar-buttons">' +
          '<button mbsc-button id="outlook-cal-sign-in" class="md-sync-events-outlook-button">Sync my outlook calendars</button>' +
          '<button mbsc-button id="outlook-cal-get-calendars" style="display:none" class="md-sync-events-outlook-button">My Calendars</button>' +
          '<button mbsc-button id="outlook-cal-today">Today</button></div>' +
          '<button mbsc-calendar-prev></button>' +
          '<button mbsc-calendar-next></button>' +
          '</div>'
        );
      },
    });

    var popup = mobiscroll.popup('#demo-sync-events-outlook-calendar-popup', {
      anchor: document.getElementById('outlook-cal-get-calendars'),
      width: 400,
      touchUi: false,
      showOverlay: false,
      scrollLock: false,
      contentPadding: false,
      display: 'anchored',
    });

    // sign in
    calendarElm.addEventListener('click', function (ev) {
      if (ev.target.id === 'outlook-cal-sign-in') {
        if (!outlookCalendarSync.isSignedIn()) {
          outlookCalendarSync.signIn().catch(onError);
        }
      } else if (ev.target.id === 'outlook-cal-today') {
        inst.navigate(new Date());
      } else if (ev.target.id === 'outlook-cal-get-calendars') {
        popup.open();
      }
    });

    // switch click
    popupElm.addEventListener('change', function (ev) {
      if (ev.target.classList.contains('outlook-calendar-switch')) {
        loadEvents(ev.target.checked, ev.target.value);
      }
    });

    // sign out
    popupElm.addEventListener('click', function (ev) {
      if (ev.target.id === 'outlook-cal-sign-out') {
        outlookCalendarSync.signOut().catch(onError);
      }
    });

    // init outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
      onError: onError,
    });
  },
  markup: `
<div id="demo-sync-events-outlook-calendar"></div>

<div id="demo-sync-events-outlook-calendar-popup">

    <div class="mbsc-form-group-inset md-sync-events-outlook-inset">
        <div class="mbsc-form-group-title">My calendars</div>
        <div id="outlook-cal-list"></div>
    </div>
    <div class="mbsc-form-group-inset">
        <button mbsc-button id="outlook-cal-sign-out" class="md-sync-events-outlook-button mbsc-button-block">Log out of my account</button>
    </div>

</div>
  `,
  css: `
.md-outlook-calendar-buttons {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
}

.md-sync-events-outlook-calendar {
    border-left: 1px solid #ccc;
}

.md-outlook-calendar-header {
    flex: 1 0 auto;
    display: flex;
    justify-content: flex-end;
}

.md-sync-events-outlook-nav {
    justify-content: flex-start;
}

.md-sync-events-outlook-button.mbsc-button {
    text-transform: capitalize;
}

.md-sync-events-outlook-inset {
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
