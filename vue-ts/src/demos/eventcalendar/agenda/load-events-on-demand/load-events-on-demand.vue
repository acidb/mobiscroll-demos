<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  MbscToast,
  setOptions,
  getJson /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  agenda: { type: 'month' }
}

function handlePageLoading(args) {
  const year = args.month.getFullYear()
  const month = args.month.getMonth()

  getJson(
    'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
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
  <MbscEventcalendar :view="myView" :data="myEvents" @page-loading="handlePageLoading" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
/*<hidden>*/

.demo-load-events-on-demand {
  height: 100%;
}

/*</hidden>*/
</style>
