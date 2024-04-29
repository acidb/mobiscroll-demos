<script setup>
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'
import './full-event-customization.css'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myView = {
  agenda: { type: 'month' }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/agenda-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #event="data">
      <div class="mbsc-flex mbsc-flex-1-1">
        <img
          class="mds-agenda-event-img"
          :src="'https://img.mobiscroll.com/demos/' + data.original.img"
        />
        <div class="mbsc-flex-1-1">
          <div class="mds-agenda-event-title">{{ data.title }}</div>
          <div class="mbsc-flex">
            <div class="mds-agenda-event-location mbsc-flex-1-1">
              <div class="mds-agenda-event-label">Location</div>
              <div>{{ data.original.location }}</div>
            </div>
            <div class="mds-agenda-event-time">
              <div class="mds-agenda-event-label">Time</div>
              <div>{{ data.start }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </MbscEventcalendar>
</template>
