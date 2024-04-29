<script setup>
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const isToastOpen = ref(false)
const toastMessage = ref('')

function handleCloseToast() {
  isToastOpen.value = false
}

function handleEventClick(args) {
  toastMessage.value = args.event.title
  isToastOpen.value = true
}

const myView = {
  calendar: { type: 'week' },
  agenda: { type: 'day' }
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

<template>
  <MbscEventcalendar :data="myEvents" :view="myView" @event-click="handleEventClick" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleCloseToast" />
</template>
