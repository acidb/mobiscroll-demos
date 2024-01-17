<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myResources = [
  {
    id: 1,
    name: 'Ryan',
    color: '#f7c4b4'
  },
  {
    id: 2,
    name: 'Kate',
    color: '#c6f1c9'
  },
  {
    id: 3,
    name: 'John',
    color: '#e8d0ef'
  }
]

const myView = {
  schedule: {
    type: 'week',
    allDay: false,
    startDay: 1,
    endDay: 5,
    startTime: '08:00',
    endTime: '17:00'
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/resource-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" :resources="myResources" />
</template>
