<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myResponsive = {
  xsmall: {
    view: {
      calendar: {
        type: 'week'
      },
      agenda: {
        type: 'day'
      }
    }
  },
  custom: {
    // Custom breakpoint
    breakpoint: 600,
    view: {
      calendar: {
        labels: true
      }
    }
  }
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

<template><MbscEventcalendar :drag="drag" :data="myEvents" :responsive="myResponsive" /></template>
