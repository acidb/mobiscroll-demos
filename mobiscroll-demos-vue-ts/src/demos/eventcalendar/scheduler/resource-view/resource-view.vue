<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarColor,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscResource
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const day = now.getDay()
const monday = now.getDate() - day + (day == 0 ? -6 : 1)

const myEvents: MbscCalendarEvent[] = [
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 1, 11),
    end: new Date(now.getFullYear(), now.getMonth(), monday + 1, 12, 30),
    title: 'Product team mtg.',
    resource: 1
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3, 15),
    end: new Date(now.getFullYear(), now.getMonth(), monday + 3, 17),
    title: 'Decision Making mtg.',
    resource: 1
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 2, 12),
    end: new Date(now.getFullYear(), now.getMonth(), monday + 2, 15, 30),
    title: 'Shaping the Future',
    resource: 2,
    editable: false
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3, 9),
    end: new Date(now.getFullYear(), now.getMonth(), monday + 3, 12),
    title: 'Innovation mtg.',
    resource: 3
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3, 11),
    end: new Date(now.getFullYear(), now.getMonth(), monday + 3, 16),
    title: 'Decision Making mtg.',
    resource: 4
  },
  {
    start: new Date(now.getFullYear(), now.getMonth(), monday + 3, 11),
    end: new Date(now.getFullYear(), now.getMonth(), monday + 3, 13),
    title: 'Stakeholder mtg.',
    resource: 5
  }
]

const myResources: MbscResource[] = [
  {
    id: 1,
    name: 'Flatiron Room',
    color: '#f7c4b4'
  },
  {
    id: 2,
    name: 'The Capital City (locked)',
    color: '#c6f1c9',
    eventCreation: false
  },
  {
    id: 3,
    name: 'Heroes Square',
    color: '#e8d0ef'
  },
  {
    id: 4,
    name: 'Thunderdome',
    color: '#edeaba'
  },
  {
    id: 5,
    name: 'King’s Landing',
    color: '#bacded'
  }
]

const myColors: MbscCalendarColor[] = [
  {
    start: '05:00',
    end: '22:00',
    recurring: {
      repeat: 'daily'
    },
    resource: 2,
    background: '#d3b9711a'
  }
]

const myView: MbscEventcalendarView = {
  schedule: {
    type: 'week',
    allDay: false,
    startDay: 1,
    endDay: 5,
    startTime: '05:00',
    endTime: '22:00'
  }
}
</script>

<template>
  <!-- dragOptions -->
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources" :colors="myColors" />
</template>
