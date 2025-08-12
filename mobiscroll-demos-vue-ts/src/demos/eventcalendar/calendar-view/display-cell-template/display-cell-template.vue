<script setup lang="ts">
import {
  formatDate,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscCellHoverEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([
  {
    start: 'dyndatetime(y,m,2,12)',
    end: 'dyndatetime(y,m,2,16)',
    title: 'Company Strategy Offsite',
    color: '#90bcff'
  },
  {
    start: 'dyndatetime(y,m,7,9)',
    end: 'dyndatetime(y,m,7,17)',
    title: 'R&D Innovation Workshop',
    color: '#ffdfaf'
  },
  {
    start: 'dyndatetime(y,m,15,10)',
    end: 'dyndatetime(y,m,15,15)',
    title: 'Client Feedback Review',
    color: '#ffb9ad'
  },
  {
    start: 'dyndatetime(y,m,19,9)',
    end: 'dyndatetime(y,m,19,19)',
    title: 'Team Building Adventure',
    color: '#f3c1ff'
  },
  {
    start: 'dyndatetime(y,m,23,11)',
    end: 'dyndatetime(y,m,23,15)',
    title: 'Sales Summit & Training',
    color: '#b5eff8'
  },
  {
    start: 'dyndatetime(y,m,25,10)',
    end: 'dyndatetime(y,m,25,15)',

    title: 'Executive Planning Retreat',
    color: '#c7ffbb'
  },
  {
    start: 'dyndatetime(y,m,29,14)',
    end: 'dyndatetime(y,m,29,17)',
    title: 'Marketing Team Conference',
    color: '#ffeeb6'
  }
])

const hoveredDate = ref<Date | undefined>(undefined)
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

const myView: MbscEventcalendarView = {
  calendar: {
    labels: 2
  }
}

function addEvent() {
  const newEvent: MbscCalendarEvent = {
    start: hoveredDate.value!,
    title: 'New Event'
  }
  myEvents.value = [...myEvents.value, newEvent]
  toastMessage.value = 'Event added on ' + formatDate('YYYY-MM-DD', hoveredDate.value!)
  isToastOpen.value = true
}

// Mobiscroll resource hover events
function handleCellHoverIn(args: MbscCellHoverEvent) {
  hoveredDate.value = args.date
}

function handleCellHoverOut() {
  hoveredDate.value = undefined
}

function handleToastClose() {
  isToastOpen.value = false
}

function isHovered(date: Date) {
  return hoveredDate.value && hoveredDate.value.getTime() === date.getTime()
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-cell-summary"
    :view="myView"
    :data="myEvents"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
  >
    <template #dayContent="args">
      <button @click="addEvent" class="mds-cell-summary-btn" v-if="isHovered(args.date)">
        Add event
      </button>
    </template>
  </MbscEventcalendar>
  <MbscToast :isOpen="isToastOpen" :message="toastMessage" @close="handleToastClose" />
</template>

<style>
/* Overrides */

.mds-cell-template .mbsc-calendar-week-days,
.mds-cell-template .mbsc-calendar-labels {
  display: none;
}

.mds-cell-template .mbsc-calendar-cell {
  min-height: 120px;
}

.mds-cell-template .mbsc-calendar-day-outer {
  opacity: 0.7;
}

.mds-cell-template .mbsc-schedule-header-item {
  min-height: 120px;
  padding: 0;
  cursor: pointer;
}

/* Custom header */

.mds-cell-template-nav {
  width: 200px;
}

.mds-cell-template-view-controls {
  max-width: 350px;
  margin: 0 auto;
}

.mds-cell-template-view-switch .mbsc-segmented {
  margin: 0;
}

.mds-cell-template-view-switch .mbsc-segmented.mbsc-material,
.mds-cell-template-view-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.mds-cell-template-back.mbsc-button {
  width: 100%;
  height: 32px;
  font-size: 13px;
  display: none;
}

/* Cell template */

.mds-cell-template-cont {
  position: absolute;
  inset: -1px;
  overflow: hidden;
  padding: 10px;
  text-align: left;
  line-height: 25px;
  white-space: nowrap;
}

.mds-cell-template-cont:after {
  content: '';
  position: absolute;
  inset: -1px;
  pointer-events: none;
  transition: background 0.15s ease-in-out;
}

.mds-cell-template-cont:hover:after {
  background: rgba(51, 51, 51, 0.2);
}

.mds-cell-template-day {
  font-weight: 600;
}

.mds-cell-template-info {
  font-weight: 600;
  font-size: 15px;
  color: #555;
}

.mds-cell-template-add.mbsc-button {
  position: absolute;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
  display: none;
}

.mbsc-calendar-width-sm .mds-cell-template-cont {
  font-size: 14px;
}

.mbsc-calendar-width-sm .mds-cell-template-info {
  font-size: 12px;
}

/* Month view */

.mds-cell-template-month-view.mbsc-windows .mds-cell-template-cont {
  inset: -2px -1px;
}

.mds-cell-template-month-view .mds-cell-template-add {
  display: block;
}

/* Day view */

.mds-cell-template-day-view .mds-cell-template-back {
  display: block;
}

.mds-cell-template-day-view .mbsc-schedule-header-item:not(.mbsc-selected),
.mds-cell-template-day-view .mds-cell-template-view-switch,
.mds-cell-template-day-view .mds-cell-template-cont:after {
  display: none;
}

.mds-cell-template-day-view .mds-cell-template-cont {
  text-align: center;
}

.mds-cell-template-day-view .mbsc-schedule-header-item.mbsc-selected {
  border: 0;
}
</style>
