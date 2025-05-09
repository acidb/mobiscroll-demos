<script setup>
import { outlookCalendarSync } from '@mobiscroll/calendar-integration'
import {
  MbscButton,
  MbscCalendarNav,
  MbscCalendarNext,
  MbscCalendarPrev,
  MbscCalendarToday,
  MbscConfirm,
  MbscEventcalendar,
  MbscPage,
  MbscSwitch,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const isEditable = ref(false)
const isLoggedIn = ref(false)
const isLoading = ref(false)
const isHidden = ref(true)
const calendarIds = ref([])
const myCalendars = ref([])
const startDate = ref(null)
const endDate = ref(null)
const debounce = ref(null)
const calendarData = ref({})
const primaryCalendarId = ref('')
const toastMessage = ref('')
const isToastOpen = ref(false)
const confirmTitle = ref('')
const confirmMessage = ref('')
const confirmOkText = ref('')
const isConfirmOpen = ref(false)
const confirmCallback = ref(null)

const myView = {
  schedule: { type: 'week' }
}

function myDefaultEvent() {
  return { color: calendarData.value[primaryCalendarId.value].color }
}

function onError(resp) {
  toastMessage.value = resp.error ? resp.error : resp.result.error.message
  isToastOpen.value = true
}

function toggleCalendars(ev, calendarId) {
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
      .catch(onError)
  } else {
    calendarIds.value = calendarIds.value.filter((id) => id !== calendarId)
    myEvents.value = myEvents.value.filter((item) => item.outlookCalendarId !== calendarId)
  }
}

function logOut() {
  outlookCalendarSync.signOut().catch((error) => {
    onError(error)
  })
}

function logIn() {
  if (!outlookCalendarSync.isSignedIn()) {
    outlookCalendarSync.signIn().catch((error) => {
      onError(error)
    })
  }
}

function handlePageLoading(args) {
  clearTimeout(debounce.value)
  startDate.value = args.viewStart
  endDate.value = args.viewEnd
  debounce.value = setTimeout(() => {
    if (outlookCalendarSync.isSignedIn()) {
      isLoading.value = true
      outlookCalendarSync
        .getEvents(calendarIds.value, startDate.value, endDate.value)
        .then((events) => {
          isLoading.value = false
          myEvents.value = events
        })
        .catch(onError)
    }
  }, 200)
}

function handleEventCreate(args) {
  if (outlookCalendarSync.isSignedIn()) {
    const event = args.event

    outlookCalendarSync
      .addEvent(primaryCalendarId.value, event)
      .then((newEvent) => {
        newEvent.color = event.color
        myEvents.value = [...myEvents.value.filter((item) => item.id !== event.id), newEvent]
        toastMessage.value =
          'Event created in "' + calendarData.value[primaryCalendarId.value].name + '" calendar'
        isToastOpen.value = true
      })
      .catch((error) => {
        myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
        onError(error)
      })
  }
}
function handleEventUpdate(args) {
  if (outlookCalendarSync.isSignedIn()) {
    confirmTitle.value = 'Are you sure you want to update this event?'
    confirmMessage.value = 'This action will affect your Outlook Calendar event.'
    confirmOkText.value = 'Update'
    confirmCallback.value = function (result) {
      const event = args.event
      if (result) {
        const calendarId = event.outlookCalendarId
        outlookCalendarSync
          .updateEvent(calendarId, event)
          .then(() => {
            myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
            toastMessage.value =
              'Event updated on "' + calendarData.value[calendarId].name + '" calendar'
            isToastOpen.value = true
          })
          .catch((error) => {
            myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
            myEvents.value = [
              ...myEvents.value.filter((item) => item.id !== event.id),
              args.oldEvent
            ]
            onError(error)
          })
      } else {
        myEvents.value = [...myEvents.value.filter((item) => item.id !== event.id), args.oldEvent]
      }
    }
  }
  isConfirmOpen.value = true
}
function handleEventDelete(args) {
  if (outlookCalendarSync.isSignedIn()) {
    confirmTitle.value = 'Are you sure you want to delete this event?'
    confirmMessage.value = 'This action will remove the event from your Outlook Calendar as well.'
    confirmOkText.value = 'Delete'
    confirmCallback.value = function (result) {
      if (result) {
        const event = args.event
        const calendarId = event.outlookCalendarId
        outlookCalendarSync
          .deleteEvent(calendarId, event)
          .then(() => {
            myEvents.value = myEvents.value.filter((item) => item.id !== event.id)
            toastMessage.value =
              'Event deleted from "' + calendarData.value[calendarId].name + '" calendar'
            isToastOpen.value = true
          })
          .catch(onError)
      }
    }
    isConfirmOpen.value = true
  }
  return false
}

