<script setup lang="ts">
import { ref } from 'vue'
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscDatepicker
    :controls="['calendar']"
    :showWeekNumbers="true"
    :showOuterDays="true"
    calendarScroll="horizontal"
    display="inline"
  />
</template>
