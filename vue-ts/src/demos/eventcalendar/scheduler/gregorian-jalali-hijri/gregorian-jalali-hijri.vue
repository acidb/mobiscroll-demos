<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  MbscPage,
  setOptions,
  getJson,
  jalaliCalendar,
  hijriCalendar,
  localeFa,
  localeAr
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])

const myView: MbscEventcalendarView = {
  schedule: { type: 'day' }
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
  <MbscPage>
    <div class="mbsc-grid">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Gregorian calendar</div>
            <MbscEventcalendar :drag="drag" :data="myEvents" :view="myView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Jalali calendar</div>
            <MbscEventcalendar
              :drag="drag"
              :data="myEvents"
              :view="myView"
              :calendarSystem="jalaliCalendar"
              :locale="localeFa"
            />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Hijri calendar</div>
            <MbscEventcalendar
              :drag="drag"
              :data="myEvents"
              :view="myView"
              :calendarSystem="hijriCalendar"
              :locale="localeAr"
            />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
