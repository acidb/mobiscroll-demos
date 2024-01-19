import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    (function () {
      var formatDate = mobiscroll.formatDate;
      var currentEvent;
      var timer;
      var tooltipElm = document.getElementById('custom-event-tooltip-popup');
      var deleteButton = document.getElementById('tooltip-event-delete');
      var fileButton = document.getElementById('tooltip-event-view');
      var statusButton = document.getElementById('tooltip-event-status');
      var header = document.getElementById('tooltip-event-header');
      var data = document.getElementById('tooltip-event-name-age');
      var time = document.getElementById('tooltip-event-time');
      var status = document.getElementById('tooltip-event-title');
      var reason = document.getElementById('tooltip-event-reason');
      var loc = document.getElementById('tooltip-event-location');

      var calendar = mobiscroll.eventcalendar('#demo-custom-event-tooltip', {
        // drag,
        view: {
          calendar: {
            type: 'week',
          },
        },
        height: 260,
        data: [
          {
            title: 'Jude Chester',
            age: 69,
            start: 'dyndatetime(y,m,d,8)',
            end: 'dyndatetime(y,m,d,9)',
            confirmed: false,
            reason: 'Headaches morning & afternoon',
            location: 'Topmed, Building A, Room 203',
            color: '#b33d3d',
          },
          {
            title: 'Leon Porter',
            age: 44,
            start: 'dyndatetime(y,m,d,9)',
            end: 'dyndatetime(y,m,d,10)',
            confirmed: false,
            reason: 'Left abdominal pain',
            location: 'Topmed, Building D, Room 360',
            color: '#b33d3d',
          },
          {
            title: 'Lily Racquel',
            age: 54,
            start: 'dyndatetime(y,m,d,10)',
            end: 'dyndatetime(y,m,d,11)',
            confirmed: true,
            reason: 'Dry, persistent cough & headache',
            location: 'Procare, Building C, Room 12',
            color: '#309346',
          },
          {
            title: 'Mia Sawyer',
            age: 59,
            start: 'dyndatetime(y,m,d,11)',
            end: 'dyndatetime(y,m,d,12)',
            confirmed: true,
            reason: 'Difficulty sleeping & loss of appetite',
            location: 'Procare, Building C, Room 12',
            color: '#309346',
          },
          {
            title: 'Jon Candace',
            age: 63,
            start: 'dyndatetime(y,m,d,12)',
            end: 'dyndatetime(y,m,d,13)',
            confirmed: true,
            reason: 'Nausea & weakness',
            location: 'MedStar, Building A, Room 1',
            color: '#c77c0a',
          },
          {
            title: 'Layton Drake',
            age: 57,
            start: 'dyndatetime(y,m,d,13)',
            end: 'dyndatetime(y,m,d,14)',
            confirmed: true,
            reason: 'Headaches & loss of appetite',
            location: 'Vitalife, Room 160',
            color: '#c77c0a',
          },
          {
            title: 'Willis Kane',
            age: 44,
            start: 'dyndatetime(y,m,d+1,8)',
            end: 'dyndatetime(y,m,d+1,9)',
            confirmed: true,
            reason: 'Back pain',
            location: 'Care Cente, Room 320r',
            color: '#b33d3d',
          },
          {
            title: 'Theo Calanthia',
            age: 60,
            start: 'dyndatetime(y,m,d+1,9)',
            end: 'dyndatetime(y,m,d+1,10)',
            confirmed: true,
            reason: 'Anxiousness & sleeping disorder',
            location: 'Care Center, Room 320',
            color: '#b33d3d',
          },
          {
            title: 'Ford Kaiden',
            age: 53,
            start: 'dyndatetime(y,m,d+1,14)',
            end: 'dyndatetime(y,m,d+1,15)',
            confirmed: true,
            reason: 'Nausea & vomiting',
            location: 'Care Center, Room 206',
            color: '#b33d3d',
          },
          {
            title: 'Gerry Irma',
            age: 50,
            start: 'dyndatetime(y,m,d+1,13)',
            end: 'dyndatetime(y,m,d+1,14)',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'Medica Zone, Building C, Room 2',
            color: '#c77c0a',
          },
          {
            title: 'Carlyn Dorothy',
            age: 36,
            start: 'dyndatetime(y,m,d+1,14)',
            end: 'dyndatetime(y,m,d+1,15)',
            confirmed: true,
            reason: 'Tiredness & muscle pain',
            location: 'Medica Zone, Building C, Room 2',
            color: '#c77c0a',
          },
          {
            title: 'Alma Potter',
            age: 74,
            start: 'dyndatetime(y,m,d-1,10)',
            end: 'dyndatetime(y,m,d-1,11)',
            confirmed: true,
            reason: 'High blood pressure',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d',
          },
          {
            title: 'Debra Aguilar',
            age: 47,
            start: 'dyndatetime(y,m,d-1,11)',
            end: 'dyndatetime(y,m,d-1,12)',
            confirmed: false,
            reason: 'Fever & sore throat',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d',
          },
          {
            title: 'Marjorie White',
            age: 55,
            start: 'dyndatetime(y,m,d-1,13)',
            end: 'dyndatetime(y,m,d-1,14)',
            confirmed: true,
            reason: 'Back pain',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d',
          },
          {
            title: 'Lora Wilson',
            age: 66,
            start: 'dyndatetime(y,m,d-1,15)',
            end: 'dyndatetime(y,m,d-1,16)',
            confirmed: false,
            reason: 'Fever & headache',
            location: 'Vitacure, Building D, Room 2',
            color: '#b33d3d',
          },
          {
            title: 'Christie Baker',
            age: 71,
            start: 'dyndatetime(y,m,d-1,10)',
            end: 'dyndatetime(y,m,d-1,11)',
            confirmed: true,
            reason: 'Headaches morning & afternoon',
            location: 'Care Center, Room 300',
            color: '#309346',
          },
          {
            title: 'Arlene Lyons',
            age: 41,
            start: 'dyndatetime(y,m,d-1,14)',
            end: 'dyndatetime(y,m,d-1,15)',
            confirmed: true,
            reason: 'Nausea & weakness',
            location: 'Care Center, Room 202',
            color: '#c77c0a',
          },
          {
            title: 'Dory Edie',
            age: 45,
            start: 'dyndatetime(y,m,d-2,9)',
            end: 'dyndatetime(y,m,d-2,10)',
            confirmed: true,
            reason: 'Right abdominal pain',
            location: 'Vitacure, Building A, Room 203',
            color: '#309346',
          },
          {
            title: 'Kaylin Toni',
            age: 68,
            start: 'dyndatetime(y,m,d-2,10)',
            end: 'dyndatetime(y,m,d-2,11)',
            confirmed: true,
            reason: 'Itchy, red rashes',
            location: 'Vitacure, Building A, Room 203',
            color: '#309346',
          },
          {
            title: 'Gray Kestrel',
            age: 60,
            start: 'dyndatetime(y,m,d-2,12)',
            end: 'dyndatetime(y,m,d-2,13)',
            confirmed: true,
            reason: 'Cough & fever',
            location: 'Vitacure, Building A, Room 203',
            color: '#309346',
          },
          {
            title: 'Lou Andie',
            age: 76,
            start: 'dyndatetime(y,m,d-2,15)',
            end: 'dyndatetime(y,m,d-2,16)',
            confirmed: true,
            reason: 'High blood pressure',
            location: 'Medica Zone, Room 13',
            color: '#309346',
          },
          {
            title: 'Yancy Dustin',
            age: 52,
            start: 'dyndatetime(y,m,d-2,10)',
            end: 'dyndatetime(y,m,d-2,11)',
            confirmed: true,
            reason: 'Fever & headache',
            location: 'Vitacure, Building E, Room 50',
            color: '#c77c0a',
          },
          {
            title: 'Terry Clark',
            age: 78,
            start: 'dyndatetime(y,m,d-2,11)',
            end: 'dyndatetime(y,m,d-2,12)',
            confirmed: true,
            reason: 'Swollen ankles',
            location: 'Vitacure, Building E, Room 50',
            color: '#c77c0a',
          },
        ],
        clickToCreate: false,
        dragToCreate: false,
        showEventTooltip: false,
        onEventHoverIn: function (args) {
          var event = args.event;
          var eventTime = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));
          var button = {};

          currentEvent = event;

          if (event.confirmed) {
            button.text = 'Cancel appointment';
            button.type = 'warning';
          } else {
            button.text = 'Confirm appointment';
            button.type = 'success';
          }

          header.style.backgroundColor = event.color;
          data.innerHTML = event.title + ', Age: ' + event.age;
          time.innerHTML = eventTime;
          status.innerHTML = event.confirmed ? 'Confirmed' : 'Canceled';
          reason.innerHTML = event.reason;
          loc.innerHTML = event.location;

          statusButton.innerHTML = button.text;
          mobiscroll.getInst(statusButton).setOptions({ color: button.type });

          clearTimeout(timer);
          timer = null;

          tooltip.setOptions({ anchor: args.domEvent.target });
          tooltip.open();
        },
        onEventHoverOut: function () {
          if (!timer) {
            timer = setTimeout(function () {
              tooltip.close();
            }, 200);
          }
        },
        onEventClick: function () {
          tooltip.open();
        },
      });

      var tooltip = mobiscroll.popup('#custom-event-tooltip-popup', {
        display: 'anchored',
        touchUi: false,
        showOverlay: false,
        contentPadding: false,
        closeOnOverlayClick: false,
        width: 350,
        onInit: function () {
          tooltipElm.addEventListener('mouseenter', function () {
            if (timer) {
              clearTimeout(timer);
              timer = null;
            }
          });

          tooltipElm.addEventListener('mouseleave', function () {
            timer = setTimeout(function () {
              tooltip.close();
            }, 200);
          });
        },
      });

      statusButton.addEventListener('click', function () {
        tooltip.close();
        currentEvent.confirmed = !currentEvent.confirmed;
        calendar.updateEvent(currentEvent);

        mobiscroll.toast({
          message: 'Appointment ' + (currentEvent.confirmed ? 'confirmed' : 'canceled'),
        });
      });

      fileButton.addEventListener('click', function () {
        tooltip.close();

        mobiscroll.toast({
          message: 'View file',
        });
      });

      deleteButton.addEventListener('click', function () {
        calendar.removeEvent(currentEvent);

        tooltip.close();

        mobiscroll.toast({
          message: 'Appointment deleted',
        });
      });
    })();
  },
  markup: `
<div id="custom-event-tooltip-popup" class="md-tooltip">
    <div id="tooltip-event-header" class="md-tooltip-header">
        <span id="tooltip-event-name-age" class="md-tooltip-name-age"></span>
        <span id="tooltip-event-time" class="md-tooltip-time"></span>
    </div>
    <div class="md-tooltip-info">
        <div class="md-tooltip-title">
            Status: <span id="tooltip-event-title" class="md-tooltip-status md-tooltip-text"></span>
            <button id="tooltip-event-status" mbsc-button data-color="warning" data-variant="outline" class="md-tooltip-status-button"></button>
        </div>
        <div class="md-tooltip-title">Reason for visit: <span id="tooltip-event-reason" class="md-tooltip-reason md-tooltip-text"></span></div>
        <div class="md-tooltip-title">Location: <span id="tooltip-event-location" class="md-tooltip-location md-tooltip-text"></span></div>
        <button id="tooltip-event-view" mbsc-button data-color="secondary" class="md-tooltip-view-button">View patient file</button>
        <button id="tooltip-event-delete" mbsc-button data-color="danger" data-variant="outline" class="md-tooltip-delete-button">Delete appointment</button>
    </div>
</div>
<div id="demo-custom-event-tooltip"></div>
  `,
  css: `
.md-tooltip .mbsc-popup-content {
    padding: 0;
}

.md-tooltip {
    font-size: 15px;
    font-weight: 600;
}

.md-tooltip-header {
    padding: 12px 16px;
    color: #eee;
}

.md-tooltip-info {
    padding: 16px 16px 60px 16px;
    position: relative;
    line-height: 32px;
}

.md-tooltip-time,
.md-tooltip-status-button {
    float: right;
}

.md-tooltip-title {
    margin-bottom: 15px;
}

.md-tooltip-text {
    font-weight: 300;
}

.md-tooltip-info .mbsc-button {
    font-size: 14px;
    margin: 0;
}

.md-tooltip-info .mbsc-button.mbsc-material {
    font-size: 12px;
}

.md-tooltip-view-button {
    position: absolute;
    bottom: 16px;
    left: 16px;
}

.md-tooltip-delete-button {
    position: absolute;
    bottom: 16px;
    right: 16px;
}
  `,
};
