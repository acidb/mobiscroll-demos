<script setup>
import {
  getJson,
  MbscDatepicker,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const mySelectedDate = ref(new Date())
const dayView = {
  schedule: { type: 'day' }
}

function handleSelectedDateChange(args) {
  mySelectedDate.value = args.date
}

function handleDateChange(args) {
  mySelectedDate.value = args.value
}

function handlePageChange(args) {
  mySelectedDate.value = args.month
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div class="mds-external-nav-scheduler mbsc-flex">
    <div class="mds-external-nav-dp">
      <MbscDatepicker
        display="inline"
        :value="mySelectedDate"
        @change="handleDateChange"
        @pageLoaded="handlePageChange"
      />
    </div>
    <div class="mds-external-nav-ec mbsc-flex-1-1">
      <MbscEventcalendar
        :view="dayView"
        :data="myEvents"
        :selectedDate="mySelectedDate"
        @selected-date-change="handleSelectedDateChange"
      />
    </div>
  </div>
</template>

<style>
.mds-external-nav-scheduler {
  height: 100%;
}

.mds-external-nav-dp {
  height: 360px;
}

.mds-external-nav-ec {
  border-left: 1px solid #ccc;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-scheduler {
    display: block;
  }
}
</style>
