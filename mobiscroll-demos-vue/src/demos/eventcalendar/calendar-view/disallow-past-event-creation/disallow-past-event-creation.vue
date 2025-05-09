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

const today = new Date()
const myEvents = ref([])
const toastMessage = ref('')
const isToastOpen = ref(false)

const myView = {
  calendar: {
    labels: true
  }
}

const myInvalid = [
  {
    recurring: {
      repeat: 'daily',
      until: today
    }
  }
]

function handleEventCreateFailed(args) {
  if (!args.originEvent) {
    toastMessage.value = "Can't create event in the past"
    isToastOpen.value = true
  }
}

function handleEventUpdateFailed(args) {
  if (!args.oldEventOccurrence) {
    toastMessage.value = "Can't move event in the past"
    isToastOpen.value = true
  }
}

function handleEventCreate(args) {
  const oldEvent = args.originEvent
  const start = oldEvent && oldEvent.start ? oldEvent.start : null

  // Handle recurring events
  if (start && start < today) {
    toastMessage.value = "Can't move past event"
    isToastOpen.value = true
    return false
  }
}

function handleEventUpdate(args) {
  const oldEvent = args.oldEvent
  const start = oldEvent && oldEvent.start ? oldEvent.start : null
  const oldEventOccurrence = args.oldEventOccurrence
  const occurrenceStart =
    oldEventOccurrence && oldEventOccurrence.start ? oldEventOccurrence.start : null

  // Handle recurring events
  if ((start && start < today) || (occurrenceStart && occurrenceStart < today)) {
    return false
  }
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      for (const event of events) {
        // Convert dates to date objects
        event.start = event.start ? new Date(event.start) : event.start
        event.end = event.end ? new Date(event.end) : event.end
        // Mark past events as fixed by setting the event.editable property to false
        event.editable = event.start && today < event.start
      }
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
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    @event-create-failed="handleEventCreateFailed"
    @event-update-failed="handleEventUpdateFailed"
    @event-create="handleEventCreate"
    @event-update="handleEventUpdate"
    className="md-disallow-past-event-creation"
  />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-disallow-past-event-creation .mbsc-readonly-event {
  opacity: 0.6;
}
</style>
