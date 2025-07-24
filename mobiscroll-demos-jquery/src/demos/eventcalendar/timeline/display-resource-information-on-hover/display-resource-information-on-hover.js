import * as mobiscroll from '@mobiscroll/jquery';
import $ from 'jquery';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      theme: 'material',
      themeVariant: 'dark',
    });

    $(function () {
      var $tooltip = $('#demo-resource-info-popup');
      var $resourceAvatar = $('#demo-resource-info-avatar');
      var $resourceName = $('#demo-resource-info-name');
      var $resourceCost = $('#demo-resource-info-cost');
      var $resourceTotal = $('#demo-resource-info-total');
      var $profileButton = $('#demo-resource-info-profile');
      var $editButton = $('#demo-resource-info-edit');
      var openTimer = null;
      var closeTimer = null;

      function openTooltipWithDelay(event) {
        if (closeTimer) clearTimeout(closeTimer);
        if (openTimer) clearTimeout(openTimer);

        // Delay opening the tooltip to avoid flickering
        openTimer = setTimeout(function () {
          var events = calendar.getEvents();
          var totalHours = getTotalHoursForResource(events, event.resource.id);

          $resourceAvatar.attr('src', event.resource.avatar);
          $resourceName.text(event.resource.name);
          $resourceCost.text('$' + event.resource.cost + '/hour');
          $resourceTotal.text('On this day: ' + totalHours + ' hours, $' + totalHours * event.resource.cost);
          $(event.domEvent.target).addClass('md-resource-info-hover');

          tooltip.setOptions({ anchor: event.domEvent.target.closest('.mbsc-timeline-resource') });
          tooltip.open();
          openTimer = null;
        }, 100);
      }

      // Close the tooltip with a delay to allow for hover interactions
      function closeTooltipWithDelay() {
        if (openTimer) clearTimeout(openTimer);
        if (closeTimer) clearTimeout(closeTimer);
        closeTimer = setTimeout(function () {
          tooltip.close();
          closeTimer = null;
        }, 200);
      }

      function getTotalHoursForResource(events, resourceId) {
        return events
          .filter(function (e) { return e.resource === resourceId; })
          .reduce(function (sum, e) {
            // Parse start and end as Date objects
            var start = new Date(e.start);
            var end = new Date(e.end);
            // Calculate duration in hours
            var hours = (end - start) / (1000 * 60 * 60);
            return sum + hours;
          }, 0);
      }

      var calendar = $('#demo')
        .mobiscroll()
        .eventcalendar({
          view: {
            timeline: {
              type: 'day',
              startTime: '07:00',
              endTime: '22:00',
            },
          },
          data: [
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,11)',
              title: 'Task 1',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Task 2',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 3',
              resource: 'res2',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Task 4',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 5',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 6',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,10,8)',
              end: 'dyndatetime(y,m,11,20)',
              title: 'Task 7',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Task 8',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,18)',
              end: 'dyndatetime(y,m,d,20)',
              title: 'Task 9',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Task 10',
              resource: 'res6',
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Task 11',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Task 12',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,17)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Task 13',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Task 14',
              resource: 'res8',
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Task 15',
              resource: 'res8',
            },
          ],
          resources: [
            {
              id: 'res1',
              name: 'Adam Miller',
              color: '#F39C12',
              profession: 'Mason',
              avatar: 'https://img.mobiscroll.com/demos/m1.png',
              cost: '15',
            },
            {
              id: 'res2',
              name: 'Emily Carter',
              color: '#76e083',
              profession: 'Electrician',
              avatar: 'https://img.mobiscroll.com/demos/f1.png',
              cost: '20',
            },
            {
              id: 'res3',
              name: 'James Brown',
              color: '#b13f49',
              profession: 'Carpenter',
              avatar: 'https://img.mobiscroll.com/demos/m2.png',
              cost: '18',
            },
            {
              id: 'res4',
              name: 'Daniel Wilson',
              color: '#e25dd2',
              profession: 'Welder',
              avatar: 'https://img.mobiscroll.com/demos/m3.png',
              cost: '22',
            },
            {
              id: 'res5',
              name: 'Benjamin Harris',
              color: '#7056ff',
              profession: 'Plumber',
              avatar: 'https://img.mobiscroll.com/demos/m4.png',
              cost: '20',
            },
            {
              id: 'res6',
              name: 'Olivia Anderson',
              color: '#56aaff',
              profession: 'Concrete Finisher',
              avatar: 'https://img.mobiscroll.com/demos/f2.png',
              cost: '15',
            },
            {
              id: 'res7',
              name: 'Emma Thompson',
              color: '#84852f',
              profession: 'Steelworker',
              avatar: 'https://img.mobiscroll.com/demos/f3.png',
              cost: '18',
            },
            {
              id: 'res8',
              name: 'Natalie Roberts',
              color: '#ff6e56',
              profession: 'Painter',
              avatar: 'https://img.mobiscroll.com/demos/f4.png',
              cost: '25',
            },
          ],
          renderResource: function (resource) {
            return (
              '<div class="mbsc-flex">' +
              '<img class="md-res-info-avatar" src="' + resource.avatar + '"/>' +
              '<div class="md-res-info-cont">' +
              '<div class="md-res-info-name">' +
              resource.name +
              '</div>' +
              '<div class="md-res-info-prof">' +
              resource.profession +
              '</div>' +
              '</div>' +
              '</div>'
            );
          },
          onResourceHoverIn: function (event) {
            openTooltipWithDelay(event);
          },
          onResourceHoverOut: function (event) {
            $(event.domEvent.target).removeClass('md-resource-info-hover');
            closeTooltipWithDelay();
          },
        }).mobiscroll('getInst');

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          touchUi: false,
        }).mobiscroll('getInst');

      $tooltip.on('mouseenter', function () {
        if (closeTimer) clearTimeout(closeTimer);
      });

      $tooltip.on('mouseleave', function () {
        closeTooltipWithDelay();
      });

      $profileButton.on('click', function () {
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'View profile',
        });
      });

      $editButton.on('click', function () {
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: 'Edit resource',
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-info-popup">
  <div class="md-resource-info-header mbsc-flex">
    <div id="demo-resource-info-name"></div>
    <button id="demo-resource-info-edit" mbsc-button data-icon="pencil" data-color="secondary" data-variant="outline" class="md-resource-info-button mbsc-pull-right"></button>
  </div>
  <div class="md-resource-info-detail">
    <div id="demo-resource-info-cost"></div>
    <div id="demo-resource-info-total"></div>
  </div>
  <button id="demo-resource-info-profile" mbsc-button data-color="success" class="md-resource-info-button">
    Go to profile
  </button>
</div>
<div id="demo"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.md-resource-info-hover.mbsc-timeline-resource {
  background: rgba(128, 128, 128, 0.6);
}
.md-resource-info-detail {
  font-size: 12px;
  opacity: 0.5;
  padding-bottom: 10px;
  line-height: 20px;
}
.md-res-info-avatar {
  width: 40px;
  height: 40px;
}
.md-res-info-cont {
  margin-left: 10px;
}
.md-res-info-prof {
  font-size: 12px;
  color: #666;
  line-height: 20px
}
.md-resource-info-button.mbsc-button {
  font-size: 12px;
  margin-left: 0;
  margin-right: 0;
}
.md-resource-info-header {
  align-items: center;
}
.md-resource-info-header .md-resource-info-button {
  margin-left: auto;
}
`,
};
