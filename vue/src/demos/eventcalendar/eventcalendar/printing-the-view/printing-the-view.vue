<script setup>
import { ref, onMounted } from 'vue'
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { print } from '@mobiscroll/print'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const calendarRef = ref(null)

function printView() {
  calendarRef.value.instance.print()
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/work-events/',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage>
    <MbscButton @click="printView()">Print calendar</MbscButton>
    <MbscEventcalendar ref="calendarRef" :drag="drag" :data="myEvents" :modules="[print]" />
  </MbscPage>
</template>
