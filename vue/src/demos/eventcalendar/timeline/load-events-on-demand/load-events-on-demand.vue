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
const toastMessage = ref(null)
const isToastOpen = ref(false)

const myView = {
  calendar: { type: 'month' },
  agenda: { type: 'month' }
}

const myResources = ref([
  {
    id: 1,
    name: 'Resource A',
    color: '#fdf500'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#ff0101'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#01adff'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#239a21'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#ff4600'
  }
])

function handlePageLoading(args) {
  const year = args.month.getFullYear()
  const month = args.month.getMonth()
  const day = args.firstDay.getDate()

  getJson(
    'https://trial.mobiscroll.com/weeklyevents/?year=' + year + '&month=' + month + '&day=' + day,
    (data) => {
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
