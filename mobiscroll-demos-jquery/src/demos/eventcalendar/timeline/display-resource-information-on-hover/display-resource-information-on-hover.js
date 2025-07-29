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
      function openTooltipWithDelay(event) {
        if (closeTimer) {
          clearTimeout(closeTimer);
        }
        if (openTimer) {
          clearTimeout(openTimer);
        }

        // Delay opening the tooltip to avoid flickering
        openTimer = setTimeout(function () {
          var events = calendar.getEvents();
          var res = event.resource;
          var totalHours = getTotalHoursForResource(events, res.id);

          currentResource = res;

          $resourceName.text(res.name);
          $resourceCost.text('$' + res.cost + '');
          $resourceTotal.text('$' + totalHours * res.cost + ' (' + totalHours + 'h)');
          $(event.domEvent.target).addClass('mds-resource-info-hover');

          tooltip.setOptions({
            anchor: event.domEvent.target.closest('.mbsc-timeline-resource')
          });

          tooltip.open();
          openTimer = null;
        }, 100);
      }

      // Close the tooltip with a delay to allow for hover interactions
      function closeTooltipWithDelay() {
        if (openTimer) {
          clearTimeout(openTimer);
        }
        if (closeTimer) {
          clearTimeout(closeTimer);
        }
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

      var $tooltip = $('#demo-resource-info-popup');
      var $resourceName = $('#demo-resource-info-name');
      var $resourceCost = $('#demo-resource-info-cost');
      var $resourceTotal = $('#demo-resource-info-total');
      var $payButton = $('#demo-resource-info-pay');
      var $editButton = $('#demo-resource-info-edit');
      var openTimer = null;
      var closeTimer = null;
      var currentResource = null;

      var calendar = $('#demo-display-resource-information-on-hover')
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
              title: 'Block Wall Construction',
              resource: 'res1',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Task 2',
              resource: 'Paver Installation',
            },
            {
              start: 'dyndatetime(y,m,d,12)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Install ceiling fan',
              resource: 'res2',
            },
            {
              start: 'dyndatetime(y,m,d,10)',
              end: 'dyndatetime(y,m,d,14)',
              title: 'Roof Beam Replacement',
              resource: 'res3',
            },
            {
              start: 'dyndatetime(y,m,d,7)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Custom Metalworks Creation',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,d,14)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Pipe Welding',
              resource: 'res4',
            },
            {
              start: 'dyndatetime(y,m,10,8)',
              end: 'dyndatetime(y,m,11,20)',
              title: 'Leak Detection & Repair',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,17)',
              title: 'Faucet & Sink Fitting',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,18)',
              end: 'dyndatetime(y,m,d,20)',
              title: 'Drainage System Setup',
              resource: 'res5',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,13)',
              title: 'Surface Polishing',
              resource: 'res6',
            },
            {
              start: 'dyndatetime(y,m,d,8)',
              end: 'dyndatetime(y,m,d,10)',
              title: 'Structural Steel Inspections',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,13)',
              end: 'dyndatetime(y,m,d,16)',
              title: 'Metal Structure Assembly',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,17)',
              end: 'dyndatetime(y,m,d,19)',
              title: 'Heavy Steel Beam Placement',
              resource: 'res7',
            },
            {
              start: 'dyndatetime(y,m,d,9)',
              end: 'dyndatetime(y,m,d,12)',
              title: 'Exterior House Painting',
              resource: 'res8',
            },
            {
              start: 'dyndatetime(y,m,d,15)',
              end: 'dyndatetime(y,m,d,18)',
              title: 'Deck Staining & Sealing',
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
              '<img class="mds-res-info-avatar" src="' + resource.avatar + '"/>' +
              '<div class="mds-res-info-cont">' +
              '<div class="mds-res-info-name">' +
              resource.name +
              '</div>' +
              '<div class="mds-res-info-prof">' +
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
            $(event.domEvent.target).removeClass('mds-resource-info-hover');
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
        if (closeTimer) {
          clearTimeout(closeTimer)
        };
      });

      $tooltip.on('mouseleave', function () {
        closeTooltipWithDelay();
      });

      $payButton.on('click', function () {
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: currentResource.profession + ' payed',
        });
      });

      $editButton.on('click', function () {
        tooltip.close();
        mobiscroll.toast({
          //<hidden>
          // theme,//</hidden>
          // context,
          message: "Edit " + currentResource.name + "'s profile",
        });
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-info-popup" style="display:none">
  <div class="mds-resource-info-header mbsc-flex">
    <div id="demo-resource-info-name" class="mds-resource-info-name"></div>
    <button id="demo-resource-info-edit" mbsc-button data-icon="pencil" data-color="secondary" data-variant="outline" class="mds-resource-info-edit-btn mbsc-pull-right"></button>
  </div>
  <div class="mds-resource-info-cont">
    <div>Rate: <span id="demo-resource-info-cost" class="mds-resource-info-detail"></span></div>
    <div>Today: <span id="demo-resource-info-total" class="mds-resource-info-detail"></span></div>
  </div>
  <div class="mds-resource-info-btn-cont">
    <button id="demo-resource-info-pay" mbsc-button data-color="success" class="mds-resource-info-pay-btn">
      Pay now
    </button>
  </div>
</div>
<div id="demo-display-resource-information-on-hover"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-resource-info-hover.mbsc-timeline-resource {
  background: rgba(128, 128, 128, 0.6);
}
.mds-res-info-avatar {
  width: 40px;
  height: 40px;
}
.mds-res-info-cont {
  margin-left: 10px;
}
.mds-res-info-prof {
  font-size: 12px;
  color: #666;
  line-height: 20px
}

.mds-resource-info-header {
  align-items: center;
}
.mds-resource-info-btn-cont {
  text-align: center;
}
.mds-resource-info-edit-btn.mbsc-button {
  font-size: 12px;
  margin: 0 0 0 auto;
}
.mds-resource-info-pay-btn.mbsc-button {
  font-size: 12px;
  margin: 0;
}
.mds-resource-info-cont {
  font-size: 12px;
  opacity: 0.5;
  padding-bottom: 10px;
  line-height: 20px;
}
.mds-resource-info-detail {
  font-weight: bold;
}
`,
};