function handleToastClose() {
  isToastOpen.value = false
}

function handleConfirmClose() {
  isConfirmOpen.value = false
}

onMounted(() => {
  function onSignedIn() {
    isLoggedIn.value = true
    outlookCalendarSync
      .getCalendars()
      .then((calendars) => {
        calendars.sort((c) => (c.isDefaultCalendar ? -1 : 1))

        const calData = {}
        const primaryCalId = calendars[0].id

        for (const c of calendars) {
          calData[c.id] = {
            name: c.name,
            color: c.hexColor,
            checked: c.id === primaryCalId
          }
        }

        calendarIds.value = [primaryCalId]
        primaryCalendarId.value = primaryCalId
        calendarData.value = calData
        myCalendars.value = calendars
        isLoading.value = true

        return outlookCalendarSync.getEvents([primaryCalId], startDate.value, endDate.value)
      })
      .then((events) => {
        myEvents.value = events
        isLoading.value = false
      })
      .catch(onError)
  }

  const onSignedOut = () => {
    isLoggedIn.value = false
    myCalendars.value = []
    calendarIds.value = []
    calendarData.value = {}
    myEvents.value = []
  }

  isHidden.value = false

  // Init outlook client
  outlookCalendarSync.init({
    clientId: '<YOUR_OUTLOOK_CLIENT_ID>',
    redirectUri: '<YOUR_OUTLOOK_REDIRECT_URI>',
    onSignedIn: onSignedIn,
    onSignedOut: onSignedOut
  })
})
</script>

<template>
  <MbscPage className="md-sync-events-outlook-cont" :class="{ 'md-loading-events': isLoading }">
    <div :class="{ 'md-sync-events-outlook-menu': true, 'mbsc-hidden': isHidden }">
      <template v-if="!isLoggedIn">
        <div class="mbsc-form-group-inset mbsc-align-center" :aria-hidden="isLoggedIn">
          <p class="mbsc-italic mbsc-txt-muted">
            Log into your Outlook account to view and edit your Outlook Calendar events
          </p>
          <MbscButton @click="logIn()" className="mbsc-reset md-sync-events-outlook-button">
            Sign in with Outlook
          </MbscButton>
        </div>
      </template>
      <template v-if="isLoggedIn">
        <div :aria-hidden="!isLoggedIn">
          <div class="mbsc-form-group-inset mbsc-align-center">
            <p class="mbsc-italic mbsc-txt-muted">
              Editing events sync back to your calendar when enabled. You'll be asked for
              confirmation on every action.
            </p>
          </div>
          <div class="mbsc-form-group-inset">
            <MbscSwitch label="Enable editing" v-model="isEditable" />
          </div>
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
            <MbscButton className="mbsc-button-block" @click="logOut()">
              Log out of my account
            </MbscButton>
          </div>
        </div>
      </template>
    </div>
    <div class="md-sync-events-outlook-calendar" :class="{ 'md-loading-events': isLoading }">
      <div class="md-sync-events-overlay"></div>
      <MbscEventcalendar
        :view="myView"
        :data="myEvents"
        :exclusiveEndDates="true"
        :extendDefaultEvent="myDefaultEvent"
        :clickToCreate="isEditable"
        :dragToCreate="isEditable"
        :dragToMove="isEditable"
        :dragToResize="isEditable"
        @page-loading="handlePageLoading"
        @event-create="handleEventCreate"
        @event-update="handleEventUpdate"
        @event-deleted="handleEventDelete"
      >
        <template #header>
          <MbscCalendarNav />
          <div class="md-spinner">
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
            <div class="md-spinner-blade"></div>
          </div>
          <div class="md-outlook-calendar-header">
            <MbscCalendarPrev />
            <MbscCalendarToday />
            <MbscCalendarNext />
          </div>
        </template>
      </MbscEventcalendar>
    </div>
  </MbscPage>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  <MbscConfirm
    :title="confirmTitle"
    :message="confirmMessage"
    :okText="confirmOkText"
    :isOpen="isConfirmOpen"
    :callback="confirmCallback"
    @close="handleConfirmClose"
  />
