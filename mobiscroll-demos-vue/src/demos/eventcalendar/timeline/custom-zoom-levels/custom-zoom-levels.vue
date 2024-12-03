<script setup>
import { getJson, MbscButton, MbscEventcalendar, setOptions } from '@mobiscroll/vue'
import { computed, onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const zoomLevel = ref(4)
const refDate = ref(new Date())
refDate.value.setDate(refDate.value.getDate() - 10)

const myResources = [
  { color: '#e20000', id: 1, name: 'Resource A' },
  { color: '#76e083', id: 2, name: 'Resource B' },
  { color: '#4981d6', id: 3, name: 'Resource C' },
  { color: '#e25dd2', id: 4, name: 'Resource D' },
  { color: '#1dab2f', id: 5, name: 'Resource E' },
  { color: '#d6d145', id: 6, name: 'Resource F' }
]

const myView = computed(() => ({
  timeline: {
    currentTimeIndicator: true,
    zoomLevels: {
      [-4]: { type: 'year', size: 9, resolutionHorizontal: 'year' },
      [-3]: { type: 'month', size: 12, resolutionHorizontal: 'month' },
      [-2]: { type: 'week', size: 9, resolutionHorizontal: 'week' },
      [-1]: { type: 'week', size: 5, resolutionHorizontal: 'day' },
      0: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'large' },
      1: { type: 'week', size: 5, resolutionHorizontal: 'day', columnWidth: 'xlarge' },
      2: {
        type: 'day',
        size: 5,
        resolutionHorizontal: 'hour',
        timeCellStep: 360,
        timeLabelStep: 360
      },
      3: {
        type: 'day',
        size: 3,
        resolutionHorizontal: 'hour',
        timeCellStep: 180,
        timeLabelStep: 360
      },
      4: { type: 'day', size: 3, resolutionHorizontal: 'hour', timeCellStep: 30, timeLabelStep: 60 }
    }
  }
}))

const handleZoom = (zoom) => {
  const newZoomLevel = zoomLevel.value + zoom
  const viewDate = refDate.value

  const newRefDateMap = {
    [-4]: new Date(viewDate.getFullYear() - 4, 0, 1),
    [-3]: new Date(viewDate.getFullYear(), viewDate.getMonth() - 5, 1),
    [-2]: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 28),
    [-1]: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
    0: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
    1: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 14),
    2: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 2),
    3: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1),
    4: new Date(viewDate.getFullYear(), viewDate.getMonth(), viewDate.getDate() - 1)
  }

  zoomLevel.value = newZoomLevel
  refDate.value = newRefDateMap[newZoomLevel] || viewDate

  console.log('viewDate:', viewDate)
  console.log('refDate:', refDate.value)
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/timeline-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <div>
    <MbscButton @click="handleZoom(1)" :disabled="zoomLevel === 4">Zoom In</MbscButton>
    <MbscButton>{{ zoomLevel }}</MbscButton>
    <MbscButton @click="handleZoom(-1)" :disabled="zoomLevel === -4">Zoom Out</MbscButton>
    <MbscEventcalendar
      :view="myView"
      :data="myEvents"
      :resources="myResources"
      :ref-date="refDate"
      :zoomLevel="zoomLevel"
    />
  </div>
</template>

<style></style>
