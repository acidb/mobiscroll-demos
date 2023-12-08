<script setup lang="ts">
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscPage /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref<MbscCalendarEvent[]>([])
const oneWeekView: MbscEventcalendarView = { calendar: { type: 'week' } }
const twoWeekView: MbscEventcalendarView = { calendar: { type: 'week', size: 2 } }
const threeWeekView: MbscEventcalendarView = { calendar: { type: 'week', size: 3 } }

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
            <div class="mbsc-form-group-title">One week view</div>
            <MbscEventcalendar :drag="drag" :data="myEvents" :view="oneWeekView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Two week view</div>
            <MbscEventcalendar :drag="drag" :data="myEvents" :view="twoWeekView" />
          </div>
        </div>
        <div class="mbsc-col-sm-12 mbsc-col-md-4">
          <div class="mbsc-form-group">
            <div class="mbsc-form-group-title">Three week view</div>
            <MbscEventcalendar :drag="drag" :data="myEvents" :view="threeWeekView" />
          </div>
        </div>
      </div>
    </div>
  </MbscPage>
</template>
