<script setup lang="ts">
import {
  formatDate,
  getJson,
  MbscButton,
  MbscConfirm,
  MbscEventcalendar,
  MbscPage,
  MbscSelect,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import type {
  MbscCalendarEvent,
  MbscEventcalendarView,
  MbscEventClickEvent,
  MbscSelectedEventsChangeEvent
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const confirmCallback = ref<any>()
const confirmMessage = ref<string>('')
const eventTitles = ref<string[]>([])
const menuAnchor = ref<any>(null)
const menuAction = ref<string>('')
const menuOpen = ref<boolean>(false)
const myEvents = ref<MbscCalendarEvent[]>([])
const isConfirmOpen = ref<boolean>(false)
const isToastOpen = ref<boolean>(false)
const selectedEvents = ref<MbscCalendarEvent[]>([])
const toastMessage = ref<string>('')

const calRef = ref<any>()

const myView: MbscEventcalendarView = {
  agenda: {
    type: 'month'
  }
}

const menuData = [
  {
    text: 'Update',
    value: 'update'
  },
  {
    text: 'Delete',
    value: 'delete'
  }
]

function updateSelectedEvents() {
  const events: any =
    selectedEvents.value.length === 0 ? [selectedEvents.value] : selectedEvents.value
  let eventsToUpdate = [...myEvents.value]

  for (const event of events) {
    if (event.recurring) {
      const origEvent = event.original
      let exc = origEvent.recurringException || []
      const newEvent = event

      newEvent.recurring = undefined
      newEvent.color = 'orange'
      newEvent.id += '_' + formatDate('YYYY-MM-DD', event.start)
      eventsToUpdate = [...eventsToUpdate, newEvent]

      exc = [...exc, event.start]
      origEvent.recurringException = exc

      // update the event in the list
      const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id)
      eventsToUpdate.splice(index, 1, origEvent)
    } else {
      const newEv = event
      newEv.color = 'orange'
      const index = eventsToUpdate.findIndex((x) => x.id === newEv.id)
      eventsToUpdate.splice(index, 1, newEv)
    }
  }

  toastMessage.value = "All selected event's color changed to orange"
  isToastOpen.value = true

  myEvents.value = eventsToUpdate
  refreshSelectedEvents([])
}

function deleteSelectedEvents() {
  isConfirmOpen.value = true
  confirmMessage.value = getSelectedEventTitles(selectedEvents.value).join(', ')
  confirmCallback.value = (result: boolean) => {
    if (result) {
      let eventsToUpdate = [...myEvents.value]

      for (const event of selectedEvents.value) {
        if (event.recurring) {
          const origEvent = event.original!
          let exc: any = origEvent.recurringException || []
          exc = [...exc, event.start]
          origEvent.recurringException = exc

          // update the event in the list
          const index = eventsToUpdate.findIndex((x) => x.id === origEvent.id)
          eventsToUpdate.splice(index, 1, origEvent)
        } else {
          eventsToUpdate = eventsToUpdate.filter((ev) => ev.id !== event.id)
        }
      }

      myEvents.value = eventsToUpdate
      refreshSelectedEvents([])

      toastMessage.value = 'Deleted'
      isToastOpen.value = true
    }
    isConfirmOpen.value = false
  }
}

function selectAllEvents() {
  const selectedEvents = calRef.value.instance.getEvents()
  refreshSelectedEvents(selectedEvents)
  toastMessage.value = 'All events selected from view'
  isToastOpen.value = true
}

function resetSelection() {
  refreshSelectedEvents([])
  toastMessage.value = 'Selection cleared'
  isToastOpen.value = true
}

function handleToastClose() {
  isToastOpen.value = false
}

function handleConfirmClose() {
  isConfirmOpen.value = false
}

function handleEventDelete() {
  if (!isConfirmOpen.value) {
    deleteSelectedEvents()
    return false
  }
}

function handleEventRightClick(args: MbscEventClickEvent) {
  args.domEvent.preventDefault()
  menuAnchor.value = args.domEvent.target
  setTimeout(() => {
    menuOpen.value = true
  })
}

function handleSelectedEventsChange(args: MbscSelectedEventsChangeEvent) {
  if (args.events) {
    refreshSelectedEvents(args.events)
  }
}

function handleMenuChange(args: any) {
  menuAction.value = args.value
  if (args.value === 'update') {
    updateSelectedEvents()
  } else if (args.value === 'delete') {
    deleteSelectedEvents()
  }
}

function handleMenuClose() {
  menuAction.value = ''
  menuOpen.value = false
}

function getSelectedEventTitles(events: MbscCalendarEvent[]) {
  let titles: string[] = []

  for (const event of events) {
    titles = [...titles, event.title || '']
  }
  return titles
}

function refreshSelectedEvents(events: MbscCalendarEvent[]) {
  selectedEvents.value = events
  eventTitles.value = getSelectedEventTitles(events)
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )

  document.querySelector('.md-bulk-operations')!.addEventListener('keydown', (ev: any) => {
    if (!isConfirmOpen.value && (ev.keyCode === 8 || ev.keyCode === 46)) {
      deleteSelectedEvents()
    }
  })
})
</script>

<template>
  <MbscPage className="md-bulk-operations">
    <div class="mbsc-grid mbsc-no-padding">
      <div class="mbsc-row">
        <div class="mbsc-col-sm-9 mbsc-push-sm-3">
          <MbscEventcalendar
            className="md-bulk-operations-border"
            ref="calRef"
            :data="myEvents"
            :view="myView"
            :clickToCreate="true"
            :selectMultipleEvents="true"
            :selectedEvents="selectedEvents"
            @event-delete="handleEventDelete"
            @event-right-click="handleEventRightClick"
            @selected-events-change="handleSelectedEventsChange"
          />
          <MbscSelect
            :anchor="menuAnchor"
            :data="menuData"
            display="anchored"
            :isOpen="menuOpen"
            :inputProps="{ type: 'hidden' }"
            :touchUi="false"
            :value="menuAction"
            @change="handleMenuChange"
            @close="handleMenuClose"
          />
        </div>
        <div class="mbsc-col-sm-3 mbsc-pull-sm-9">
          <div class="mbsc-form-group">
            <div class="mbsc-button-group-block">
              <MbscButton @click="selectAllEvents">Select all this month</MbscButton>
              <MbscButton @click="resetSelection">Reset selection</MbscButton>
              <MbscButton @click="updateSelectedEvents">Update selected</MbscButton>
            </div>
          </div>
          <div class="mbsc-form-group-title">Currently selected</div>
          <div class="mbsc-padding md-selected-event-list">
            <ul>
              <li v-for="title in eventTitles" :key="title">{{ title }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <MbscConfirm
      title="Are you sure you want to delete the following events?"
      okText="Delete"
      :message="confirmMessage"
      :callback="confirmCallback"
      :isOpen="isConfirmOpen"
      @close="handleConfirmClose"
    />
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>

<style>
.mds-bulk-actions,
.mds-bulk-actions .mbsc-grid,
.mds-bulk-actions .mbsc-row,
.mds-bulk-actions .mbsc-col-sm-9,
.mds-bulk-actions .mbsc-col-sm-3 {
  height: 100%;
}

.mds-bulk-actions-calendar {
  border-left: 1px solid #ccc;
}

.mds-bulk-actions-event-list {
  overflow: auto;
  padding-top: 0;
  padding-bottom: 0;
}
</style>
