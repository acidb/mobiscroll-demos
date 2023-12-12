<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  timeline: {
    type: 'month',
    resolutionHorizontal: 'hour',
    resolutionVertical: 'day'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-vertical-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" />
</template>

<style>
.md-vertical-timeline .mbsc-timeline-row-gutter {
  height: 8px;
}
</style>
