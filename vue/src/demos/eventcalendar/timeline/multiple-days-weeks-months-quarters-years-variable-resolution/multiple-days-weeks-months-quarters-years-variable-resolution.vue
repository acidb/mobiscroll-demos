<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myResources = ref([
  {
    id: 1,
    name: 'Flatiron Room',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'The Capital City',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Heroes Square',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Thunderdome',
    color: '#ff4600'
  },
  {
    id: 5,
    name: 'King’s Landing',
    color: '#239a21'
  },
  {
    id: 6,
    name: 'Gathering Field',
    color: '#8f1ed6'
  }
])

const myView = {
  timeline: {
    type: 'week',
    size: 2
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/daily-weekly-events/',
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
