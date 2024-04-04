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
  agenda: { type: 'day' }
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
  <div class="mbsc-grid mds-external-nav-agenda">
    <div class="mbsc-row mbsc-flex-1-1 mbsc-no-padding">
      <div class="mbsc-col-12 mbsc-col-md-4 mbsc-col-xl-3">
        <MbscDatepicker
          display="inline"
          :value="mySelectedDate"
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
.mds-external-nav-agenda {
  display: flex;
  height: 100%;
}

.mds-external-nav-ec {
  flex: 1;
  border-left: 1px solid #ccc;
}

@media screen and (max-width: 700px) {
  .mds-external-nav-agenda {
    display: block;
  }
}
</style>
