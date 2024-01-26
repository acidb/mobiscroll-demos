import * as mobiscroll from '@mobiscroll/javascript/dist/js/mobiscroll.javascript.min.js';

export default {
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    mobiscroll.eventcalendar('#demo-timeline-template', {
      view: {
        timeline: {
          type: 'day',
        },
      },
      renderScheduleEvent: function (data) {
        var ev = data.original;
        var color = data.color;

        return (
          '<div class="md-timeline-template-event" style="border-color:' +
          color +
          ';background:' +
          color +
          '">' +
          '<div class="md-timeline-template-event-cont">' +
          '<span class="mbsc-icon mbsc-font-icon mbsc-icon-' +
          ev.taskType +
          '" style="background:' +
          color +
          '"></span>' +
          '<span class="md-timeline-template-time" style="color:' +
          color +
          ';">' +
          data.start +
          '</span>' +
          '<span class="md-timeline-template-title">' +
          ev.title +
          '</span></div></div>'
        );
      },
      renderBufferBefore: function (args) {
        var event = args.original;
        var color = event.color;

        return `<div class="md-buffer md-before-buffer" style="background: ${color}">
          Prep
          <span class='mbsc-bold'>${event.bufferBefore} min</span>
          <div class='md-buffer-tail' 
            style="background: radial-gradient(circle at right, transparent 70%, ${color} 0)"
          ></div>
        </div>`
      },
      renderBufferAfter: function (args) {
        var event = args.original;
        var color = event.color;

        return ` <div classN="md-buffer md-after-buffer" style="background: ${color}">
          Inspection
          <span class='mbsc-bold'>${event.bufferAfter} min</span>
          <div 
            class='md-buffer-tail' 
            style="background: radial-gradient(circle at left, transparent 70%, ${color} 0)"
          ></div>
         </div>`;
      },
      extendDefaultEvent: function () {
        return {
          taskType: 'cogs',
          bufferAfter: 60,
          bufferBefore: 30,
        };
      },
      data: [
        {
          bufferBefore: 30,
          bufferAfter: 35,
          start: 'dyndatetime(y,m,d,10,30)',
          end: 'dyndatetime(y,m,d,13)',
          title: 'Tire change',
          color: '#7a5886',
          taskType: 'material-repeat',
          resource: 1,
        },
        {
          bufferAfter: 40,
          bufferBefore: 30,
          start: 'dyndatetime(y,m,d,7)',
          end: 'dyndatetime(y,m,d,10)',
          title: 'Brake maintenance',
          color: '#9da721',
          taskType: 'cogs',
          resource: 2,
        },
        {
          bufferAfter: 45,
          bufferBefore: 30,
          start: 'dyndatetime(y,m,d,13,30)',
          end: 'dyndatetime(y,m,d,16,30)',
          title: 'Fluid maintenance',
          color: '#cd6957',
          taskType: 'cogs',
          resource: 1,
        },
        {
          bufferAfter: 35,
          bufferBefore: 30,
          start: 'dyndatetime(y,m,d,11)',
          end: 'dyndatetime(y,m,d,14)',
          title: 'Oil change',
          color: '#637e57',
          taskType: 'material-repeat',
          resource: 3,
        },
        {
          bufferAfter: 60,
          bufferBefore: 30,
          start: 'dyndatetime(y,m,d,8)',
          end: 'dyndatetime(y,m,d,12)',
          title: 'Engine repair',
          color: '#6c5d45',
          taskType: 'material-search',
          resource: 3,
        },
        {
          bufferAfter: 45,
          bufferBefore: 30,
          start: 'dyndatetime(y,m,d,14)',
          end: 'dyndatetime(y,m,d,19)',
          title: 'Car painting',
          color: '#50789d',
          taskType: 'material-format-paint',
          resource: 2,
        },
      ],
      resources: [
        {
          id: 1,
          name: 'Ryan',
          color: '#239a21',
        },
        {
          id: 2,
          name: 'Kate',
          color: '#01adff',
        },
        {
          id: 3,
          name: 'John',
          color: '#ff0101',
        },
      ],
    });
  },
  markup: `
<div class="md-timeline-template">
    <div id="demo-timeline-template"></div>
</div>
  `,
  css: `
/*<hidden>*/

.demo-timeline-template {
    height: 100%;
}

/*</hidden>*/

.md-timeline-template .mbsc-schedule-event.mbsc-ltr {
    height: auto !important;
}

.md-timeline-template-event {
    border: 1px solid transparent;
    margin: 2px 0;
}

.md-timeline-template-event-cont {
    background: rgba(255, 255, 255, .8);
    font-size: 15px;
    height: 32px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.md-timeline-template-event-cont .mbsc-icon {
    padding: 5px;
    box-sizing: content-box;
}

.md-before-buffer,
.mbsc-timeline-event-start .md-timeline-template-event,
.mbsc-timeline-event-start .md-timeline-template-event-cont,
.mbsc-timeline-event-start .md-timeline-template-event-cont .mbsc-icon {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

.md-after-buffer,
.mbsc-timeline-event-end .md-timeline-template-event,
.mbsc-timeline-event-end .md-timeline-template-event-cont,
.mbsc-timeline-event-end .md-timeline-template-event-cont .mbsc-icon {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.md-buffer {
  position: absolute;
  display: flex;
  width: 100%;
  font-size: 10px;
  top: 2px;
  bottom: 2px;
  color: #fff;
  padding: 0 8px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: .5;
  box-sizing: border-box;
}

.md-buffer-tail {
  position: absolute;
  width: 14px;
  height: 100%;
  top: 0;
}

.md-before-buffer .md-buffer-tail {
  left: 100%;
}

.md-after-buffer .md-buffer-tail {
  right: 100%;
}

.md-timeline-template-event-cont .mbsc-icon:before {
    color: #fff;
    font-size: 18px;
}

.md-timeline-template-time {
    margin: 0 10px;
}

.md-timeline-template-title {
    color: #666;
}

.md-timeline-template .mbsc-timeline-column,
.md-timeline-template .mbsc-timeline-header-column {
    min-width: 100px;
}

.md-timeline-template .mbsc-timeline-resource,
.md-timeline-template .mbsc-timeline-row {
    min-height: 100px;
}
  `,
};
