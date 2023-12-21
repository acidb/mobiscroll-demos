<script setup>
import { ref, onMounted } from 'vue'
import {
  MbscEventcalendar,
  MbscButton,
  MbscPage,
  setOptions,
  getJson
  /* localeImport */
} from '@mobiscroll/vue'
import { print } from '@mobiscroll/print'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const calendarRef = ref(null)
const myView = {
  schedule: {
    type: 'week'
  }
}

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
    <MbscButton @click="printView()">Print scheduler</MbscButton>
    <MbscEventcalendar
      ref="calendarRef"
      :drag="drag"
      :data="myEvents"
      :view="myView"
      :modules="[print]"
    />
  </MbscPage>
</template>
