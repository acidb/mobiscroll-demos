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

      $('#demo')
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
              name: 'Mason',
              color: '#F39C12',
              tooltip: 'Adam Miller',
              avatar: 'https://img.mobiscroll.com/demos/m1.png',
              cost: '$15/hour',
            },
            {
              id: 'res2',
              name: 'Electrician',
              color: '#76e083',
              tooltip: 'Emily Carter',
              avatar: 'https://img.mobiscroll.com/demos/f1.png',
              cost: '$20/hour',
            },
            {
              id: 'res3',
              name: 'Carpenter',
              color: '#b13f49',
              tooltip: 'James Brown',
              avatar: 'https://img.mobiscroll.com/demos/m2.png',
              cost: '$18/hour',
            },
            {
              id: 'res4',
              name: 'Welder',
              color: '#e25dd2',
              tooltip: 'Daniel Wilson',
              avatar: 'https://img.mobiscroll.com/demos/m3.png',
              cost: '$22/hour',
            },
            {
              id: 'res5',
              name: 'Heavy Equipment Operator',
              color: '#7056ff',
              tooltip: 'Benjamin Harris',
              avatar: 'https://img.mobiscroll.com/demos/m4.png',
              cost: '$20/hour',
            },
            {
              id: 'res6',
              name: 'Concrete Finisher',
              color: '#56aaff',
              tooltip: 'Olivia Anderson',
              avatar: 'https://img.mobiscroll.com/demos/f2.png',
              cost: '$15/hour',
            },
            {
              id: 'res7',
              name: 'Steelworker',
              color: '#84852f',
              tooltip: 'Emma Thompson',
              avatar: 'https://img.mobiscroll.com/demos/f3.png',
              cost: '$18/hour',
            },
            {
              id: 'res8',
              name: 'Painter',
              color: '#ff6e56',
              tooltip: 'Natalie Roberts',
              avatar: 'https://img.mobiscroll.com/demos/f4.png',
              cost: '$25/hour',
            },
          ],
          onResourceHoverIn: function (event) {
            $resourceAvatar.attr('src', event.resource.avatar);
            $resourceName.text(event.resource.tooltip);
            $resourceCost.text(event.resource.cost);
            tooltip.setOptions({ anchor: event.domEvent.target.closest('.mbsc-timeline-resource') });
            $(event.domEvent.target).addClass('md-resource-info-hover');
            tooltip.open();
          },
          onResourceHoverOut: function (event) {
            $(event.domEvent.target).removeClass('md-resource-info-hover');
            tooltip.close();
          },
        });

      var tooltip = $tooltip
        .mobiscroll()
        .popup({
          display: 'anchored',
          showOverlay: false,
          touchUi: false,
        })
        .mobiscroll('getInst');
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-info-popup">
  <div class="mbsc-flex">
    <img id="demo-resource-info-avatar" />
    <div class="mbsc-padding">
      <div>
        Name: <span id="demo-resource-info-name"></span>
      </div>
      <div class="md-resource-info-detail">
        Cost: <span id="demo-resource-info-cost"></span>
      </div>
    </div>
  </div>
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
  margin-top: 5px;
  opacity: 0.5;
}
`,
};
