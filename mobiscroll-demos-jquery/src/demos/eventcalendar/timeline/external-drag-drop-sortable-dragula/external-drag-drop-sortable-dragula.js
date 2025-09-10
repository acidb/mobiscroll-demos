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
          eventDelete: true,
          externalDrop: true,
          externalResourceDrop: true,
          onEventCreate: function (args) {
            mobiscroll.toast({
              // context,
              message: args.event.title + ' added',
            });
          },
          onResourceCreate: function (args) {
            mobiscroll.toast({
              // context,
              message: args.resource.name + ' added',
            });
          },
          resources: [
            {
              name: 'Resource A',
              id: 1,
            },
            {
              name: 'Resource B',
              id: 2,
            },
            {
              name: 'Resource C',
              id: 3,
            },
            {
              name: 'Resource D',
              id: 4,
            },
            {
              name: 'Resource E',
              id: 5,
            },
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
      });
      mobiscroll.sortableJsDraggable.init(sortableTaskInstance, {
        cloneSelector: '.sortable-drag',
      });
      var sortableResourceList = $('#sortable-resource-list')[0];
      var sortableResourceInstance = new Sortable(sortableResourceList, {
        animation: 150,
        forceFallback: true,
      });
      mobiscroll.sortableJsDraggable.init(sortableResourceInstance, {
        cloneSelector: '.sortable-drag',
        type: 'resource',
      });
      var dragulaTaskList = $('#dragula-task-list')[0];
      var drake1 = dragula([dragulaTaskList]);
      mobiscroll.dragulaDraggable.init(drake1);
      var dragulaResourceList = $('#dragula-resource-list')[0];
      var drake2 = dragula([dragulaResourceList]);
      mobiscroll.dragulaDraggable.init(drake2, {
        type: 'resource',
      });
      $.getJSON('https://trial.mobiscroll.com/multiday-events/?callback=?', function (events) {
        myCalendar.setEvents(events);
      });
    });
  },
  // eslint-disable-next-line es5/no-template-literals
  markup: `
<div mbsc-page class="mds-external-drap-drop-sortable-dragula">
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-9 mds-external-third-party-drop-calendar">
        <div id="demo-external-drap-drop-sortable-dragula"></div>
      </div>
      <div class="mbsc-col-sm-3">
        <div class="mbsc-form-group-title mds-third-party-title">Mobiscroll draggable</div>
        <div class="mbsc-flex">
          <div class="mbsc-col-sm-6 mbsc-flex-col" >
            <div id="md-task-cont" class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0">
              <div id="md-event-1" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "1", "title": "Draggable-task 1", "start": "08:00", "end": "09:30", "color": "#cf4343"}' style="background: #cf4343;">
                  <div>Draggable-task 1</div>
                  <div class="mds-external-third-party-duration">1.5 hours</div>
              </div>

              <div id="md-event-2" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "2", "title": "Draggable-task 2", "start": "08:00", "end": "10:00", "color": "#e49516"}' style="background: #e49516;">
                  <div>Draggable-task 2</div>
                  <div class="mds-external-third-party-duration">2 hours</div>
              </div>

              <div id="md-event-3" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "3", "title": "Draggable-task 3", "start": "10:00", "end": "14:00", "color": "#8c429f"}' style="background: #8c429f;">
                  <div>Draggable-task 3</div>
                  <div class="mds-external-third-party-duration">4 hours</div>
              </div>

              <div id="md-event-4" class="mds-external-third-party-task" mbsc-draggable data-drag-data='{"id": "4", "title": "Draggable-task 4", "start": "12:00", "end": "18:00", "color": "#63b548"}' style="background: #63b548;">
                  <div>Draggable-task 4</div>
                  <div class="mds-external-third-party-duration">6 hours</div>
              </div>
            </div>
          </div>

          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div id="md-task-cont" class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0">
              <div id="md-event-1" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "1", "name": "Draggable-resource 1"}' style="background: #cf4343;">
                <div>Draggable-resource 1</div>
              </div>

              <div id="md-event-2" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "2", "name": "Draggable-resource 2"}' style="background: #e49516;">
                <div>Draggable-resource 2</div>
              </div>

              <div id="md-event-3" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "3", "name": "Draggable-resource 3"}' style="background: #8c429f;">
                <div>Draggable-resource 3</div>
              </div>

              <div id="md-event-4" class="mds-external-third-party-task" mbsc-draggable data-type="resource" data-drag-data='{"id": "4", "name": "Draggable-resource 4"}' style="background: #63b548;">
                <div>Draggable-resource 4</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mbsc-form-group-title mds-third-party-title">SortableJS</div>
        <div class="mbsc-flex">
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="sortable-task-list">
              <div class="mds-external-third-party-task" style="background: #d1891f;" data-drag-data='{ "title": "Sortable-task 1", "start": "08:00", "end": "09:30"}'>
                <div>Sortable-task 1</div>
                <div class="mds-external-third-party-duration">1.5 hours</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "title": "Sortable-task 2", "start": "12:00", "end": "15:00"}'>
                <div>Sortable-task 2</div>
                <div class="mds-external-third-party-duration">3 hours</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "title": "Sortable-task 3", "start": "08:30", "end": "11:00"}'>
                <div>Sortable-task 3</div>
                <div class="mds-external-third-party-duration">2.5 hours</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "title": "Sortable-task 4", "start": "16:00", "end": "21:00"}'>
                <div>Sortable-task 4</div>
                <div class="mds-external-third-party-duration">5 hours</div>
              </div>
            </div>
          </div>
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="sortable-resource-list">
              <div class="mds-external-third-party-task" style="background: #d1891f;" data-drag-data='{ "name": "Sortable-resource 1"}'>
                <div>Sortable-resource 1</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "name": "Sortable-resource 2"}'>
                <div>Sortable-resource 2</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "name": "Sortable-resource 3"}'>
                <div>Sortable-resource 3</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "name": "Sortable-resource 4"}'>
                <div>Sortable-resource 4</div>
              </div>
            </div>
          </div>
        </div>

        <div class="mbsc-form-group-title mds-third-party-title">Dragula</div>
        <div class="mbsc-flex">
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="dragula-task-list">
              <div class="mds-external-third-party-task" style="background: #d1891f;"  data-drag-data='{ "title": "Dragula-task 1", "start": "08:00", "end": "09:30"}'>
                <div>Dragula-task 1</div>
                <div class="mds-external-third-party-duration">1.5 hours</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "title": "Dragula-task 2", "start": "12:00", "end": "15:00"}'>
                <div>Dragula-task 2</div>
                <div class="mds-external-third-party-duration">3 hours</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "title": "Dragula-task 3", "start": "08:30", "end": "11:00"}'>
                <div>Dragula-task 3</div>
                <div class="mds-external-third-party-duration">2.5 hours</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "title": "Dragula-task 4", "start": "16:00", "end": "20:30"}'>
                <div>Dragula-task 4</div>
                <div class="mds-external-third-party-duration">4.5 hours</div>
              </div>
            </div>
          </div>
      
          <div class="mbsc-col-sm-6 mbsc-flex-col">
            <div class="mds-external-third-party-drag-container mbsc-flex-col mbsc-flex-1-0" id="dragula-resource-list">
              <div class="mds-external-third-party-task" style="background: #d1891f;"  data-drag-data='{ "name": "Dragula-resource 1"}'>
                <div>Dragula-resource 1</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #1ca11a;" data-drag-data='{ "name": "Dragula-resource 2"}'>
                <div>Dragula-resource 2</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #cb3939;" data-drag-data='{ "name": "Dragula-resource 3"}'>
                <div>Dragula-resource 3</div>
              </div>
              <div class="mds-external-third-party-task" style="background: #a446b5;" data-drag-data='{ "name": "Dragula-resource 4"}'>
                <div>Dragula-resource 4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  `,
  // eslint-disable-next-line es5/no-template-literals
  css: `   
.mds-external-drap-drop-sortable-dragula .mbsc-timeline-resource-col { width: 100px; }

.mds-external-third-party-drop-calendar {
    border-right: 1px solid #ccc;
}

.mds-external-third-party-drag-container {
  margin: 5px;
}

.mds-external-third-party-task {
  padding: 8px 12px 8px 12px;
  margin-top: 5px;
  align-content: center;
  touch-action: none;
  color: #fff;
  border-radius: 4px;
  flex-grow: 1;
  font-family: -apple-system, Segoe UI, Roboto, sans-serif;
  font-size: 12px; 
}

.mds-third-party-title {
  text-align: center;
}

.mds-external-third-party-duration {
  padding-top: 4px;
  font-size: 10px; 
}
  `,
};
