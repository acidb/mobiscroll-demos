<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myView = {
  schedule: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '09:00',
    endTime: '18:00',
    timeCellStep: 30,
    timeLabelStep: 30
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/workday-events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template><MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" /></template>
