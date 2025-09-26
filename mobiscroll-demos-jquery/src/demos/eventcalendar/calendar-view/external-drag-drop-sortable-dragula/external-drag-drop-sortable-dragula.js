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

    var draggedTask;

    $(function () {
      var myCalendar = $('#demo-drag-drop-sortable-dragula')
        .mobiscroll()
        .eventcalendar({
          externalDrop: true,
          onEventCreated: function (args) {
            if (draggedTask && args.action === 'externalDrop') {
              draggedTask.remove();
            }
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
          },
        })
        .mobiscroll('getInst');

      var sortableInstance = new Sortable($('#demo-sortable-list')[0], {
        animation: 150,
        forceFallback: true,
        onStart: function (e) {
          draggedTask = e.item;
        },
        onEnd: function () {
          setTimeout(function () {
            draggedTask = null;
          });
        },
      });

      mobiscroll.sortableJsDraggable.init(sortableInstance, {
        cloneSelector: '.sortable-drag',
      });

      var drake = dragula([$('#demo-dragula-list')[0]]);

      drake.on('drag', function (e) {
        draggedTask = e;
      });

      drake.on('cancel', function () {
        draggedTask = null;
      });

      drake.on('drop', function () {
        setTimeout(function () {
          draggedTask = null;
        });
      });

      mobiscroll.dragulaDraggable.init(drake);

      $.getJSON('https://trial.mobiscroll.com/drag-drop-events/?callback=?', function (events) {
        myCalendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding mds-full-height">
  <div class="mbsc-row mds-full-height">
    <div class="mbsc-col-sm-9 mds-drag-drop-sort-calendar mds-full-height">
      <div id="demo-drag-drop-sortable-dragula"></div>
    </div>
    <div class="mbsc-col-sm-3 mds-drag-drop-sort-container-wrapper mds-full-height">
      <div class="mbsc-txt-muted mds-third-party-title">SortableJS list</div>
      <div class="mds-drag-drop-sort-container" id="demo-sortable-list">
        <div class="mds-drag-drop-sort-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 1", "start": "08:00", "end": "09:30", "color": "#cb3939"}'>
          <div>Task 1</div>
          <div>1.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 2", "start": "12:00", "end": "15:00", "color": "#cb3939"}'>
          <div>Task 2</div>
          <div>3 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 3", "start": "08:30", "end": "11:00", "color": "#cb3939"}'>
          <div>Task 3</div>
          <div>2.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 4", "start": "16:00", "end": "17:00", "color": "#cb3939"}'>
          <div>Task 4</div>
          <div>1 hours</div>
        </div>
      </div>
      <div class="mbsc-txt-muted mds-third-party-title">Dragula list</div>
      <div class="mds-drag-drop-sort-container" id="demo-dragula-list">
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;"  data-drag-data='{ "title": "Task 5", "start": "08:00", "end": "09:30", "color": "#1ca11a"}'>
          <div>Task 5</div>
          <div>1.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 6", "start": "12:00", "end": "15:00", "color": "#1ca11a"}'>
          <div>Task 6</div>
          <div>3 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 7", "start": "08:30", "end": "11:00", "color": "#1ca11a"}'>
          <div>Task 7</div>
          <div>2.5 hours</div>
        </div>
        <div class="mds-drag-drop-sort-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 8", "start": "16:00", "end": "17:00", "color": "#1ca11a"}'>
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
.mds-full-height {
  height: 100%;
}

.mds-drag-drop-sort-calendar {
  border-right: 1px solid #ccc;
}

.mds-drag-drop-sort-container {
  margin: 10px;
}

.mds-drag-drop-sort-container-wrapper {
  overflow: auto;
}

.mds-third-party-title {
  margin-top: 12px;
  padding: 0 20px;
  font-size: 16px; 
  font-weight: 600;
}

.mds-drag-drop-sort-task {
  margin: 10px;
  padding: 10px;
  touch-action: none;
  color: #fff;
  border-radius: 8px;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}
`,
};
