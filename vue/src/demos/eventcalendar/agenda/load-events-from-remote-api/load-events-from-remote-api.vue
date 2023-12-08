<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])

const myView = {
  agenda: { type: 'month' }
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template><MbscEventcalendar :drag="drag" :view="myView" :data="myEvents" /></template>

<style>
/*<hidden>*/

.demo-load-events-from-remote-api {
  height: 100%;
}

/*</hidden>*/
</style>
