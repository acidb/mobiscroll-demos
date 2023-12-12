<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscCalendarColor } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myColors = ref<MbscCalendarColor>([
  {
    start: 'dyndatetime(y,m,0)',
    end: 'dyndatetime(y,m,1)',
    background: '#fde4c880'
  },
  {
    start: 'dyndatetime(y,m,17)',
    end: 'dyndatetime(y,m,20)',
    background: '#d5f1ea80'
  },
  {
    date: 'dyndatetime(y,m,29)',
    background: '#ffdbdb80'
  },
  {
    date: 'dyndatetime(y,m+1,3)',
    background: '#fbedd080'
  },
  {
    date: 'dyndatetime(y,m+1,10)',
    background: '#fbedd080'
  },
  {
    background: '#d6e81e1a',
    recurring: {
      repeat: 'monthly',
      day: -1
    }
  }
])

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
  <MbscEventcalendar :drag="drag" :data="myEvents" :colors="myColors" />
</template>
