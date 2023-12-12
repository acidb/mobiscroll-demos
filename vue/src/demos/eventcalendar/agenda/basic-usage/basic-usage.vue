<script setup>
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscToast /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const toastMessage = ref('')
const isToastOpen = ref(false)

const myView = {
  agenda: { type: 'month' }
}

function handleEventClick(args) {
  toastMessage.value = args.event.title
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
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
  <MbscEventcalendar :view="myView" :data="myEvents" @event-click="handleEventClick" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
