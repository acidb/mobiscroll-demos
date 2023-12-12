<script setup lang="ts">
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
  <MbscDatepicker display="inline" :controls="['calendar']" />
  <MbscDatepicker
    display="inline"
    :controls="['calendar']"
    :calendarSystem="jalaliCalendar"
    :locale="localeFa"
  />
  <MbscDatepicker
    display="inline"
    :controls="['calendar']"
    :calendarSystem="hijriCalendar"
    :locale="localeAr"
  />
</template>
