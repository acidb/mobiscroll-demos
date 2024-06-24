<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscEventcalendar,
  MbscInput,
  MbscPage,
  MbscPopup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscPageLoadingEvent
} from '@mobiscroll/vue'
import { ref } from 'vue'
import './searching-events-in-popup.css'

setOptions({
  // locale,
  // theme
})

const calEvents = ref<MbscCalendarEvent[]>([])
const isPopupOpen = ref<boolean>(false)
const listEvents = ref<MbscCalendarEvent[]>([])
const searchInput = ref<any>(null)
const selectedDate = ref<any>(new Date())
const selectedEvent = ref<MbscCalendarEvent[]>([])

const timer = ref<any>(null)
const inputRef = ref<any>(null)

const calView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

const listView: MbscEventcalendarView = {
  agenda: {
    type: 'year',
    size: 5
  }
}

function handleInputChange(ev: any) {
  const text = ev.target.value

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }

  timer.value = setTimeout(() => {
    if (text.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?text=' + text,
        (data: MbscCalendarEvent[]) => {
          listEvents.value = data
          isPopupOpen.value = true
        },
        'jsonp'
      )
    } else {
      isPopupOpen.value = false
    }
  }, 200)
}

function handleInputFocus(ev: any) {
  if (ev.target.value.length > 0) {
    isPopupOpen.value = true
  }
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  const start = formatDate('YYYY-MM-DD', args.viewStart!)
  const end = formatDate('YYYY-MM-DD', args.viewEnd!)

  setTimeout(() => {
    getJson(
      'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
      (data: MbscCalendarEvent[]) => {
        calEvents.value = data
      },
      'jsonp'
    )
  })
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleEventClick(args: MbscEventClickEvent) {
  selectedDate.value = args.event.start
  selectedEvent.value = [args.event]
  isPopupOpen.value = false
}

function handlePopupInit() {
  setTimeout(() => {
    searchInput.value = inputRef.value.instance.nativeElement
  })
}
</script>

<template>
  <MbscPage>
    <MbscEventcalendar
      :clickToCreate="false"
      :data="calEvents"
      :dragToCreate="false"
      :dragToMove="false"
      :dragToResize="false"
      :selectMultipleEvents="true"
      :view="calView"
      :selectedEvents="selectedEvent"
      :selectedDate="selectedDate"
      @page-loading="handlePageLoading"
    >
      <template #header>
        <MbscCalendarNav />
        <div className="mds-search-bar mbsc-flex-1-0">
          <MbscInput
            autocomplete="off"
            inputStyle="box"
            placeholder="Search events"
            startIcon="material-search"
            ref="inputRef"
            @input="handleInputChange"
            @focus="handleInputFocus"
          />
        </div>
        <MbscCalendarPrev />
        <MbscCalendarToday />
        <MbscCalendarNext />
      </template>
    </MbscEventcalendar>
    <MbscPopup
      className="mds-search-popup"
      display="anchored"
      :showArrow="false"
      :showOverlay="false"
      :scrollLock="false"
      :contentPadding="false"
      :focusOnOpen="false"
      :focusOnClose="false"
      :anchor="searchInput"
      :focusElm="searchInput"
      :isOpen="isPopupOpen"
      @init="handlePopupInit"
      @close="handlePopupClose"
    >
      <MbscEventcalendar
        className="mds-search-results mbsc-popover-list"
        :view="listView"
        :data="listEvents"
        :showControls="false"
        @event-click="handleEventClick"
      />
    </MbscPopup>
  </MbscPage>
</template>
