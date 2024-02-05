<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
{
  start: 'dyndatetime(y,m,d,8)',
  end: 'dyndatetime(y,m,d, 10)',
  title: 'Event 1',
  resource: 1,
},
{
  start: 'dyndatetime(y,m,d+1,9)',
  end: 'dyndatetime(y,m,d+1,15)',
  title: 'Event 2',
  resource: 3,
},
{
  start: 'dyndatetime(y,m,d-1,14)',
  end: 'dyndatetime(y,m,d-1,21)',
  title: 'Event 3',
  resource: 4,
},
{
  start: 'dyndatetime(y,m,d+2,7)',
  end: 'dyndatetime(y,m,d+2,12)',
  title: 'Event 4',
  resource: 5,
},
{
  start: 'dyndatetime(y,m,d-2,7)',
  end: 'dyndatetime(y,m,d-2,10)',
  title: 'Event 5',
  resource: 6,
},
{
  start: 'dyndatetime(y,m,d,11)',
  end: 'dyndatetime(y,m,d,20)',
  title: 'Event 6',
  resource: 3,
},
{
  start: 'dyndatetime(y,m,d-3,4)',
  end: 'dyndatetime(y,m,d-3,10)',
  title: 'Event 7',
  resource: 2,
},
{
  start: 'dyndatetime(y,m,d+3,15)',
  end: 'dyndatetime(y,m,d+3,18)',
  title: 'Event 8',
  resource: 1,
},
{
  start: 'dyndatetime(y,m,d+4,12)',
  end: 'dyndatetime(y,m,d+4,14)',
  title: 'Event 9',
  resource: 4,
},
{
  start: 'dyndatetime(y,m,d-4,10)',
  end: 'dyndatetime(y,m,d-4,12)',
  title: 'Event 10',
  resource: 5,
},
];

const myResources: MbscResource[] = [
{
  id: 1,
  name: 'Resource A',
  color: '#e20000',
  background: 'rgba(108, 166, 166, 0.37)'
},
{
  id: 2,
  name: 'Resource B',
  color: '#76e083',
},
{
  id: 3,
  name: 'Resource C',
  color: '#4981d6',
  cssClass: 'md-diff-custom-bg'
},
{
  id: 4,
  name: 'Resource D',
  color: '#e25dd2',
  cssClass: 'md-pattern-custom-bg'
},
{
  id: 5,
  name: 'Resource E',
  color: '#1dab2f',
  cssClass: 'md-schedule-tick-border'
},
{
  id: 6,
  name: 'Resource F',
  color: '#d6d145',
  background: 'rgba(130, 113, 244, 0.28)'
},
];

const myView: MbscEventcalendarView = {
  schedule: { type: 'week' }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources" />
</template>

<style>
.md-diff-custom-bg.mbsc-schedule-header-item,
.md-diff-custom-bg.mbsc-schedule-resource {
  background: rgba(75, 145, 216, 0.4)
}
.md-diff-custom-bg.mbsc-schedule-column {
  background: rgba(216, 75, 120, 0.4)
}
.md-diff-custom-bg.mbsc-schedule-all-day-item {
  background: rgba(120, 216, 75, 0.4)
}
.md-pattern-custom-bg {
  background: repeating-linear-gradient(-45deg, #fcfffc, #fcfffc 10px, #eefbec 10px, #eefbec 20px);
}
</style>