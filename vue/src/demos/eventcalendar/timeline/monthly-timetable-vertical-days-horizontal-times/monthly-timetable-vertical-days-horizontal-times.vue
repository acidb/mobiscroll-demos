<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myView = {
  timeline: {
    type: 'month',
    resolutionHorizontal: 'hour',
    resolutionVertical: 'day'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-vertical-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template><MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" /></template>

<style>
.md-vertical-timeline .mbsc-timeline-row-gutter {
  height: 8px;
}
</style>
