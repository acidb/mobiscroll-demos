<script setup>
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myResources = []

const myView = {
  agenda: {
    type: 'month',
    showEmptyDays: true
  }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources">
    <template #day="events, date">
      <div class="mbsc-flex mbsc-flex-1-1 mbsc-align-items-center">
        <div class="mbsc-flex-1-1">
          <div>{{ date }}</div>
        </div>
        <MbscButton variant="outline" icon="plus"></MbscButton>
      </div>
    </template>
  </MbscEventcalendar>
</template>
