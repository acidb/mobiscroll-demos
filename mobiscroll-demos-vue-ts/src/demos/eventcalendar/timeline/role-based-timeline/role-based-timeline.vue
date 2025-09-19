<script setup lang="ts">
import { MbscEventcalendar, setOptions /* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView, MbscResource } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const myView: MbscEventcalendarView = {}

const myEvents = ref<MbscCalendarEvent[]>([])

const myResources = ref<MbscResource[]>([])
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" :resources="myResources" />
</template>