</template>

<style>
.md-sync-events-outlook-cont.mbsc-page {
  display: flex;
  height: 600px;
}

.md-sync-events-outlook-menu {
  flex: 0 0 350px;
  height: 100%;
  overflow: auto;
}

.md-sync-events-outlook-calendar {
  flex: 1 1 auto;
  border-left: 1px solid #ccc;
}

.md-outlook-calendar-header {
  flex: 1 0 auto;
  display: flex;
  justify-content: flex-end;
}

.md-sync-events-outlook-button.mbsc-button {
  text-transform: capitalize;
}

.md-sync-events-outlook-inset {
  margin-bottom: 0;
}

@media (max-width: 800px) {
  .md-sync-events-outlook-cont.mbsc-page {
    display: block;
    height: auto;
  }
}

/* loading spinner and overlay */

.md-loading-events .md-sync-events-overlay {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.md-spinner {
  visibility: hidden;
  position: relative;
  width: 20px;
  height: 20px;
}

.md-loading-events .md-spinner {
  visibility: visible;
}

.md-spinner .md-spinner-blade {
  position: absolute;
  left: 44.5%;
  top: 37%;
  width: 10%;
  height: 25%;
  border-radius: 50%/20%;
  background-color: #8c8c8c;
  -webkit-animation: md-spinner-fade 1s linear infinite;
  animation: md-spinner-fade 1s linear infinite;
  -webkit-animation-play-state: paused;
  animation-play-state: paused;
}

.md-spinner .md-spinner-blade:nth-child(1) {
  -webkit-animation-delay: -1.66667s;
  animation-delay: -1.66667s;
  -webkit-transform: rotate(30deg) translate(0, -150%);
  transform: rotate(30deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(2) {
  -webkit-animation-delay: -1.58333s;
  animation-delay: -1.58333s;
  -webkit-transform: rotate(60deg) translate(0, -150%);
  transform: rotate(60deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(3) {
  -webkit-animation-delay: -1.5s;
  animation-delay: -1.5s;
  -webkit-transform: rotate(90deg) translate(0, -150%);
  transform: rotate(90deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(4) {
  -webkit-animation-delay: -1.41667s;
  animation-delay: -1.41667s;
  -webkit-transform: rotate(120deg) translate(0, -150%);
  transform: rotate(120deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(5) {
  -webkit-animation-delay: -1.33333s;
  animation-delay: -1.33333s;
  -webkit-transform: rotate(150deg) translate(0, -150%);
  transform: rotate(150deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(6) {
  -webkit-animation-delay: -1.25s;
  animation-delay: -1.25s;
  -webkit-transform: rotate(180deg) translate(0, -150%);
  transform: rotate(180deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(7) {
  -webkit-animation-delay: -1.16667s;
  animation-delay: -1.16667s;
  -webkit-transform: rotate(210deg) translate(0, -150%);
  transform: rotate(210deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(8) {
  -webkit-animation-delay: -1.08333s;
  animation-delay: -1.08333s;
  -webkit-transform: rotate(240deg) translate(0, -150%);
  transform: rotate(240deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(9) {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
  -webkit-transform: rotate(270deg) translate(0, -150%);
  transform: rotate(270deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(10) {
  -webkit-animation-delay: -0.91667s;
  animation-delay: -0.91667s;
  -webkit-transform: rotate(300deg) translate(0, -150%);
  transform: rotate(300deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(11) {
  -webkit-animation-delay: -0.83333s;
  animation-delay: -0.83333s;
  -webkit-transform: rotate(330deg) translate(0, -150%);
  transform: rotate(330deg) translate(0, -150%);
}

.md-spinner .md-spinner-blade:nth-child(12) {
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
  -webkit-transform: rotate(360deg) translate(0, -150%);
  transform: rotate(360deg) translate(0, -150%);
}

.md-loading-events .md-spinner-blade {
  -webkit-animation-play-state: running;
  animation-play-state: running;
}

@-webkit-keyframes md-spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}

@keyframes md-spinner-fade {
  0% {
    opacity: 0.85;
  }
  50% {
    opacity: 0.25;
  }
  100% {
    opacity: 0.25;
  }
}
</style>
