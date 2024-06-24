<script setup lang="ts">
import { getJson, MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscSelectedDateChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'
import './synchronized-views.css'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const mySelectedDate = ref(new Date())

const monthView: MbscEventcalendarView = {
  calendar: { popover: false, labels: false }
}

const dayView: MbscEventcalendarView = {
  agenda: { type: 'day' }
}

function handleDateChange(event: MbscSelectedDateChangeEvent) {
  mySelectedDate.value = event.date as Date
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
  <div className="mbsc-grid mds-sync-view">
    <div className="mbsc-row mbsc-no-padding">
      <div className="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
        <MbscEventcalendar
          :data="myEvents"
          height="auto"
          :view="monthView"
          :selectedDate="mySelectedDate"
          @selected-date-change="handleDateChange"
        />
      </div>
      <div className="mds-sync-cal mbsc-col-12 mbsc-col-md-8 mbsc-col-xl-9">
        <MbscEventcalendar
          :data="myEvents"
          :selectedDate="mySelectedDate"
          :view="dayView"
          @selected-date-change="handleDateChange"
        />
      </div>
    </div>
  </div>
</template>
