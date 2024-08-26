<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscButton,
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscToast
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month',
    showEmptyDays: true
  }
}

function addEvent(date: Date) {
  const newEvent = {
    title: 'Event',
    start: date
  }

  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
}

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
  <MbscEventcalendar :view="myView" :data="myEvents">
    <template #day="events, date">
      <div class="mbsc-flex-1-1">
        <div>{{ formatDate('D MMM YYYY', date) }}</div>
      </div>
      <MbscButton
        className="mds-custom-day-header-btn"
        variant="outline"
        icon="plus"
        @click="addEvent(date)"
        >Add event</MbscButton
      >
      <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
    </template>
  </MbscEventcalendar>
</template>

<style>
.mds-custom-day-header-btn.mbsc-button.mbsc-icon-button {
  height: 22px;
  width: auto;
  margin: 0;
}
</style>
