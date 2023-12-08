<script setup lang="ts">
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
  <MbscDatepicker display="inline" :controls="['date']" />
  <MbscDatepicker
    display="inline"
    :controls="['date']"
    :calendarSystem="jalaliCalendar"
    :locale="localeFa"
  />
  <MbscDatepicker
    display="inline"
    :controls="['date']"
    :calendarSystem="hijriCalendar"
    :locale="localeAr"
  />
</template>
