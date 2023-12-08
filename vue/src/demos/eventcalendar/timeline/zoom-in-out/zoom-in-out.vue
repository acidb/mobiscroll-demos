<script setup>
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  MbscButton,
  MbscToast,
  MbscCalendarNav,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscCalendarNext,
  getJson,
  setOptions /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const myView = ref({
  timeline: {
    type: 'day',
    size: 3,
    resolution: 'hour',
    timeCellStep: 360,
    timeLabelStep: 360
  }
})
const myCssClass = ref('')
const zoom = ref(7)
const myRefDate = ref('dyndatetime(y,m,d-1)')
const timer = ref(null)
const calElm = ref(null)
const toastMessage = ref('')
const isToastOpen = ref(false)
const myResources = [
  {
    id: 1,
    name: 'Resource A',
    color: '#e20000'
  },
  {
    id: 2,
    name: 'Resource B',
    color: '#76e083'
  },
  {
    id: 3,
    name: 'Resource C',
    color: '#4981d6'
  },
  {
    id: 4,
    name: 'Resource D',
    color: '#e25dd2'
  },
  {
    id: 5,
    name: 'Resource E',
    color: '#1dab2f'
  },
  {
    id: 6,
    name: 'Resource F',
    color: '#d6d145'
  }
]

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/big-timeline-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})

function changeView(step) {
  let calView
  let toastText
  let newRefDate
  let cssClass = ''
  const newZoom = zoom.value + step
  const viewDate = calElm.value.instance.getViewDate()
  const currentDate = new Date(viewDate)
  const oneDay = 60000 * 60 * 24

  if (timer.value) {
    clearTimeout(timer.value)
  }

  switch (newZoom) {
    case 9:
    default:
      // Multiple days, 30m resolution, 1h labels
      calView = {
        timeline: {
          type: 'day',
          size: 3,
          resolution: 'hour',
          timeCellStep: 30,
          timeLabelStep: 60
        }
      }
      toastText = '30 minutes'
      newRefDate = new Date(viewDate - oneDay)
      break
    case 8:
      // Multiple days, 3h resolution, 6h labels
      calView = {
        timeline: {
          type: 'day',
          size: 3,
          resolution: 'hour',
          timeCellStep: 180,
          timeLabelStep: 360
        }
      }
      toastText = '3 hours'
      newRefDate = new Date(viewDate - oneDay)
      break
    case 7:
      // Multiple days, 6h resolution
      calView = {
        timeline: {
          type: 'day',
          size: 3,
          resolution: 'hour',
          timeCellStep: 360,
          timeLabelStep: 360
        }
      }
      toastText = '6 hours'
      newRefDate = new Date(viewDate - oneDay)
      break
    case 6:
      // Multiple weeks, day resolution
      calView = {
        timeline: {
          type: 'week',
          size: 5,
          resolution: 'day'
        }
      }
      cssClass = 'column-large'
      toastText = 'Multiple days'
      newRefDate = new Date(viewDate - oneDay * 17)
      break
    case 5:
      // Multiple weeks, day resolution - smaller width columns
      calView = {
        timeline: {
          type: 'week',
          size: 5,
          resolution: 'day'
        }
      }
      cssClass = 'column-medium'
      toastText = 'Medium column width'
      newRefDate = new Date(viewDate - oneDay * 17)
      break
    case 4:
      // Multiple weeks, day resolution - even smaller width columns
      calView = {
        timeline: {
          type: 'week',
          size: 5,
          resolution: 'day'
        }
      }
      toastText = 'Small column width'
      newRefDate = new Date(viewDate - oneDay * 17)
      break
    case 3:
      // Multiple weeks, week resolution
      calView = {
        timeline: {
          type: 'week',
          size: 5,
          resolution: 'week'
          // eventList: true
        }
      }
      toastText = 'Multiple weeks'
      newRefDate = new Date(viewDate - oneDay * 17)
      break
    case 2:
      // Multiple months, month resolution
      calView = {
        timeline: {
          type: 'month',
          size: 6,
          resolution: 'month'
          // eventList: true
        }
      }
      toastText = 'Multiple months'
      newRefDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 2, 1)
      break
    case 1:
      // Multiple years, year resolution
      calView = {
        timeline: {
          type: 'year',
          size: 6,
          resolution: 'year'
          // eventList: true
        }
      }
      toastText = 'Multiple years'
      newRefDate = new Date(currentDate.getFullYear() - 2, 0, 1)
      break
  }

  timer.value = setTimeout(() => {
    zoom.value = newZoom
    myView.value = calView
    myRefDate.value = newRefDate
    myCssClass.value = cssClass
    toastMessage.value = toastText
    isToastOpen.value = true
  }, 100)
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscEventcalendar
    class="md-demo-zoom-in-out"
    ref="calElm"
    :data="myEvents"
    :resources="myResources"
    :view="myView"
    :refDate="myRefDate"
    :class="myCssClass"
  >
    <template #header>
      <MbscCalendarNav />
      <div class="md-zoom-cont mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
        <MbscButton @click="changeView(1)" :disabled="zoom === 9" icon="material-zoom-in" />
        <MbscButton @click="changeView(-1)" :disabled="zoom === 1" icon="material-zoom-out" />
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.demo-zoom-in-out {
  height: 100%;
}

.md-zoom-cont .mbsc-button-icon {
  font-size: 24px;
}

.column-large .mbsc-timeline-column,
.column-large .mbsc-timeline-header-column,
.column-large .mbsc-timeline-day-month {
  width: 120px;
}

.column-medium .mbsc-timeline-column,
.column-medium .mbsc-timeline-header-column,
.column-medium .mbsc-timeline-day-month {
  width: 100px;
}
</style>
