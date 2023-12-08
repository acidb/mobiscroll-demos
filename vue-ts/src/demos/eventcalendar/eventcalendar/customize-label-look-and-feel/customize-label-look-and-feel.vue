<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscToast /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscEventClickEvent } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>(null)
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView = {
  calendar: { labels: true }
}

function handleEventClick(args: MbscEventClickEvent) {
  toastMessage.value = args.event.title
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" @event-click="handleEventClick">
    <template #label="data">
      <div
        v-if="data.isMultiDay"
        :style="{ background: data.original.color, color: '#000' }"
        class="multi-day-event"
      >
        {{ data.original.title }}
      </div>
      <div
        v-if="!data.isMultiDay"
        class="single-day-event-dot"
        :style="{ background: data.original.color, color: '#000' }"
      ></div>
      <div v-if="!data.isMultiDay" class="single-day-event" :style="{ color: '#000' }">
        {{ data.original.title }}
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.single-day-event-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 7px;
}

.my-label {
  height: 35px;
}

.single-day-event {
  margin-left: 8px;
}

.multi-day-event {
  padding-left: 5px;
}

.img-calendar {
  width: 14px;
}
</style>
