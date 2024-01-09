<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscDraggable /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageChangeEvent,
  MbscPageLoadedEvent,
  MbscPageLoadingEvent,
  MbscSelectedEventsChangeEvent
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}
const myInvalids = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  }
]
const dragData1: MbscCalendarEvent = {
  title: 'External drag 1',
  color: '#ffdab8'
}
const dragData2: MbscCalendarEvent = {
  title: 'External drag 2',
  color: '#ddfcf7'
}

function handleDestroy(event: any) {
  // Logic for destroying the event calendar
}
function handleEventClick(event: MbscEventClickEvent) {
  // Logic for event click
}
function handleEventDoubleClick(event: MbscEventClickEvent) {
  // Logic for event double click
}
function handleEventHoverIn(event: MbscEventClickEvent) {
  // Logic for event hover in
}
function handleEventHoverOut(event: MbscEventClickEvent) {
  // Logic for event hover out
}
function handleEventRightClick(event: MbscEventClickEvent) {
  // Logic for event right click
}
function handleInit(event: any) {
  // Logic running on component init
}
function handlePageChange(event: MbscPageChangeEvent) {
  // Your custom event handler goes here
}
function handlePageLoaded(event: MbscPageLoadedEvent) {
  // Use it to inject custom markup & attach custom listeners
}
function handlePageLoading(event: MbscPageLoadingEvent) {
  // Use it to load data on demand
}
function handleSelectedDateChange(event: MbscSelectedEventsChangeEvent) {
  // Use it to keep track of the selected date externally
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div ref="dragElm1" class="event-hooks-draggable" :style="{ background: '#ffdab8' }">
    <div class="draggable-title">External drag 1</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="$refs.dragElm1" :dragData="dragData1" />
  </div>
  <div ref="dragElm2" class="event-hooks-draggable" :style="{ background: '#ddfcf7' }">
    <div class="draggable-title">External drag 2</div>
    <div class="draggable-text">Drag me to calendar</div>
    <MbscDraggable :element="$refs.dragElm2" :dragData="dragData2" />
  </div>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :invalid="myInvalids"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :externalDrop="true"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-double-click="handleEventDoubleClick"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @init="handleInit"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-oading="handlePageLoading"
    @selected-date-change="handleSelectedDateChange"
  ></MbscEventcalendar>
</template>
