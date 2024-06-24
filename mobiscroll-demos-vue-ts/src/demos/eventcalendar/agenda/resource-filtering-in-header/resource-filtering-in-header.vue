<script setup lang="ts">
import {
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'

import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const filteredEvents = ref<MbscCalendarEvent[]>([])
const myEvents = ref<MbscCalendarEvent[]>([])
const selectedResources = ref<string[]>(['1'])
const isToastOpen = ref<boolean>(false)
const toastMessage = ref<string>('')

const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

const myResources: MbscResource[] = [
  {
    id: '1',
    name: 'Barry',
    color: '#328e39',
    img: 'https://img.mobiscroll.com/demos/m1.png',
    checked: true
  },
  {
    id: '2',
    name: 'Hortense',
    color: '#00aabb',
    img: 'https://img.mobiscroll.com/demos/f1.png',
    checked: false
  },
  {
    id: '3',
    name: 'Carl',
    color: '#ea72c0',
    img: 'https://img.mobiscroll.com/demos/m2.png',
    checked: false
  }
]

function handleToastClose() {
  isToastOpen.value = false
}

function handleChange(ev: any) {
  const value = ev.target.value
  const checked = ev.target.checked
  const name = document.querySelector('.mds-header-filter-name-' + value)

  filterEvents()
  toastMessage.value =
    (checked ? 'Showing ' : 'Hiding ') + (name ? name.textContent : '') + ' events'
  isToastOpen.value = true
}

function filterEvents() {
  const evs = []
  for (const value of myEvents.value) {
    const item = value
    if (selectedResources.value.indexOf('' + item.resource) > -1) {
      evs.push(item)
    }
  }
  filteredEvents.value = evs
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/filter-resource-events/',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
      filterEvents()
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-custom-header-filtering"
    :view="myView"
    :data="filteredEvents"
    :resources="myResources"
  >
    <template #header>
      <MbscCalendarNav class="mds-header-filter-nav" />
      <div class="mds-header-filter-controls">
        <MbscSegmentedGroup select="multiple" v-model="selectedResources" @change="handleChange">
          <MbscSegmented v-for="res in myResources" :value="res.id" :key="res.id">
            <img class="mds-header-filter-img" :src="res.img" />
            <span :class="'mds-header-filter-name mds-header-filter-name-' + res.id">
              {{ res.name }}
            </span>
          </MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarToday />
      <MbscCalendarNext />
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.mds-header-filter-controls {
  flex: 1 0 auto;
  display: flex;
  justify-content: center;
}

.mds-custom-header-filtering .mbsc-segmented {
  max-width: 400px;
  margin: 0 auto;
  flex: 1 0 auto;
}

.mds-header-filter-img {
  width: 25px;
}

.mds-header-filter-name {
  margin-left: 10px;
}

.mds-header-filter-nav {
  width: 200px;
}

.mds-header-filter-controls .mbsc-segmented-button.mbsc-selected {
  color: #fff;
}

.mds-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-material,
.mds-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-selected.mbsc-windows,
.mds-custom-header-filtering .mbsc-segmented-item:first-child .mbsc-segmented-selectbox-inner {
  background: #328e39;
}

.mds-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-material,
.mds-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-selected.mbsc-windows,
.mds-custom-header-filtering .mbsc-segmented-item:nth-child(2) .mbsc-segmented-selectbox-inner {
  background: #00aabb;
}

.mds-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-material,
.mds-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-selected.mbsc-windows,
.mds-custom-header-filtering .mbsc-segmented-item:nth-child(3) .mbsc-segmented-selectbox-inner {
  background: #ea72c0;
}
</style>
