<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscToast,
  MbscDraggable /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventCreateEvent
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>(null)
const isToastOpen = ref<boolean>(false)
const now: Date = new Date()

const meetingData: MbscCalendarEvent = {
  title: 'QA meeting',
  color: '#cf4343',
  start: now,
  end: now
}

const retreatData: MbscCalendarEvent = {
  title: 'Team retreat',
  color: '#1064b0',
  start: now,
  end: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2)
}

const myView: MbscEventcalendarView = {
  calendar: { labels: true }
}

function handleEventCreate(args: MbscEventCreateEvent) {
  toastMessage.value = args.event.title + ' added'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mbsc-grid mbsc-no-padding">
    <div class="mbsc-row">
      <div class="mbsc-col-sm-9 external-drop-calendar">
        <MbscEventcalendar
          :drag="drag"
          :view="myView"
          :data="myEvents"
          :dragToMove="true"
          :externalDrop="true"
          @event-create="handleEventCreate"
        />
      </div>
      <div class="mbsc-col-sm-3">
        <div class="mbsc-form-group-title">Available tasks</div>
        <div ref="meetingElm" class="external-drop-task" :style="{ background: '#cf4343' }">
          <div>QA meeting</div>
          <div>1.5 h</div>
          <MbscDraggable :element="$refs.meetingElm" :dragData="meetingData" />
        </div>
        <div ref="retreatElm" class="external-drop-task" :style="{ background: '#1064b0' }">
          <div>Team retreat</div>
          <div>2 h</div>
          <MbscDraggable :element="$refs.retreatElm" :dragData="retreatData" />
        </div>
        <div ref="blankElm" class="external-drop-task external-drop-task-blank">
          <div>Blank event</div>
          <MbscDraggable :element="$refs.blankElm" />
        </div>
      </div>
    </div>
  </div>

  <MbscToast :message="toastMessage" :isOpen="isToastOpen" :close="handleToastClose" />
</template>

<style>
.external-drop-calendar {
  border-right: 1px solid #ccc;
}

.external-drop-cont {
  height: 100%;
  overflow: auto;
}

.external-drop-task {
  color: #fff;
  padding: 10px;
  margin: 20px;
  border-radius: 8px;
  font-family:
    -apple-system,
    Segoe UI,
    Roboto,
    sans-serif;
}

.external-drop-task {
  background: #999;
}

.demo-external-drag-drop-schedule-unschedule.demo-wrapper,
.demo-external-drag-drop-schedule-unschedule .mbsc-grid,
.demo-external-drag-drop-schedule-unschedule .mbsc-row,
.demo-external-drag-drop-schedule-unschedule .external-drop-calendar {
  height: 100%;
}
</style>
