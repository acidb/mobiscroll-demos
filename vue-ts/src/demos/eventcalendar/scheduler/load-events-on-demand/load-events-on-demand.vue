<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscToast /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>(null)
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  schedule: { type: 'day' }
}

function handlePageLoading(args) {
  const year = args.month.getFullYear()
  const month = args.month.getMonth()

  getJson(
    'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
    (data: MbscCalendarEvent[]) => {
      myEvents.value = data
      toastMessage.value = 'New events loaded'
      isToastOpen.value = true
    },
    'jsonp'
  )
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    :drag="drag"
    :view="myView"
    :data="myEvents"
    @page-loading="handlePageLoading"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
