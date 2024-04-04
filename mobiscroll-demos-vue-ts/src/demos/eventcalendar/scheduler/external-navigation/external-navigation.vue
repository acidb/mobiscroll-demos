<script setup lang="ts">
import {
  getJson,
  MbscCalendarEvent,
  MbscDatepicker,
  MbscDatepickerChangeEvent,
  MbscDatepickerPageLoadedEvent,
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
  schedule: { type: 'day' }
}

function handleSelectedDateChange(args: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = args.date
}

function handleDateChange(args: MbscDatepickerChangeEvent) {
  if (args.value) {
    mySelectedDate.value = args.value
  }
}

function handlePageChange(args: MbscDatepickerPageLoadedEvent) {
  if (args.month) {
    mySelectedDate.value = args.month
  }
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
  <div class="mbsc-grid mds-external-nav-scheduler">
    <div class="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
      <div class="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
        <MbscDatepicker
          display="inline"
          :value="mySelectedDate"
          :controls="['calendar']"
          @change="handleDateChange"
          @pageLoaded="handlePageChange"
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
.mds-external-nav-scheduler {
  display: flex;
  height: 100%;
}

.mds-external-nav-ec {
  height: 100%;
  border-left: 1px solid #ccc;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-scheduler {
    display: block;
  }
}
</style>
