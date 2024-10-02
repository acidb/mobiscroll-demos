<script setup>
import {
  formatDate,
  getJson,
  MbscEventcalendar,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const oneDay = 60000 * 60 * 24
const totalRevenue = ref(0)
const sortColumn = ref('')
const sortDirection = ref('')
const tempDay = ref(null)

const myResources = ref([
  {
    id: 1,
    name: 'Horizon',
    seats: 1200,
    color: '#4a4a4a',
    price: 1000
  },
  {
    id: 2,
    name: 'Apex Hall',
    seats: 90,
    color: '#fdf500',
    price: 600
  },
  {
    id: 3,
    name: 'Jade Room',
    seats: 700,
    color: '#00aaff',
    price: 900
  },
  {
    id: 4,
    name: 'Dome Arena',
    seats: 850,
    color: '#239a21',
    price: 750
  },
  {
    id: 5,
    name: 'Forum Plaza',
    seats: 900,
    color: '#8f1ed6',
    price: 700
  },
  {
    id: 6,
    name: 'Gallery',
    seats: 300,
    color: '#0077b6',
    price: 650
  },
  {
    id: 7,
    name: 'Icon Hall',
    seats: 450,
    color: '#e63946',
    price: 850
  },
  {
    id: 8,
    name: 'Broadway',
    seats: 250,
    color: '#ff0101',
    price: 800
  },
  {
    id: 9,
    name: 'Central Hub',
    seats: 400,
    color: '#01adff',
    price: 1100
  },
  {
    id: 10,
    name: 'Empire Hall',
    seats: 550,
    color: '#ff4600',
    price: 950
  }
])

const myEvents = ref()

const calendarElm = ref(null)

const myView = {
  timeline: {
    type: 'month'
  }
}

function getSortArrow(column, day = null) {
  if (sortColumn.value === column && day === tempDay.value) {
    return sortDirection.value === 'asc' ? 'asc' : sortDirection.value === 'desc' ? 'desc' : 'def'
  }
  return 'def'
}

function sortResources(column, day = null) {
  if (sortColumn.value === column && day === tempDay.value) {
    sortDirection.value =
      sortDirection.value === 'asc' ? 'desc' : sortDirection.value === 'desc' ? 'def' : 'asc'
  } else {
    sortColumn.value = column
    sortDirection.value = 'asc'
  }
  tempDay.value = day

  const endOfDay = day !== null ? day + 86400000 : null

  myResources.value.forEach((resource) => {
    let busyHours = 0
    if (day !== null) {
      busyHours = myEvents.value.reduce((total, event) => {
        if (event.resource === resource.id) {
          const eventStart = Math.max(day, new Date(event.start).getTime())
          const eventEnd = Math.min(endOfDay, new Date(event.end).getTime())
          return eventStart < eventEnd ? total + (eventEnd - eventStart) / (1000 * 60 * 60) : total
        }
        return total
      }, 0)
    }
    resource.busyHours = day !== null ? busyHours - 24 : 0
  })

  myResources.value.sort((a, b) => {
    if (sortDirection.value === 'asc') {
      return a[column] > b[column] ? 1 : -1
    }
    if (sortDirection.value === 'desc') {
      return a[column] < b[column] ? 1 : -1
    }
    return a.id - b.id
  })

  // cause rendering free spaces !??!
  myResources.value = [...myResources.value]
}

function getUTCDateOnly(d) {
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())
}

function getDayDiff(d1, d2) {
  return Math.round((getUTCDateOnly(d2) - getUTCDateOnly(d1)) / oneDay) + 1
}

function getRevenue(resource) {
  if (calendarElm.value) {
    let days = 0
    for (const event of calendarElm.value.instance.getEvents()) {
      if (event.resource === resource.id) {
        days += getDayDiff(new Date(event.start), new Date(event.end))
      }
    }
    return days * resource.price
  } else {
    return 0
  }
}

function getOccuppancy(data) {
  const events = data.events
  let occuppancy = 0
  if (events) {
    var resourceIds = []
    var nr = 0
    for (const event of events) {
      if (resourceIds.indexOf(event.resource) < 0) {
        nr++
        resourceIds = [...resourceIds, event.resource]
      }
    }
    occuppancy = ((nr * 100) / myResources.value.length).toFixed(0)
  }
  return occuppancy
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/multiday-events/',
    (events) => {
      myEvents.value = events
      setTimeout(function () {
        myResources.value.forEach(function (resource) {
          resource.revenue = getRevenue(resource)
        })
        for (let i = 0; i < myResources.value.length; i++) {
          totalRevenue.value += myResources.value[i].revenue
        }
      })
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    ref="calendarElm"
    className="mds-resource-details"
    :view="myView"
    :data="myEvents"
    :resources="myResources"
  >
    <template #resourceHeader>
      <div class="mds-resource-details-title">
        <div
          :class="[
            'mds-resource-header',
            'mds-resource-details-name',
            'mds-resource-sort-' + getSortArrow('name')
          ]"
          @click="sortResources('name')"
        >
          Room
        </div>
        <div
          :class="[
            'mds-resource-header',
            'mds-resource-details-seats',
            'mds-resource-sort-' + getSortArrow('seats')
          ]"
          @click="sortResources('seats')"
        >
          Capacity
        </div>
        <div
          :class="[
            'mds-resource-header',
            'mds-resource-details-price',
            'mds-resource-sort-' + getSortArrow('price')
          ]"
          @click="sortResources('price')"
        >
          Price/day
        </div>
      </div>
    </template>

    <template #resource="resource">
      <div class="mds-resource-details-cont">
        <div class="mds-resource-header mds-resource-details-name">{{ resource.name }}</div>
        <div class="mds-resource-header mds-resource-details-seats">
          {{ resource.seats + ' seats' }}
        </div>
        <div class="mds-resource-header mds-resource-details-seats">{{ '$' + resource.price }}</div>
      </div>
    </template>

    <template #sidebar="resource">
      <div class="mds-resource-details-sidebar">{{ resource.revenue }}</div>
    </template>

    <template #resourceFooter>
      <div class="mds-resource-details-footer mds-resource-details-occuppancy">Occuppancy</div>
    </template>

    <template #sidebarHeader>
      <div
        :class="[
          'mds-resource-details-sidebar-header',
          'mds-resource-sort-' + getSortArrow('revenue')
        ]"
        @click="sortResources('revenue')"
      >
        Revenue
      </div>
    </template>

    <template #day="data">
      <div
        :class="[
          'mds-date-header-day-name',
          'mds-resource-sort-' + getSortArrow('busyHours', data.date.getTime())
        ]"
        @click="sortResources('busyHours', data.date.getTime())"
      >
        <span>{{ formatDate('DD DDD', data.date) }}</span>
      </div>
    </template>

    <template #dayFooter="data">
      <div class="mds-resource-details-footer mds-resource-details-footer-day">
        {{ getOccuppancy(data) }}%
      </div>
    </template>

    <template #sidebarFooter>
      <div class="mds-resource-details-footer mds-resource-details-total">${{ totalRevenue }}</div>
    </template>
  </MbscEventcalendar>
