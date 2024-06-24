<script setup lang="ts">
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'
import './event-content-customization.css'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

function getParticipant(id: number) {
  switch (id) {
    case 1:
      return {
        img: 'https://img.mobiscroll.com/demos/m1.png',
        name: 'Barry L.'
      }
    case 2:
      return {
        img: 'https://img.mobiscroll.com/demos/f1.png',
        name: 'Hortense T.'
      }
    case 3:
      return {
        img: 'https://img.mobiscroll.com/demos/m2.png',
        name: 'Carl H.'
      }
  }
}

const myView: MbscEventcalendarView = {
  calendar: { type: 'week' },
  agenda: { type: 'day' }
}

function handleCloseToast() {
  isToastOpen.value = false
}

function add(ev: Event, data: MbscCalendarEvent) {
  toastMessage.value = data.title + ' clicked'
  isToastOpen.value = true
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/custom-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" className="md-custom-event">
    <template #eventContent="data">
      <div>{{ data.title }}</div>
      <div class="mds-agenda-event-content mbsc-flex mbsc-align-items-center">
        <img
          class="mds-agenda-event-avatar"
          :src="getParticipant(data.original?.participant)?.img"
        />
        <div class="mbsc-flex-1-0">
          {{ getParticipant(data.original.participant)?.name }}
        </div>
        <MbscButton
          className="mds-agenda-event-btn"
          color="secondary"
          data-variant="outline"
          @click="add($event, data.original)"
        >
          Add participant
        </MbscButton>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleCloseToast" />
</template>
