<script setup>
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  MbscButton,
  MbscPage,
  setOptions,
  getJson
  /* localeImport */
} from '@mobiscroll/vue'
import { print } from '@mobiscroll/print'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const calendarRef = ref(null)

const myView = {
  timeline: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    eventList: true
  }
}

const myResources = [
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
]

function printView() {
  calendarRef.value.instance.print()
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <MbscButton @click="printView()">Print timeline</MbscButton>
    <MbscEventcalendar
      ref="calendarRef"
      :drag="drag"
      :data="myEvents"
      :resources="myResources"
      :view="myView"
      :modules="[print]"
    />
  </MbscPage>
</template>