</template>

<style>
/* Sorting */

.mds-resource-details-title .mds-resource-header,
.mds-date-header-day-name,
.mds-resource-details-sidebar-header {
  cursor: pointer;
}

.mds-resource-sort-asc::after {
  content: '↑';
}

.mds-resource-sort-desc::after {
  content: '↓';
}

.mds-resource-sort-asc::after,
.mds-resource-sort-desc::after,
.mds-resource-sort-def::after {
  position: absolute;
  opacity: 0.5;
  right: 8px;
}

.mds-resource-sort-def::after {
  content: '‹›';
  right: 5px;
  top: 12px;
  transform: translateY(-50%) rotate(90deg);
}

.mds-date-header-day-name span {
  font-size: 14px;
  line-height: 25px;
  margin-left: 7px;
}

.mds-resource-sort-def:hover::after,
.mds-resource-sort-asc:hover::after,
.mds-resource-sort-desc:hover::after {
  opacity: 1;
}

.mds-date-header-day-name.mds-resource-sort-asc::after,
.mds-date-header-day-name.mds-resource-sort-desc::after {
  font-size: 14px;
  top: 12px;
  transform: translateY(-50%);
}

.mds-date-header-day-name,
.mds-resource-header,
.mds-resource-details-sidebar-header {
  position: relative;
}

.mds-resource-details-seats {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mbsc-timeline-resource-header-cont.mbsc-ios-dark .mds-resource-details-seats,
.mbsc-timeline-resource-header-cont.mbsc-material-dark .mds-resource-details-seats,
.mbsc-timeline-resource-header-cont.mbsc-windows-dark .mds-resource-details-seats,
.mbsc-timeline-resource.mbsc-ios-dark .mds-resource-details-seats,
.mbsc-timeline-resource.mbsc-material-dark .mds-resource-details-seats,
.mbsc-timeline-resource.mbsc-windows-dark .mds-resource-details-seats {
  border-left: 1px solid #333;
  border-right: 1px solid #333;
}

/* Header */

.mds-resource-details .mbsc-timeline-resource-col {
  width: 335px;
}

.mds-resource-details .mbsc-timeline-resource-header,
.mds-resource-details .mbsc-timeline-resource-title,
.mds-resource-details .mbsc-timeline-resource-footer,
.mds-resource-details .mbsc-timeline-sidebar-header {
  padding: 0;
}

.mds-resource-details .mbsc-timeline-resource-title {
  height: 100%;
}

.mds-resource-details-cont {
  line-height: 50px;
  height: 100%;
}

.mds-resource-header {
  display: inline-block;
  height: 100%;
  padding: 0 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  vertical-align: top;
}

.mds-resource-details-name {
  width: 120px;
}

.mds-resource-details-seats,
.mds-resource-details-price {
  width: 106px;
}

.mds-resource-details-seats {
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
}

.mds-resource-details-title {
  font-weight: 600;
  line-height: 26px;
}

.mds-resource-details-sidebar-header {
  line-height: 26px;
  padding: 0 5px;
}

.mds-resource-details .mbsc-timeline-day {
  width: 144px;
}

.mds-resource-details-sidebar {
  line-height: 36px;
  text-align: center;
}

/* Footer */

.mds-resource-details-occuppancy {
  font-size: 15px;
  text-align: right;
  background-color: rgba(150, 150, 150, 0.1);
  padding-right: 15px;
}

.mds-resource-details-footer {
  line-height: 50px;
}

.mds-resource-details-total {
  font-size: 18px;
  text-align: center;
  line-height: 36px;
}

.mds-resource-details-footer-day {
  font-size: 15px;
  font-weight: 600;
  text-align: center;
  background: rgba(150, 150, 150, 0.1);
  padding: 0 5px;
}

.mds-resource-details .mbsc-timeline-sidebar-footer {
  background-color: rgba(150, 150, 150, 0.1);
  border-top-color: #5a0101;
  color: #8c0000;
}

.mds-resource-details .mbsc-timeline-sidebar-col {
  width: 98px;
}

@supports (overflow: clip) {
  .mds-resource-details.mbsc-ltr .mbsc-schedule-event-inner {
    left: 280px;
  }
  .mds-resource-details.mbsc-rtl .mbsc-schedule-event-inner {
    right: 280px;
  }
}
</style>
