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

    var onCalendar = false;

    $(function () {
      var myCalendar = $('#demo-external-drag-drop-sortable-dragula')
        .mobiscroll()
        .eventcalendar({
          eventDelete: true,
          externalDrop: true,
          externalResourceDrop: true,
          onEventCreated: function (args) {
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
            $('#mds-event-' + args.event.id).remove();
          },
          onEventDragEnter: function () {
            onCalendar = true;
          },
          onEventDragLeave: function () {
            onCalendar = false;
          },
          onResourceCreated: function (args) {
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' added',
            });
            $('#mds-resource-' + args.resource.id).remove();
          },
          onResourceDragEnter: function () {
            onCalendar = true;
          },
          onResourceDragLeave: function () {
            onCalendar = false;
          },
          resources: [
            { name: 'Resource A', id: 'res-1' },
            { name: 'Resource B', id: 'res-2' },
            { name: 'Resource C', id: 'res-3' },
            { name: 'Resource D', id: 'res-4' },
            { name: 'Resource E', id: 'res-5' },
          ],
          view: {
            timeline: {
              type: 'day',
            },
          },
        })
        .mobiscroll('getInst');

      var sortableTaskList = $('#sortable-task-list')[0];
      var sortableTaskInstance = new Sortable(sortableTaskList, {
        animation: 150,
        forceFallback: true,
        onStart: function () {
          onCalendar = false;
        },
        onEnd: function (e) {
          if (onCalendar) {
            e.item.remove();
          }
        },
      });
      mobiscroll.sortableJsDraggable.init(sortableTaskInstance, {
        cloneSelector: '.sortable-drag',
      });

      var sortableResourceList = $('#sortable-resource-list')[0];
      var sortableResourceInstance = new Sortable(sortableResourceList, {
        animation: 150,
        forceFallback: true,
        onStart: function () {
          onCalendar = false;
        },
        onEnd: function (e) {
          if (onCalendar) {
            e.item.remove();
          }
        },
      });
      mobiscroll.sortableJsDraggable.init(sortableResourceInstance, {
        cloneSelector: '.sortable-drag',
        type: 'resource',
      });

      var dragulaTaskList = $('#dragula-task-list')[0];
      var drake1 = dragula([dragulaTaskList]);
      mobiscroll.dragulaDraggable.init(drake1);

      drake1.on('drop', function (e) {
        if (onCalendar) {
          e.remove();
        }
      });
      drake1.on('cancel', function (e) {
        if (onCalendar) {
          e.remove();
        }
      });
      drake1.on('drag', function () {
        onCalendar = false;
      });

      var dragulaResourceList = $('#dragula-resource-list')[0];
      var drake2 = dragula([dragulaResourceList]);
      mobiscroll.dragulaDraggable.init(drake2, {
        type: 'resource',
      });

      drake2.on('drop', function (e) {
        if (onCalendar) {
          e.remove();
        }
      });
      drake2.on('cancel', function (e) {
        if (onCalendar) {
          e.remove();
        }
      });
      drake2.on('drag', function () {
        onCalendar = false;
      });

      $.getJSON('https://trial.mobiscroll.com/multiday-events/?callback=?', function (events) {
        myCalendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div class="mbsc-grid mbsc-no-padding mds-external-drag-drop-sortable-dragula">
  <div class="mbsc-row">
    <div class="mbsc-col-sm-8 mds-external-third-party-drop-calendar">
      <div id="demo-external-drag-drop-sortable-dragula"></div>
    </div>
    <div class="mbsc-col-sm-4 mds-third-party-drag-container-wrapper">
      <div class="mbsc-form-group-title mds-third-party-title">Mobiscroll draggable</div>
      <div class="mbsc-flex">
        <div class="mbsc-col-sm-6 mbsc-flex-col" >
          <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0">
            <div id="mds-event-1" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "1", "title": "Task 1", "start": "08:00", "end": "09:30", "color": "#cf4343"}' style="background: #cf4343;">
                <div>Task 1</div>
                <div class="mds-external-third-party-duration">1.5 hours</div>
            </div>
            <div id="mds-event-2" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "2", "title": "Task 2", "start": "08:00", "end": "10:00", "color": "#e49516"}' style="background: #e49516;">
                <div>Task 2</div>
                <div class="mds-external-third-party-duration">2 hours</div>
            </div>
            <div id="mds-event-3" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "3", "title": "Task 3", "start": "10:00", "end": "14:00", "color": "#8c429f"}' style="background: #8c429f;">
                <div>Task 3</div>
                <div class="mds-external-third-party-duration">4 hours</div>
            </div>
            <div id="mds-event-4" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "4", "title": "Task 4", "start": "12:00", "end": "18:00", "color": "#63b548"}' style="background: #63b548;">
                <div>Task 4</div>
                <div class="mds-external-third-party-duration">6 hours</div>
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0">
            <div id="mds-resource-1" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "1", "name": "Resource 1"}' style="background: #cf4343;">
              <div>Resource 1</div>
            </div>
            <div id="mds-resource-2" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "2", "name": "Resource 2"}' style="background: #e49516;">
              <div>Resource 2</div>
            </div>
            <div id="mds-resource-3" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "3", "name": "Resource 3"}' style="background: #8c429f;">
              <div>Resource 3</div>
            </div>
            <div id="mds-resource-4" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "4", "name": "Resource 4"}' style="background: #63b548;">
              <div>Resource 4</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mbsc-form-group-title mds-third-party-title">SortableJS</div>
      <div class="mbsc-flex">
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="sortable-task-list">
            <div class="mds-external-third-party-task" style="background: #d1891f;" data-drag-data='{ "title": "Task 5", "start": "08:00", "end": "09:30"}'>
              <div>Task 5</div>
              <div class="mds-external-third-party-duration">1.5 hours</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 6", "start": "12:00", "end": "15:00"}'>
              <div>Task 6</div>
              <div class="mds-external-third-party-duration">3 hours</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 7", "start": "08:30", "end": "11:00"}'>
              <div>Task 7</div>
              <div class="mds-external-third-party-duration">2.5 hours</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "title": "Task 8", "start": "16:00", "end": "21:00"}'>
              <div>Task 8</div>
              <div class="mds-external-third-party-duration">5 hours</div>
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="sortable-resource-list">
            <div class="mds-external-third-party-task" style="background: #d1891f;" data-drag-data='{ "name": "Resource 5"}'>
              <div>Resource 5</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "name": "Resource 6"}'>
              <div>Resource 6</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "name": "Resource 7"}'>
              <div>Resource 7</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "name": "Resource 8"}'>
              <div>Resource 8</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mbsc-form-group-title mds-third-party-title">Dragula</div>
      <div class="mbsc-flex">
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="dragula-task-list">
            <div class="mds-external-third-party-task" style="background: #d1891f;"  data-drag-data='{ "title": "Task 9", "start": "08:00", "end": "09:30"}'>
              <div>Task 9</div>
              <div class="mds-external-third-party-duration">1.5 hours</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "title": "Task 10", "start": "12:00", "end": "15:00"}'>
              <div>Task 10</div>
              <div class="mds-external-third-party-duration">3 hours</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "title": "Task 11", "start": "08:30", "end": "11:00"}'>
              <div>Task 11</div>
              <div class="mds-external-third-party-duration">2.5 hours</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "title": "Task 12", "start": "16:00", "end": "20:30"}'>
              <div>Task 12</div>
              <div class="mds-external-third-party-duration">4.5 hours</div>
            </div>
          </div>
        </div>
        <div class="mbsc-col-sm-6 mbsc-flex-col">
          <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="dragula-resource-list">
            <div class="mds-external-third-party-task" style="background: #d1891f;"  data-drag-data='{ "name": "Resource 9"}'>
              <div>Resource 9</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "name": "Resource 10"}'>
              <div>Resource 10</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "name": "Resource 11"}'>
              <div>Resource 11</div>
            </div>
            <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "name": "Resource 12"}'>
              <div>Resource 12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
  // eslint-disable-next-line es5/no-template-literals
  css: `
.mds-external-third-party-drop-calendar {
    border-right: 1px solid #ccc;
}

.mds-external-drag-drop-sortable-dragula .mbsc-timeline-resource-col { 
    width: 100px; 
}

.mds-external-third-party-drag-container {
    margin: 5px;
}

.mds-third-party-drag-container-wrapper {
    height: 100%;
    overflow: auto;
}

.mds-external-third-party-task {
    margin-top: 5px;
    padding: 10px 12px 10px 12px;
    align-content: center;
    touch-action: none;
    color: #fff;
    border-radius: 8px;
    flex: 0 0 3.6em;
    font-family: -apple-system, Segoe UI, Roboto, sans-serif;
}

.mds-third-party-title {
    text-align: center;
}

.mds-external-third-party-duration {
    font-size: 12px; 
}

.demo-external-drag-drop-sortable-dragula.demo-wrapper,
.demo-external-drag-drop-sortable-dragula .mbsc-grid,
.demo-external-drag-drop-sortable-dragula .mbsc-row,
.demo-external-drag-drop-sortable-dragula .mds-external-third-party-drop-calendar {
    height: 100%;
}
  `,
};
