<script setup lang="ts">
import {
  getJson,
  MbscCalendarEvent,
  MbscDatepicker,
  MbscDatepickerChangeEvent,
  MbscDateType,
  MbscEventcalendar,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent>([])
const mySelectedDate = ref<MbscDateType>(new Date())
const dayView: MbscEventcalendarView = {
  timeline: { type: 'day' }
}

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = args.date
}

function handleDateChange(args: MbscDatepickerChangeEvent) {
  mySelectedDate.value = args.value
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mbsc-grid mds-external-nav-timeline">
    <div class="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
      <div class="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
        <MbscDatepicker
          display="inline"
          :value="mySelectedDate"
          :controls="['calendar']"
          @change="handleDateChange"
        />
      </div>
      <div class="mds-external-nav-ec mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
        <MbscEventcalendar
          :view="dayView"
          :data="myEvents"
          :selectedDate="mySelectedDate"
          @selected-date-change="handleSelectedDateChange"
        />
      </div>
    </div>
  </div>
</template>

<style>
.mds-external-nav-timeline {
  display: flex;
  height: 100%;
}

.mds-external-nav-ec {
  flex: 1;
  border-left: 1px solid #ccc;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-timeline {
    display: block;
  }
}
</style>
