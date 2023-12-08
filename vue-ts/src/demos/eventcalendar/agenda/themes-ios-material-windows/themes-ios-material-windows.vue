<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, getJson /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

const myEvents = ref<MbscCalendarEvent[]>([])
const myTheme = ref<string>('material') // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
const myThemeVariant = ref<string>('dark') // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

const myView: MbscEventcalendarView = {
  agenda: { type: 'month' }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events: MbscCalendarEvent[]) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscEventcalendar
    :drag="drag"
    :view="myView"
    :data="myEvents"
    :theme="myTheme"
    :themeVariant="myThemeVariant"
  />
</template>
