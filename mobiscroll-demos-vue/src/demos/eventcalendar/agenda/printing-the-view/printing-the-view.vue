<script setup>
import { print } from '@mobiscroll/print'
import {
  getJson,
  MbscButton,
  MbscEventcalendar,
  MbscPage,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'
import './printing-the-view.css'

setOptions({
  // locale,
  // theme
})

const inst = ref(null)
const myEvents = ref([])

const myView = {
  agenda: {
    type: 'month'
  }
}

function printView() {
  inst.value.instance.print()
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
  <MbscPage className="mds-full-height">
    <div className="mds-full-height mbsc-flex-col">
      <div className="mbsc-flex-none">
        <MbscButton @click="printView()" startIcon="print"> Print agenda </MbscButton>
      </div>
      <div className="mds-overflow-hidden mbsc-flex-1-1">
        <MbscEventcalendar ref="inst" :data="myEvents" :view="myView" :modules="[print]" />
      </div>
    </div>
  </MbscPage>
</template>
