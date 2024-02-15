import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-resource-background', {
      // drag,
      view: {
        timeline: {
          type: 'month',
        },
      },
      resources: [
        {
          id: 1,
          name: 'Resource A',
          color: '#e20000',
          background: 'rgba(108, 166, 166, 0.37)'
        },
        {
          id: 2,
          name: 'Resource B',
          color: '#1dab2f',
          cssClass: 'md-tick-border'
        },
        {
          id: 3,
          name: 'Resource C',
          color: '#4981d6',
        },
        {
          id: 4,
          name: 'Resource D',
          color: '#e25dd2',
          cssClass: 'md-resource-only-bg'
        },
        {
          id: 5,
          name: 'Resource E',
          color: '#4981d6',
          cssClass: 'md-diff-custom-bg'
        },
        {
          id: 6,
          name: 'Resource F',
          color: '#d6d145',
        },
        {
          id: 7,
          name: 'Resource G',
          color: '#34c8e0',
        },
        {
          id: 8,
          name: 'Resource H',
          color: '#34c8e0',
          cssClass: 'md-row-only-bg'
        },
      ],
      data: [
        {
          start: 'dyndatetime(y,m,2)',
          end: 'dyndatetime(y,m,5)',
          title: 'Event 1',
          resource: 1,
        },
        {
          start: 'dyndatetime(y,m,10,9)',
          end: 'dyndatetime(y,m,15,15)',
          title: 'Event 2',
          resource: 3,
        },
        {
          start: 'dyndatetime(y,m,12)',
          end: 'dyndatetime(y,m,14)',
          title: 'Event 3',
          resource: 4,
        },
        {
          start: 'dyndatetime(y,m,15,7)',
          end: 'dyndatetime(y,m,20,12)',
          title: 'Event 4',
          resource: 5,
        },
        {
          start: 'dyndatetime(y,m,3)',
          end: 'dyndatetime(y,m,10)',
          title: 'Event 5',
          resource: 6,
        },
        {
          start: 'dyndatetime(y,m,10,8)',
          end: 'dyndatetime(y,m,11,20)',
          title: 'Event 6',
          resource: 7,
        },
        {
          start: 'dyndatetime(y,m,25)',
          end: 'dyndatetime(y,m,27)',
          title: 'Event 9',
          resource: 8,
        },
        {
          start: 'dyndatetime(y,m,20)',
          end: 'dyndatetime(y,m,23)',
          title: 'Event 10',
          resource: 9,
        },
      ],
      renderResource: function (resource) {
        return '<div class="md-resource-bg-res-cont">'+ resource.name + 
        (resource.background || resource.cssClass) ? ('<p><code>' + 
        (resource.background ? 'background' : 'cssClass') + ' </code> property used</p>') : '' +
        '</div>';
      },
      renderSidebar: function (resource) {
        return '<div class="md-resource-bg-res-cont">'+ resource.name + 
        (resource.background || resource.cssClass) ? ('<p><code>' + 
        (resource.background ? 'background' : 'cssClass') + ' </code> property used</p>') : '' +
        '</div>';
      }
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div id="demo-resource-background"></div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
  .md-diff-custom-bg.mbsc-timeline-row  {
    background-image: radial-gradient(#ae8a8a 20%, transparent 20%);
    background-color: #f9f9f9;
    background-position: 0 0, 10px 10px;
    background-size: 20px 20px;
  }
  
  .md-diff-custom-bg.mbsc-timeline-resource {
    background: repeating-linear-gradient(-45deg, #fcfffc, #fcfffc 10px, #eefbec 10px, #eefbec 20px);
  }
  
  .md-diff-custom-bg.mbsc-timeline-sidebar-resource {
    opacity: 0.8;
    background-image: repeating-linear-gradient(45deg, #ffd6d6 25%, transparent 25%, transparent 75%, #ffd6d6 75%, #ffd6d6),
        repeating-linear-gradient(45deg, #ffd6d6 25%, #ffefef 25%, #ffefef 75%, #ffd6d6 75%, #ffd6d6);
    background-position:
        0 0,
        10px 10px;
    background-size: 20px 20px;
  }
  
  .md-tick-border {
    border-top: 2px solid currentColor;
    border-bottom-width: 3px;
  }
  
  .md-row-only-bg .mbsc-timeline-day {
    background: rgba(0, 128, 128, 0.8);
  }
  
  .md-resource-only-bg.mbsc-timeline-resource {
    background: rgba(255, 166, 0, 0.7);
  }
  
  .md-resource-bg-res-cont p {
    font-weight: normal;
    font-size: 12px;
  }
  
  .md-resource-bg-res-cont code {
    font-weight: 600;
  }
  `,
};
