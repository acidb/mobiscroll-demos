import * as mobiscroll from '@mobiscroll/jquery';
import dragula from 'dragula';
import $ from 'jquery';
import Sortable from 'sortablejs';

import 'dragula/dist/dragula.css';

export default {
  // eslint-disable-next-line es5/no-shorthand-properties
  init() {
    mobiscroll.setOptions({
      // locale,
      // theme
    });

    $(function () {
      var myCalendar = $('#demo-external-drap-drop-sortable-dragula')
        .mobiscroll()
        .eventcalendar({
          externalDrop: true,
          onEventCreated: function (args) {
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
          },
          view: {
            schedule: {
              type: 'week',
            },
          },
        })
        .mobiscroll('getInst');

      var sortableList = $('#sortable-list')[0];
      var sortableInstance = new Sortable(sortableList, {
        animation: 150,
        forceFallback: true,
      });
      mobiscroll.sortableJsDraggable.init(sortableInstance, {
        cloneSelector: '.sortable-drag',
      });

      var dragulaList = $('#dragula-list')[0];
      var drake = dragula([dragulaList]);
      mobiscroll.dragulaDraggable.init(drake);

      $.getJSON('https://trial.mobiscroll.com/drag-drop-events/?callback=?', function (events) {
        myCalendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding">
  <div class="mbsc-row">
    <div class="mbsc-col-sm-9 mds-external-third-party-drop-calendar">
      <div id="demo-external-drap-drop-sortable-dragula"></div>
    </div>
    <div class="mbsc-col-sm-3 mds-third-party-drag-container-wrapper">
      <div class="mbsc-form-group-title mds-third-party-title">SortableJS tasks</div>
      <div class="mds-external-third-party-drag-container" id="sortable-list">
        <div class="mds-external-third-party-task" style="background: #d1891f;" data-drag-data='{ "title": "Task 1", "start": "08:00", "end": "09:30"}'>
          <div>Task 1</div>
          <div>1.5 hours</div>
        </div>
        <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 2", "start": "12:00", "end": "15:00"}'>
          <div>Task 2</div>
          <div>3 hours</div>
        </div>
        <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 3", "start": "08:30", "end": "11:00"}'>
          <div>Task 3</div>
          <div>2.5 hours</div>
        </div>
        <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "title": "Task 4", "start": "16:00", "end": "17:00"}'>
          <div>Task 4</div>
          <div>1 hours</div>
        </div>
      </div>
      <div class="mbsc-form-group-title mds-third-party-title">Dragula tasks</div>
      <div class="mds-external-third-party-drag-container" id="dragula-list">
          <div class="mds-external-third-party-task" style="background: #d1891f;"  data-drag-data='{ "title": "Task 5", "start": "08:00", "end": "09:30"}'>
          <div>Task 5</div>
          <div>1.5 hours</div>
        </div>
        <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 6", "start": "12:00", "end": "15:00"}'>
          <div>Task 6</div>
          <div>3 hours</div>
        </div>
        <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 7", "start": "08:30", "end": "11:00"}'>
          <div>Task 7</div>
          <div>2.5 hours</div>
        </div>
        <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "title": "Task 8", "start": "16:00", "end": "17:00"}'>
          <div>Task 8</div>
          <div>1 hours</div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-external-third-party-drop-calendar {
    border-right: 1px solid #ccc;
}

.mds-third-party-drag-container-wrapper {
    height: 100%;
    overflow: auto;
}

.mds-external-third-party-drag-container {
    margin: 10px;
}

.mds-third-party-title {
    text-align: center;
}

.mds-external-third-party-task {
    margin: 10px;
    padding: 10px;
    touch-action: none;
    color: #fff;
    border-radius: 8px;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.demo-external-drag-drop-sortable-dragula.demo-wrapper,
.demo-external-drag-drop-sortable-dragula .mbsc-grid,
.demo-external-drag-drop-sortable-dragula .mbsc-row,
.demo-external-drag-drop-sortable-dragula .mds-external-third-party-drop-calendar {
    height: 100%;
}
  `,
};
