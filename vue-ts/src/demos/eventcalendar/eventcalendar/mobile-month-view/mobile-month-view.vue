<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscToast /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscEventClickEvent } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  calendar: { type: 'month' },
  agenda: { type: 'month' }
}

function handleEventClick(args: MbscEventClickEvent) {
  toastMessage.value = args.event.title
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
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
  <MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" @event-click="handleEventClick" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
/*<hidden>*/

.demo-mobile-month-view {
  height: 100%;
}

/*</hidden>*/
</style>
