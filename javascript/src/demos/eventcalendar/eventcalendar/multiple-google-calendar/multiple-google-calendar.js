import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    // Load the SDK asynchronously
    function loadGoogleSDK() {
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = '//apis.google.com/js/client.js?onload=onGoogleLoad';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'google-jssdk');
    }

    function onGoogleLoad() {
      gapi.auth.init(function () {});
    }

    function getEventProps(event, calId) {
      return {
        start: event.start.date || event.start.dateTime,
        end: ((new Date(event.end.date) - new Date(event.start.date)) / 86400000 == 1 ? '' : event.end.date) || event.end.dateTime,
        text: event.summary || 'No Title',
        calendarId: calId,
        color: eventColors[event.colorId] || calColors[calId],
      };
    }

    var clientId = '<YOUR_CLIENT_ID>',
      eventColors = {},
      calColors = {},
      calIds = {},
      calInst,
      formInst,
      calApiLoaded,
      firstDay,
      lastDay;

    //<hidden>
    clientId = '249451342989-4npidi86thdlqv1ecmp4euncemcg3ocf.apps.googleusercontent.com';
    //</hidden>

    loadGoogleSDK();

    //formInst = mobiscroll.form('#demo-google-cal-form');

    calInst = mobiscroll.eventcalendar('#demo-google-cal', {
      view: {
        calendar: {
          labels: true,
        },
      },
      data: [],
      onPageLoading: function (event) {
        var year = event.firstDay.getFullYear(),
          month = event.firstDay.getMonth();

        firstDay = new Date(year, month - 1, -7);
        lastDay = new Date(year, month + 2, 14);

        if (calApiLoaded) {
          var batch = gapi.client.newBatch();
          for (var id in calIds) {
            batch.add(
              gapi.client.calendar.events.list({
                calendarId: id,
                timeMin: firstDay.toISOString(),
                timeMax: lastDay.toISOString(),
              }),
              { id: id },
            );
          }
          if (Object.getOwnPropertyNames(calIds).length !== 0) {
            batch.then(function (resp) {
              var eventList = [],
                res = resp.result;
              for (var r in res) {
                var events = res[r].result.items;
                for (var i = 0; i < events.length; ++i) {
                  eventList.push(getEventProps(events[i], r));
                }
              }
              calInst.setEvents(eventList);
            });
          }
        }
      },
    });

    // Google auth
    document.getElementById('demo-google-auth').addEventListener('click', function (ev) {
      if (!calApiLoaded) {
        gapi.auth
          .authorize({
            client_id: clientId,
            scope: 'https://www.googleapis.com/auth/calendar',
            immediate: false,
          })
          .then(function (authResult) {
            // Load the calendar API
            if (authResult) {
              return gapi.client.load('calendar', 'v3');
            }
          })
          .then(function () {
            calApiLoaded = true;
            ev.target.style.display = 'none';
            // Load calendar colors
            return gapi.client.calendar.colors.get({
              fields: 'event',
            });
          })
          .then(function (resp) {
            var ev = resp.result.event;
            for (var i = 0; i < ev.length; ++i) {
              eventColors[i] = ev[i].color.background;
            }
            // Load calendar list
            return gapi.client.calendar.calendarList.list({
              fields: 'items(backgroundColor,colorId,description,id,summary)',
            });
          })
          .then(function (resp) {
            // Populate the calendar list
            var html = '',
              cals = resp.result.items;
            for (var i = 0; i < cals.length; ++i) {
              var cal = cals[i];
              calColors[cal.id] = cal.backgroundColor;
              html +=
                '<label>' +
                '<input data-role="switch" type="checkbox" class="md-cal-sync" data-calendar-id="' +
                cal.id +
                '">' +
                cal.summary +
                '<span class="mbsc-desc">' +
                (cal.description || 'No description') +
                '</span>' +
                '</label>';
            }
            document.getElementById('demo-google-cal-list').innerHTML = html;
            //formInst.refresh();
          })
          .catch(function (err) {
            // TODO test for more errors
            mobiscroll.toast({
              // context,
              message: err.error,
            });
          });
      }
    });

    document.addEventListener('change', function (e) {
      if (e.target.classList.contains('md-cal-sync')) {
        var calId = event.target.getAttribute('data-calendar-id');

        if (e.target.checked) {
          // Add events from this calendar
          calIds[calId] = true;
          gapi.client.calendar.events
            .list({
              calendarId: calId,
              timeMin: firstDay.toISOString(),
              timeMax: lastDay.toISOString(),
            })
            .then(function (resp) {
              var eventList = [],
                events = resp.result.items;
              for (var i = 0; i < events.length; ++i) {
                eventList.push(getEventProps(events[i], calId));
              }
              calInst.addEvent(eventList);
            });
        } else {
          // Remove events from this calendar
          var i,
            eventList = calInst.getEvents(),
            eventsToRemove = [];

          for (i = 0; i < eventList.length; i++) {
            if (eventList[i].calendarId == calId) {
              eventsToRemove.push(eventList[i]._id);
            }
          }

          calInst.removeEvent(eventsToRemove);

          delete calIds[calId];
        }
        return false;
      }
    });
  },
  markup: `
<div id="google-cal-form">
    <div class="mbsc-grid">
        <div class="mbsc-row">
            <div class="mbsc-col-sm-12 mbsc-col-md-4">
                <div class="mbsc-form-group">
                    <div id="google-auth-btn"></div>
                    <button id="google-sign-out" class="mbsc-btn-block" style="display:none;">Sign out</button>
                    <div id="google-cal-list"></div>
                </div>
            </div>
            <div class="mbsc-col-sm-12 mbsc-col-md-8">
                <div class="mbsc-form-group">
                    <div id="demo-google-cal"></div>
                </div>
            </div>
        </div>
    </div>
</div>
  `,
};
