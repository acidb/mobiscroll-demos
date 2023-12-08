<script setup>
import { ref } from 'vue'
import {
  MbscDatepicker,
  MbscPage,
  setOptions,
  MbscSegmentedGroup,
  MbscSegmented,
  MbscCalendarNav,
  MbscCalendarPrev,
  MbscCalendarNext
  /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myCalendarType = ref('week')
</script>

<template>
  <MbscDatepicker
    :controls="['calendar']"
    :calendarType="myCalendarType"
    :calendarSize="1"
    display="inline"
  >
    <template #header>
      <MbscCalendarNav class="custom-view-nav" />
      <div class="custom-view">
        <MbscSegmentedGroup v-model="myCalendarType">
          <MbscSegmented value="week" icon="material-date-range"></MbscSegmented>
          <MbscSegmented value="month" icon="material-event-note"></MbscSegmented>
        </MbscSegmentedGroup>
      </div>
      <MbscCalendarPrev />
      <MbscCalendarNext />
    </template>
  </MbscDatepicker>
</template>

<style>
.custom-view .mbsc-segmented .mbsc-icon {
  font-size: 20px;
}
</style>
