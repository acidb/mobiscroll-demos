<script setup>
import { ref } from 'vue'
import {
  MbscEventcalendar,
  setOptions,
  getJson,
  MbscToast /* localeImport */
} from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents = ref([])
const toastMessage = ref('')
const isToastOpen = ref(false)

const myView = {
  agenda: { type: 'month' }
}

function handlePageLoading(args) {
  const year = args.month.getFullYear()
  const month = args.month.getMonth()

  getJson(
    'https://trial.mobiscroll.com/monthlyevents/?year=' + year + '&month=' + month + '&vers=5',
    (data) => {
      myEvents.value = data
      toastMessage.value = 'New events loaded'
      isToastOpen.value = true
    },
    'jsonp'
  )
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" @page-loading="handlePageLoading" />
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
/*<hidden>*/

.demo-load-events-on-demand {
  height: 100%;
}

/*</hidden>*/
</style>
