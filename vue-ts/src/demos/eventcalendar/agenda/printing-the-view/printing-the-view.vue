<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  MbscButton,
  MbscPage,
  setOptions,
  getJson
  /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const calendarRef = ref(null)
const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

function printView() {
  calendarRef.value.instance.print()
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <MbscButton @click="printView()">Print agenda</MbscButton>
    <MbscEventcalendar
      ref="calendarRef"
      :drag="drag"
      :data="myEvents"
      :view="myView"
      :modules="[print]"
    />
  </MbscPage>
</template>
