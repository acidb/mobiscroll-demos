import { outlookCalendarSync as outlookSync } from '@mobiscroll/calendar-integration';
import * as m from '@mobiscroll/javascript';

var mobiscroll = Object.assign({}, m);
mobiscroll.outlookCalendarSync = outlookSync;

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var outlookCalendarSync = mobiscroll.outlookCalendarSync;
    var calendarIds = [];
    var myEvents = [];
    var startDate;
    var endDate;
    var loader;
    var timer;

    function isLoading(loading) {
      loader = loader || document.getElementById('demo-sync-outlook-cal-loader');
      if (loader) {
        loader.style.visibility = loading ? 'visible' : 'hidden';
      }
    }

    function toggleButtons(loggedIn) {
      if (loggedIn) {
        btnSignIn.style.display = 'none';
        btnCalPopup.style.display = 'block';
      } else {
        btnSignIn.style.display = 'block';
        btnCalPopup.style.display = 'none';
      }
    }

    function toggleCalendar(checked, calendarId) {
      if (checked) {
        isLoading(true);
        calendarIds.push(calendarId);
        outlookCalendarSync
          .getEvents([calendarId], startDate, endDate)
          .then(function (resp) {
            myEvents = myEvents.concat(resp);
            inst.setEvents(myEvents);
            isLoading(false);
          })
          .catch(onError);
      } else {
        calendarIds = calendarIds.filter(function (id) {
          return id !== calendarId;
        });
        myEvents = myEvents.filter(function (event) {
          return event.outlookCalendarId !== calendarId;
        });
        inst.setEvents(myEvents);
      }
    }

    function onError(resp) {
      mobiscroll.toast({
        message: resp.message,
      });
    }

    function onSignedIn() {
      toggleButtons(true);
      calendarIds = [];
      outlookCalendarSync
        .getCalendars()
        .then(function (calendars) {
          var calList = '';

          calendars.sort(function (c) {
            return c.isDefaultCalendar ? -1 : 1;
          });

          calendars.forEach(function (c) {
            calList +=
              '<label>' +
              '<input mbsc-switch value="' +
              c.id +
              '" data-label="' +
              c.name +
              '" type="checkbox" class="mds-outlook-cal-switch" checked />' +
              '</label>';

            calendarIds.push(c.id);
          });

          calendarList.innerHTML = calList;
          mobiscroll.enhance(calendarList);

          isLoading(true);

          return outlookCalendarSync.getEvents(calendarIds, startDate, endDate);
        })
        .then(function (resp) {
          myEvents = resp;
          inst.setEvents(myEvents);
          isLoading(false);
        })
        .catch(onError);
    }

    function onSignedOut() {
      toggleButtons(false);
      calendarIds = [];
      myEvents = [];
      inst.setEvents([]);
      popup.close();
    }

    var inst = mobiscroll.eventcalendar('#demo-sync-outlook-cal', {
      view: {
        agenda: { type: 'month' },
      },
      exclusiveEndDates: true,
      onPageLoading: function (args) {
        startDate = args.viewStart;
        endDate = args.viewEnd;
        clearTimeout(timer);
        timer = setTimeout(function () {
          if (outlookCalendarSync.isSignedIn()) {
            isLoading(true);
            outlookCalendarSync
              .getEvents(calendarIds, startDate, endDate)
              .then(function (resp) {
                myEvents = resp;
                inst.setEvents(myEvents);
                isLoading(false);
              })
              .catch(onError);
          }
        }, 200);
      },
      renderHeader: function () {
        return (
          '<div mbsc-calendar-nav></div>' +
          '<div id="demo-sync-outlook-cal-loader" class="mds-loader"></div>' +
          '<div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">' +
          '<button mbsc-button id="demo-sync-outlook-cal-sign-in">Sync my Outlook calendars</button>' +
          '<button mbsc-button id="demo-sync-outlook-cal-popup-btn" style="display:none">My Calendars</button>' +
          '<button mbsc-button id="demo-sync-outlook-cal-today">Today</button></div>' +
          '</div>' +
          '<button mbsc-calendar-prev></button>' +
          '<button mbsc-calendar-next></button>'
        );
      },
    });

    var btnSignIn = document.getElementById('demo-sync-outlook-cal-sign-in');
    var btnSignOut = document.getElementById('demo-sync-outlook-cal-sign-out');
    var btnCalPopup = document.getElementById('demo-sync-outlook-cal-popup-btn');
    var btnCalToday = document.getElementById('demo-sync-outlook-cal-today');
    var calendarList = document.getElementById('demo-sync-outlook-cal-list');

    var popup = mobiscroll.popup('#demo-sync-outlook-cal-popup', {
      anchor: btnCalPopup,
      contentPadding: false,
      display: 'anchored',
      scrollLock: false,
      showOverlay: false,
      touchUi: false,
      width: 400,
    });

    btnCalPopup.addEventListener('click', function () {
      popup.open();
    });

    btnCalToday.addEventListener('click', function () {
      inst.navigate(new Date());
    });

    btnSignIn.addEventListener('click', function () {
      if (!outlookCalendarSync.isSignedIn()) {
        outlookCalendarSync.signIn().catch(onError);
      }
    });

    btnSignOut.addEventListener('click', function () {
      outlookCalendarSync.signOut().catch(onError);
    });

    calendarList.addEventListener('change', function (ev) {
      if (ev.target.classList.contains('mds-outlook-cal-switch')) {
        toggleCalendar(ev.target.checked, ev.target.value);
      }
    });

    // Init Outlook client
    outlookCalendarSync.init({
      clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
      redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
      onSignedIn: onSignedIn,
      onSignedOut: onSignedOut,
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-sync-outlook-cal"></div>
<div id="demo-sync-outlook-cal-popup">
  <div class="mbsc-form-group-inset">
    <div class="mbsc-form-group-title">My calendars</div>
    <div id="demo-sync-outlook-cal-list"></div>
  </div>
  <div class="mbsc-form-group-inset">
    <button mbsc-button id="demo-sync-outlook-cal-sign-out" class="mbsc-button-block">Sign out of my account</button>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-loader {
  width: 32px;
  height: 32px;
  border: 4px solid #8c8c8c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: mds-loader-rotation 1s linear infinite;
  visibility: hidden;
}

@keyframes mds-loader-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
  `,
};
