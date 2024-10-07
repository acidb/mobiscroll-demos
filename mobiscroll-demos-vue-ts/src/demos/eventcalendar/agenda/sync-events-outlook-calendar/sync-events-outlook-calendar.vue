<script setup lang="ts">
import { outlookCalendarSync } from '@mobiscroll/calendar-integration'
import {
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscEventcalendar,
  MbscPage,
  MbscPopup,
  MbscSwitch,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscPageLoadingEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const calendarData = ref<any>({})
const calendarIds = ref<any>([])
const isLoggedIn = ref<boolean>(false)
const isLoading = ref<boolean>(false)
const isPopupOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const myAnchor = ref<any>(null)
const myCalendars = ref<any>([])
const myEvents = ref<MbscCalendarEvent[]>([])
const mySelectedDate = ref<any>(new Date())
const toastMessage = ref<string>('')

const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}
const buttonRef = ref<any>(null)
const startDate = ref<any>(null)
const endDate = ref<any>(null)
const timer = ref<any>(null)

function handleError(resp: any) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

function handlePopupClose() {
  isPopupOpen.value = false
}

function handleSelectedDateChange(args: any) {
  mySelectedDate.value = args.date
}

function handlePageLoading(args: MbscPageLoadingEvent) {
  clearTimeout(timer.value)
  startDate.value = args.viewStart
  endDate.value = args.viewEnd
  timer.value = setTimeout(() => {
    if (outlookCalendarSync.isSignedIn()) {
      isLoading.value = true
      outlookCalendarSync
        .getEvents(calendarIds.value, startDate.value, endDate.value)
        .then((events: MbscCalendarEvent[]) => {
          myEvents.value = events
          isLoading.value = false
        })
        .catch(handleError)
    }
  }, 200)
}

function toggleCalendars(ev: any, calendarId: string) {
  const checked = ev.target.checked
  calendarData.value[calendarId].checked = checked

  if (checked) {
    isLoading.value = true
    calendarIds.value = [...calendarIds.value, calendarId]
    outlookCalendarSync
      .getEvents([calendarId], startDate.value, endDate.value)
      .then((events) => {
        isLoading.value = false
        myEvents.value = [...myEvents.value, ...events]
      })
      .catch(handleError)
  } else {
    calendarIds.value = calendarIds.value.filter((id: string) => id !== calendarId)
    myEvents.value = myEvents.value.filter((item: any) => item.outlookCalendarId !== calendarId)
  }
}

function openPopup() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isPopupOpen.value = true
}

function navigate() {
  mySelectedDate.value = new Date()
}

function signIn() {
  if (!outlookCalendarSync.isSignedIn()) {
    outlookCalendarSync.signIn().catch((error: any) => {
      handleError(error)
    })
  }
}

function signOut() {
  outlookCalendarSync.signOut().catch((error: any) => {
    handleError(error)
  })
}

onMounted(() => {
  function onSignedIn() {
    isLoggedIn.value = true
    outlookCalendarSync
      .getCalendars()
      .then((calendars) => {
        const newCalendarIds = []
        const calData: any = {}

        calendars.sort((c: any) => (c.isDefaultCalendar ? -1 : 1))

        for (const c of calendars) {
          newCalendarIds.push(c.id)
          calData[c.id] = { name: c.summary, color: c.backgroundColor, checked: true }
        }

        calendarIds.value = newCalendarIds
        calendarData.value = calData
        myCalendars.value = calendars
        isLoading.value = true

        return outlookCalendarSync.getEvents(newCalendarIds, startDate.value, endDate.value)
      })
      .then((events) => {
        myEvents.value = events
        isLoading.value = false
      })
      .catch(handleError)
  }

  const onSignedOut = () => {
    isLoggedIn.value = false
    myCalendars.value = []
    calendarIds.value = []
    calendarData.value = {}
    myEvents.value = []
    isPopupOpen.value = false
  }

  // Init Outlook Client
  outlookCalendarSync.init({
    redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
    clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
    onSignedIn: onSignedIn,
    onSignedOut: onSignedOut
  })
})
</script>

<template>
  <MbscPage :className="'md-sync-events-outlook-cont' + (isLoading ? ' md-loading-events' : '')">
    <MbscEventcalendar
      :view="myView"
      :data="myEvents"
      :exclusiveEndDates="true"
      :selectedDate="mySelectedDate"
      @page-loading="handlePageLoading"
      @selected-date-change="handleSelectedDateChange"
    >
      <template #header>
        <MbscCalendarNav />
        <div :class="{ 'mds-loader': true, 'mds-loader-visible': isLoading }"></div>
        <div class="mbsc-flex mbsc-flex-1-0 mbsc-justify-content-end">
          <MbscButton v-if="isLoggedIn" ref="buttonRef" @click="openPopup">
            My Calendars
          </MbscButton>
          <MbscButton v-if="!isLoggedIn" @click="signIn" className="md-sync-events-outlook-button"
            >Sync my outlook calendars</MbscButton
          >
          <MbscButton @click="navigate">Today</MbscButton>
        </div>
        <MbscCalendarPrev />
        <MbscCalendarNext />
      </template>
    </MbscEventcalendar>
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :width="400"
      :touchUi="false"
      :showOverlay="false"
      :scrollLock="false"
      :contentPadding="false"
      :isOpen="isPopupOpen"
      @close="handlePopupClose"
    >
      <div class="mbsc-form-group-inset md-sync-events-outlook-inset">
        <div class="mbsc-form-group-title">My Calendars</div>
        <template v-for="cal in myCalendars" :key="cal.id">
          <MbscSwitch
            :label="cal.name"
            v-model="calendarData[cal.id].checked"
            @change="toggleCalendars($event, cal.id)"
          />
        </template>
      </div>
      <div class="mbsc-form-group-inset">
        <MbscButton className="md-sync-events-outlook-button mbsc-button-block" @click="signOut"
          >Log out of my account</MbscButton
        >
      </div>
    </MbscPopup>
  </MbscPage>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.mds-loader {
  width: 32px;
  height: 32px;
  border: 4px solid #8c8c8c;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: mds-loader-rotation 1s linear infinite;
  visibility: hidden;
}

.mds-loader-visible {
  visibility: visible;
}

@keyframes mds-loader-rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
