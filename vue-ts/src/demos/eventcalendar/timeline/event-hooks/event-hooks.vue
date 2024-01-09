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
  MbscCellClickEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscEventCreateEvent,
  MbscEventCreatedEvent,
  MbscEventCreateFailedEvent,
  MbscEventDeleteEvent,
  MbscEventDeletedEvent,
  MbscEventDragEvent,
  MbscEventUpdateEvent,
  MbscEventUpdatedEvent,
  MbscEventUpdateFailedEvent,
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
  timeline: {
    type: 'day'
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

function handleCellClick(event: MbscCellClickEvent) {
  // Logic for event click
}
function handleCellDoubleClick(event: MbscCellClickEvent) {
  // Logic for cell double click
}
function handleCellRightClick(event: MbscCellClickEvent) {
  // Logic for cell right click
}
function handleDestroy(event: any) {
  // Logic for destroying the event calendar
}
function handleEventClick(event: MbscEventClickEvent) {
  // Logic for event click
}
function handleEventCreate(event: MbscEventCreateEvent) {
  // Logic for event create
}
function handleEventCreated(event: MbscEventCreatedEvent) {
  // Logic for event created
}
function handleEventCreateFailed(event: MbscEventCreateFailedEvent) {
  // Logic for failed event create
}
function handleEventDelete(event: MbscEventDeleteEvent) {
  // Logic for event delete
}
function handleEventDeleted(event: MbscEventDeletedEvent) {
  // Logic for event deleted
}
function handleEventDoubleClick(event: MbscEventClickEvent) {
  // Logic for event double click
}
function handleEventDragStart(event: MbscEventDragEvent) {
  // Logic for event drag start
}
function handleEventDragEnd(event: MbscEventDragEvent) {
  // Logic for event drag end
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
function handleEventUpdate(event: MbscEventUpdateEvent) {
  // Logic for event update
}
function handleEventUpdated(event: MbscEventUpdatedEvent) {
  // Logic for event updated
}
function handleEventUpdateFailed(event: MbscEventUpdateFailedEvent) {
  // Logic for failed event update
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
    @cell-click="handleCellClick"
    @cell-double-click="handleCellDoubleClick"
    @cell-right-click="handleCellRightClick"
    @destroy="handleDestroy"
    @event-click="handleEventClick"
    @event-create="handleEventCreate"
    @event-created="handleEventCreated"
    @event-create-failed="handleEventCreateFailed"
    @event-delete="handleEventDelete"
    @event-deleted="handleEventDeleted"
    @event-double-click="handleEventDoubleClick"
    @event-drag-start="handleEventDragStart"
    @event-drag-end="handleEventDragEnd"
    @event-hover-in="handleEventHoverIn"
    @event-hover-out="handleEventHoverOut"
    @event-right-click="handleEventRightClick"
    @event-update="handleEventUpdate"
    @event-updated="handleEventUpdated"
    @event-update-failed="handleEventUpdateFailed"
    @init="handleInit"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-oading="handlePageLoading"
    @selected-date-change="handleSelectedDateChange"
  ></MbscEventcalendar>
</template>

<style>
.event-hooks-draggable {
  padding: 10px 20px;
  display: inline-block;
  margin: 15px;
  border-radius: 8px;
  width: 210px;
}

.event-hooks-draggable .draggable-title {
  font-size: 16px;
  font-weight: 600;
}

.event-hooks-draggable .draggable-text {
  opacity: 0.7;
  line-height: 25px;
}

.event-hooks-draggable-1 {
  background: #ffdab8;
}

.event-hooks-draggable-2 {
  background: #ddfcf7;
}
</style>
