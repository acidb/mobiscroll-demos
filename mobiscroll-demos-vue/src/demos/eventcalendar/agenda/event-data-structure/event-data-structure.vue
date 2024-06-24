<script setup>
import {
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const now = new Date()
const myEvents = ref([
  {
    start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 13),
    end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 14),
    title: 'General orientation',
    color: '#35bb5a'
  }
])
const isToastOpen = ref(false)
const toastMessage = ref('')
const mySelectedDate = ref(now)

const myView = {
  agenda: {
    type: 'month'
  }
}

function addEvent() {
  const newEvent = {
    // base properties
    title: 'Product planning',
    color: '#56ca70',
    start: new Date(2018, 11, 21, 13),
    end: new Date(2018, 11, 21, 14),
    // add any property you'd like
    busy: true,
    description: 'Weekly meeting with team',
    location: 'Office'
  }

  mySelectedDate.value = new Date(2018, 11, 21)
  myEvents.value = [...myEvents.value, newEvent]

  toastMessage.value = 'Event added'
  isToastOpen.value = true
}

function handleCloseToast() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-flex-none">
      <MbscButton @click="addEvent()">Add event to calendar</MbscButton>
    </div>
    <MbscEventcalendar :view="myView" :data="myEvents" :selectedDate="mySelectedDate" />
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleCloseToast" />
  </MbscPage>
</template>
