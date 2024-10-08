<script setup>
import { MbscEventcalendar, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const airBnB = 'https://img.mobiscroll.com/demos/air-bnb-icon.png'
const booking = 'https://img.mobiscroll.com/demos/booking-icon.png'
const makeMyTrip = 'https://img.mobiscroll.com/demos/make-my-trip-icon.png'

const myEvents = [
  {
    start: 'dyndatetime(y,m,d-18,12)',
    end: 'dyndatetime(y,m,d-15,12)',
    icon: airBnB,
    title: 'Mary Smith',
    color: '#fffa61'
  },
  {
    start: 'dyndatetime(y,m,d-7,12)',
    end: 'dyndatetime(y,m,d-1,12)',
    title: 'James Johnson',
    icon: airBnB,
    color: '#fffa61'
  },
  {
    start: 'dyndatetime(y,m,d-12,12)',
    end: 'dyndatetime(y,m,d-9,12)',
    title: 'Patricia Williams',
    icon: airBnB,
    color: '#fffa61'
  },
  {
    start: 'dyndatetime(y,m,d+3,12)',
    end: 'dyndatetime(y,m,d+5,12)',
    title: 'Michael Brown',
    icon: airBnB,
    color: '#fffa61'
  },
  {
    start: 'dyndatetime(y,m,d+10,12)',
    end: 'dyndatetime(y,m,d+11,12)',
    title: 'Jennifer Jones',
    icon: booking,
    color: '#ff9999'
  },
  {
    start: 'dyndatetime(y,m,d,12)',
    end: 'dyndatetime(y,m,d+3,12)',
    title: 'Robert Garcia',
    icon: booking,
    color: '#ff9999'
  },
  {
    start: 'dyndatetime(y,m,d+19,12)',
    end: 'dyndatetime(y,m,d+20,12)',
    title: 'Linda Miller',
    icon: booking,
    color: '#ff9999'
  },
  {
    start: 'dyndatetime(y,m,d+26,12)',
    end: 'dyndatetime(y,m,d+27,12)',
    title: 'John Davis',
    icon: booking,
    color: '#ff9999'
  },
  {
    start: 'dyndatetime(y,m,d-15,12)',
    end: 'dyndatetime(y,m,d-13,12)',
    title: 'Elizabeth Rodriguez',
    icon: makeMyTrip,
    color: '#a0efaa'
  },
  {
    start: 'dyndatetime(y,m,d+13,12)',
    end: 'dyndatetime(y,m,d+15,12)',
    title: 'David Martinez',
    icon: makeMyTrip,
    color: '#a0efaa'
  },
  {
    start: 'dyndatetime(y,m,d+16,12)',
    end: 'dyndatetime(y,m,d+18,12)',
    title: 'Barbara Wilson',
    icon: makeMyTrip,
    color: '#a0efaa'
  },
  {
    start: 'dyndatetime(y,m,d-9,12)',
    end: 'dyndatetime(y,m,d-8,12)',
    title: 'William Anderson',
    icon: makeMyTrip,
    color: '#a0efaa'
  },
  {
    start: 'dyndatetime(y,m,d+23,12)',
    end: 'dyndatetime(y,m,d+26,12)',
    title: 'Susan Taylor',
    icon: makeMyTrip,
    color: '#a0efaa'
  },
  {
    start: 'dyndatetime(y,m,d+6,12)',
    end: 'dyndatetime(y,m,d+9,12)',
    title: 'Richard Jackson',
    icon: airBnB,
    color: '#fffa61'
  }
]

const myView = {
  calendar: {
    type: 'month',
    eventDisplay: 'exact'
  }
}

const isToastOpen = ref(false)

function customDefaultEvent(args) {
  const start = new Date(args.start.setHours(12))
  const end = new Date(
    args.start.getFullYear(),
    args.start.getMonth(),
    args.start.getDate() + 1,
    12
  )
  return {
    title: 'New reservation',
    start,
    end
  }
}
</script>

<template>
  <MbscEventcalendar
    cssClass="mds-booking-calendar"
    :view="myView"
    :data="myEvents"
    :clickToCreate="true"
    :dragToCreate="true"
    :dragToMove="true"
    :dragToResize="true"
    :eventOverlap="false"
    :extendDefaultEvent="customDefaultEvent"
    @event-create-failed="isToastOpen = true"
    @event-update-failed="isToastOpen = true"
  >
    <template #labelContent="event">
      <div class="mbsc-flex mds-booking-item mbsc-align-items-center">
        <img
          v-if="event.original.icon"
          class="mds-booking-icon"
          draggable="false"
          :src="event.original.icon"
        />
        <span>{{ event.title }}</span>
      </div>
    </template>
  </MbscEventcalendar>
  <MbscToast
    message="Reservations cannot overlap"
    :isOpen="isToastOpen"
    @close="isToastOpen = false"
  />
</template>

<style>
.mds-booking-calendar .mbsc-calendar-day .mbsc-calendar-text {
  height: 30px;
  line-height: 30px;
  margin: 0 0.2em 0.2em 0.3em;
}

.mds-booking-item {
  font-size: 16px;
}

.mds-booking-icon {
  margin-right: 8px;
  width: 24px;
  height: 24px;
}
</style>
