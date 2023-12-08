<script setup>
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, getJson /* localeImport */ } from '@mobiscroll/vue'

const myEvents = ref([])
const myTheme = ref('material') // can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', it will automatically be set based on the platform
const myThemeVariant = ref('dark') // can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme

const myView = {
  schedule: { type: 'week' }
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

<template>
  <MbscEventcalendar
    :drag="drag"
    :view="myView"
    :data="myEvents"
    :theme="myTheme"
    :themeVariant="myThemeVariant"
  />
</template>
