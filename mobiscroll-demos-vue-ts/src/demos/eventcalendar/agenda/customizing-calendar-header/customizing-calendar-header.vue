<script setup lang="ts">
import {
  getJson,
  MbscButton,
  MbscCalendarNav,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

function changeView() {
  switch (currentView.value) {
    case 'calendar':
      myView.value = {
        calendar: { labels: true }
      }
      break
    case 'agenda':
      myView.value = {
        agenda: { type: 'month' }
      }
      break
  }
}

const myEvents = ref<MbscCalendarEvent[]>([])
const currentDate = ref<any>(new Date())
const currentView = ref<string>('agenda')
const myView = ref<MbscEventcalendarView>({
  agenda: { type: 'month' }
})

function getFirstDayOfWeek(d: Date, prev: boolean) {
  const day = d.getDay()
  const diff = d.getDate() - day + (prev ? -7 : 7)
  return new Date(d.setDate(diff))
}

function navigatePage(prev: boolean) {
  const newCurrentDate = currentDate.value
  if (currentView.value === 'calendar') {
    const prevNextPage = new Date(
      newCurrentDate.getFullYear(),
      newCurrentDate.getMonth() + (prev ? -1 : 1),
      1
    )
    currentDate.value = prevNextPage
  } else {
    const prevNextSunday = getFirstDayOfWeek(newCurrentDate, prev)
    currentDate.value = prevNextSunday
  }
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
  <MbscEventcalendar :data="myEvents" :view="myView" :selectedDate="currentDate">
    <template #header>
      <MbscCalendarNav className="mds-custom-header-nav"></MbscCalendarNav>
      <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-center">
        <MbscButton
          @click="navigatePage(true)"
          icon="material-arrow-back"
          variant="flat"
          className="mds-custom-header-button"
        ></MbscButton>
        <MbscCalendarToday></MbscCalendarToday>
        <MbscButton
          @click="navigatePage(false)"
          icon="material-arrow-forward"
          variant="flat"
          className="mds-custom-header-button"
        ></MbscButton>
      </div>
      <div class="mds-custom-header-switch">
        <MbscSegmentedGroup v-model="currentView" @change="changeView()">
          <MbscSegmented
            value="agenda"
            v-model="currentView"
            icon="material-view-day"
          ></MbscSegmented>
          <MbscSegmented value="calendar" v-model="currentView" icon="calendar"></MbscSegmented>
        </MbscSegmentedGroup>
      </div>
    </template>
  </MbscEventcalendar>
</template>

<style>
.mds-custom-header-nav {
  width: 180px;
}

.mds-custom-header-button.mbsc-button {
  font-size: 20px;
  height: auto;
  padding: 0;
  margin: 0;
}

.mds-custom-header-switch .mbsc-segmented {
  width: 110px;
  margin-top: 0;
  margin-bottom: 0;
}

.mds-custom-header-switch .mbsc-segmented.mbsc-material,
.mds-custom-header-switch .mbsc-segmented.mbsc-windows {
  padding: 0;
}

.mds-custom-header-switch .mbsc-segmented-button.mbsc-button {
  font-size: 20px;
  height: 32px;
  padding: 0;
}
</style>
