<script setup>
import { ref } from 'vue'
import {
  MbscDatepicker,
  setOptions,
  jalaliCalendar,
  hijriCalendar,
  localeFa,
  localeAr
} from '@mobiscroll/vue'

setOptions({
  // theme
})
</script>

<template>
  <MbscDatepicker display="inline" select="range" :controls="['calendar']" />
  <MbscDatepicker
    display="inline"
    select="range"
    :controls="['calendar']"
    :calendarSystem="jalaliCalendar"
    :locale="localeFa"
  />
  <MbscDatepicker
    display="inline"
    select="range"
    :controls="['calendar']"
    :calendarSystem="hijriCalendar"
    :locale="localeAr"
  />
</template>
