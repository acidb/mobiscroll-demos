import $ from 'jquery';
import * as mobiscroll from '@mobiscroll/jquery/dist/js/mobiscroll.jquery.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    var google = {};

    window.onGoogleLoad = function () {
      google.onLoad();
    };

    $(function () {
      // Load the SDK asynchronously
      google.loadGoogleSDK = function () {
        (function (d, s, id) {
          var js,
            fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) {
            onGoogleLoad();
            return;
          }
          js = d.createElement(s);
          js.id = id;
          js.src = '//apis.google.com/js/platform.js?onload=onGoogleLoad';
          js.onload = 'onGoogleLoad';
          fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'google-jssdk');
      };

      google.onLoad = function () {
        gapi.load('client:auth2', function () {
          gapi.auth2.init({
            client_id: clientId,
          });
          gapi.signin2.render('google-auth-btn', {
            scope: 'profile',
            onsuccess: google.onSuccess,
            onfailure: google.onFailure,
          });
        });
      };

      google.onFailure = function () {
        mobiscroll.toast({
          message: 'Sign in failed!',
        });
      };

      google.onSuccess = function () {
        $('#google-auth-btn').hide();
        $('#google-sign-out').show();
        if (!calApiLoaded) {
          gapi.client
            .load('calendar', 'v3')
            .then(function () {
              calApiLoaded = true;
              // Load calendar colors
              return gapi.client.calendar.colors.get({
                fields: 'event',
              });
            })
            .then(function (resp) {
              $.each(resp.result.event, function (i, color) {
                eventColors[i] = color.background;
              });
              loadCalendars();
            })
            .catch(function (err) {
              mobiscroll.toast({
                message: err.error,
              });
            });
        } else {
          loadCalendars();
        }
      };

      function loadCalendars() {
        gapi.client.calendar.calendarList
          .list({
            fields: 'items(backgroundColor,colorId,description,id,summary)',
          })
          .then(function (resp) {
            // Populate the calendar list
            var html = '';
            $.each(resp.result.items, function (i, cal) {
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
            });
            $('#google-cal-list').html(html);
            $('#google-cal-form').trigger('mbsc-refresh');
          })
          .catch(function (err) {
            mobiscroll.toast({
              message: err.error,
            });
          });
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

      var clientId = '249451342989-4npidi86thdlqv1ecmp4euncemcg3ocf.apps.googleusercontent.com',
        eventColors = {},
        calColors = {},
        calIds = {},
        calApiLoaded,
        calInst,
        firstDay,
        lastDay;

      google.loadGoogleSDK();

      calInst = $('#demo-google-cal')
        .mobiscroll()
        .eventcalendar({
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
              $.each(calIds, function (calId) {
                batch.add(
                  gapi.client.calendar.events.list({
                    calendarId: calId,
                    timeMin: firstDay.toISOString(),
                    timeMax: lastDay.toISOString(),
                  }),
                  { id: calId },
                );
              });
              if (!$.isEmptyObject(calIds)) {
                batch.then(function (resp) {
                  var eventList = [];
                  $.each(resp.result, function (i, res) {
                    $.each(res.result.items, function (j, event) {
                      eventList.push(getEventProps(event, i));
                    });
                  });
                  calInst.setEvents(eventList);
                });
              }
            }
          },
        })
        .mobiscroll('getInst');

      $('#google-cal-list').on('change', '.md-cal-sync', function (ev) {
        var calId = $(this).data('calendar-id');

        if (this.checked) {
          // Add events from this calendar
          calIds[calId] = true;
          gapi.client.calendar.events
            .list({
              calendarId: calId,
              timeMin: firstDay.toISOString(),
              timeMax: lastDay.toISOString(),
            })
            .then(function (resp) {
              var eventList = [];
              $.each(resp.result.items, function (i, event) {
                eventList.push(getEventProps(event, calId));
              });
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
      });

      $('#google-sign-out').on('click', function () {
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          $('#google-auth-btn').show();
          $('#google-sign-out').hide();
          $('#google-cal-list').html('');
          calInst.setEvents([]);
        });
      });
    });
  },
  markup: `
<!--hidden-->
<div style="max-width:1100px;" class="demo-inline" mbsc-page>
    <!--/hidden-->
    <div id="google-cal-form">
        <div class="mbsc-grid">
            <div class="mbsc-row">
                <div class="mbsc-col-sm-12 mbsc-col-md-4">
                    <div class="mbsc-form-group">
                        <div id="google-auth-btn"></div>
                        <button mbsc-button id="google-sign-out" class="mbsc-button-block" style="display:none;">Sign out</button>
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
    <!--hidden-->
</div>
<!--/hidden-->
  `,
};
