<script setup>
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscDraggable /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const myView = {
  calendar: { labels: true }
}
const myInvalids = [
  {
    recurring: {
      repeat: 'weekly',
      weekDays: 'SA,SU'
    }
  }
]
const dragData1 = {
  title: 'External drag 1',
  color: '#ffdab8'
}
const dragData2 = {
  title: 'External drag 2',
  color: '#ddfcf7'
}

function handleCellClick(event) {
  // Logic for event click
}
function handleCellDoubleClick(event) {
  // Logic for cell double click
}
function handleCellRightClick(event) {
  // Logic for cell right click
}
function handleCellHoverIn(event) {
  // Logic for cell hover in
}
function handleCellHoverOut(event) {
  // Logic for cell hover out
}
function handleDestroy(event) {
  // Logic for destroying the event calendar
}
function handleEventClick(event) {
  // Logic for event click
}
function handleEventCreate(event) {
  // Logic for event create
}
function handleEventCreated(event) {
  // Logic for event created
}
function handleEventCreateFailed(event) {
  // Logic for failed event create
}
function handleEventDelete(event) {
  // Logic for event delete
}
function handleEventDeleted(event) {
  // Logic for event deleted
}
function handleEventDoubleClick(event) {
  // Logic for event double click
}
function handleEventDragStart(event) {
  // Logic for event drag start
}
function handleEventDragEnd(event) {
  // Logic for event drag end
}
function handleEventHoverIn(event) {
  // Logic for event hover in
}
function handleEventHoverOut(event) {
  // Logic for event hover out
}
function handleEventRightClick(event) {
  // Logic for event right click
}
function handleEventUpdate(event) {
  // Logic for event update
}
function handleEventUpdated(event) {
  // Logic for event updated
}
function handleEventUpdateFailed(event) {
  // Logic for failed event update
}
function handleInit(event) {
  // Logic running on component init
}
function handleLabelClick(event) {
  // Logic for label click
}
function handlePageChange(event) {
  // Your custom event handler goes here
}
function handlePageLoaded(event) {
  // Use it to inject custom markup & attach custom listeners
}
function handlePageLoading(event) {
  // Use it to load data on demand
}
function handleSelectedDateChange(event) {
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
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
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
    @label-click="handleLabelClick"
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
