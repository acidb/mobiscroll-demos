<script setup>
import { ref } from 'vue'
import { MbscDatepicker, momentTimezone, setOptions /* localeImport */ } from '@mobiscroll/vue'
import * as moment from 'moment-timezone'

setOptions({
  // locale,
  // theme
})

const selected = ref()
</script>

<template>
  <MbscDatepicker
    :controls="['datetime']"
    v-model="selected"
    dataTimezone="utc"
    displayTimezone="local"
    label="Select Date &amp; Time in Display Timezone"
    inputStyle="outline"
    labelStyle="stacked"
  />
  <div class="mbsc-padding">
    <p v-if="selected">
      Selected date is returned in Data Timezone<br />
      <code>{{ selected }}</code>
    </p>
  </div>
</template>
