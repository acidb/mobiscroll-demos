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
  schedule: {
    type: 'week',
    startDay: 1,
    endDay: 5,
    startTime: '09:00',
    endTime: '18:00'
  }
}

const myInvalid = [
  {
    start: '12:00',
    end: '13:00',
    title: 'Lunch break',
    type: 'lunch',
    recurring: {
      repeat: 'weekly',
      weekDays: 'MO,TU,WE,TH,FR'
    }
  }
]

function handleEventCreateFailed(event) {
  if (event.invalid.type == 'lunch') {
    toastMessage.value = "Can't create this task on lunch break."
    isToastOpen.value = true
  }
}

function handleEventUpdateFailed(args) {
  if (event.invalid.type == 'lunch') {
    toastMessage.value = "Can't schedule this task on lunch break."
    isToastOpen.value = true
  }
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/workday-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :view="myView"
    :data="myEvents"
    :invalid="myInvalid"
    :dragToCreate="true"
    :dragToMove="true"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
/*<hidden>*/

.demo-work-week-hours {
  height: 100%;
}

/*</hidden>*/
</style>
