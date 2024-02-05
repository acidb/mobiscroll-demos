<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [
{
  start: 'dyndatetime(y,m,2)',
  end: 'dyndatetime(y,m,5)',
  title: 'Event 1',
  resource: 1,
},
{
  start: 'dyndatetime(y,m,10,9)',
  end: 'dyndatetime(y,m,15,15)',
  title: 'Event 2',
  resource: 3,
},
{
  start: 'dyndatetime(y,m,12)',
  end: 'dyndatetime(y,m,14)',
  title: 'Event 3',
  resource: 4,
},
{
  start: 'dyndatetime(y,m,15,7)',
  end: 'dyndatetime(y,m,20,12)',
  title: 'Event 4',
  resource: 5,
},
{
  start: 'dyndatetime(y,m,3)',
  end: 'dyndatetime(y,m,10)',
  title: 'Event 5',
  resource: 6,
},
{
  start: 'dyndatetime(y,m,10,8)',
  end: 'dyndatetime(y,m,11,20)',
  title: 'Event 6',
  resource: 7,
},
{
  start: 'dyndatetime(y,m,22)',
  end: 'dyndatetime(y,m,28)',
  title: 'Event 7',
  resource: 7,
},
{
  start: 'dyndatetime(y,m,8)',
  end: 'dyndatetime(y,m,13)',
  title: 'Event 8',
  resource: 7,
},
{
  start: 'dyndatetime(y,m,25)',
  end: 'dyndatetime(y,m,27)',
  title: 'Event 9',
  resource: 8,
},
{
  start: 'dyndatetime(y,m,20)',
  end: 'dyndatetime(y,m,23)',
  title: 'Event 10',
  resource: 9,
},
]

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
},
{
  id: 5,
  name: 'Resource E',
  color: '#1dab2f',
  cssClass: 'md-tick-border'
},
{
  id: 6,
  name: 'Resource F',
  color: '#d6d145',
},
{
  id: 7,
  name: 'Resource G',
  color: '#34c8e0',
  background: 'rgba(130, 113, 244, 0.28)'
},
{
  id: 8,
  name: 'Resource H',
  color: '#9dde46',
},
];

const myView: MbscEventcalendarView = {
  timeline: { type: 'month' }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources">
    <template #sidebar="resource">
      <div class="md-sidebar">{{ resource.name }} Sidebar</div>
    </template>
  </MbscEventcalendar>
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