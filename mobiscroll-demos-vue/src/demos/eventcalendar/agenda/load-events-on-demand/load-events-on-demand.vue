<script setup>
import {
  getJson,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const isToastOpen = ref(false)

const myView = {
  agenda: { type: 'month' }
}

function handlePageLoading(args) {
  const year = args.month.getFullYear()
  const month = args.month.getMonth()

  getJson(
    'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
    (data) => {
      myEvents.value = data
      isToastOpen.value = true
    },
    'jsonp'
  )
}
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" @page-loading="handlePageLoading" />
  <MbscToast message="New events loaded" :isOpen="isToastOpen" @close="isToastOpen = false" />
</template>
