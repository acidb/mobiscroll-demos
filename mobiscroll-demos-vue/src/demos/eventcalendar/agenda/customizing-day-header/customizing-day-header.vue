<script setup>
import {
  formatDate,
  getJson,
  MbscButton,
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
const toastMessage = ref('')
const isToastOpen = ref(false)

const myView = {
  agenda: {
    type: 'month',
    showEmptyDays: true
  }
}

function newEvent(date) {
  const newEvent = {
    title: 'Event',
    start: date
  }

  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events) => {
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
        @click="newEvent(date)"
      ></MbscButton>
      <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
    </template>
  </MbscEventcalendar>
</template>

<style>
.mds-custom-day-header-btn.mbsc-button.mbsc-icon-button {
  height: 22px;
  width: 22px;
  margin: 0;
}
</style>
