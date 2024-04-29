<script setup>
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
import { ref } from 'vue'
import './searching-events-in-popup.css'

setOptions({
  // locale,
  // theme
})

const calEvents = ref([])
const isPopupOpen = ref(false)
const listEvents = ref([])
const searchInput = ref(null)
const selectedDate = ref(new Date())
const selectedEvent = ref([])

const timer = ref(null)

const inputRef = ref(null)

const calView = { agenda: { type: 'month' } }
const listView = { agenda: { type: 'year', size: 5 } }

function handleInputChange(ev) {
  const searchText = ev.target.value

  if (timer.value) {
    clearTimeout(timer.value)
    timer.value = null
  }

  timer.value = setTimeout(() => {
    if (searchText.length > 0) {
      getJson(
        'https://trial.mobiscroll.com/searchevents/?text=' + searchText,
        (data) => {
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

function handleInputFocus(ev) {
  if (ev.target.value.length > 0) {
    isPopupOpen.value = true
  }
}

function handlePageLoading(args) {
  const start = formatDate('YYYY-MM-DD', args.viewStart)
  const end = formatDate('YYYY-MM-DD', args.viewEnd)

  setTimeout(() => {
    getJson(
      'https://trial.mobiscroll.com/searchevents/?start=' + start + '&end=' + end,
      (data) => {
        calEvents.value = data
      },
      'jsonp'
    )
  })
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleEventClick(args) {
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
