<script setup>
import { ref } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  MbscButton,
  MbscPage,
  MbscToast /* localeImport */
} from '@mobiscroll/vue'

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
const toastMessage = ref('')
const isToastOpen = ref(false)
const mySelectedDate = ref(now)

const myView = {
  schedule: {
    type: 'day'
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

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <MbscEventcalendar
      :drag="drag"
      :view="myView"
      :data="myEvents"
      :selectedDate="mySelectedDate"
    ></MbscEventcalendar>
    <div class="mbsc-button-group-block">
      <MbscButton @click="addEvent()">Add event to calendar</MbscButton>
    </div>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>
