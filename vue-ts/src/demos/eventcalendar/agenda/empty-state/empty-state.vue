<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { MbscEventcalendar, setOptions, getJson, MbscButton, MbscToast/* localeImport */ } from '@mobiscroll/vue'
import type { MbscCalendarEvent, MbscEventcalendarView } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myEvents: MbscCalendarEvent[] = [{
    title: "Zumba Class",
    start: 'dyndatetime(y,m,d-7,17)',
    end: 'dyndatetime(y,m,d-7,19)',
}, {
    title: "Silent Party",
    start: 'dyndatetime(y,m,d-7,21)',
    end: 'dyndatetime(y,m,d-7,23)',
}, {
    title: "Garbage Collection",
    start: 'dyndatetime(y,m,d+7,15)',
    end: 'dyndatetime(y,m,d+7,17)',
}, {
    title: "Karaoke Night",
    start: 'dyndatetime(y,m,d+7,20)',
    end: 'dyndatetime(y,m,d+7,22)',
}]]
const toastMessage: string = "Add button clicked!"
const isToastOpen = ref<boolean>(false)

const myView: MbscEventcalendarView= {
    calendar: { type: 'week' },
    agenda: { type: 'week' }
}

function displayToast() {
  isToastOpen.value = true;
}
function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscEventcalendar :view="myView" :data="myEvents" className="md-custom-event">
    <template #agendaEmpty>
      <div class="md-empty-agenda-wrapper">
        <img src="https://img.mobiscroll.com/demos/smart-empty-tin-can.png" width="200" />
        <div class="md-bold">Looks like this can is empty</div>
        <MbscButton
          cssClass="md-custom-agenda-btn"
          color="primary"
          variant="outline"
          @click="displayToast()"
        >
          Add something to it!
        </MbscButton>
        <div class="md-illustration-description">
          Illustration by
          <a href="https://icons8.com/illustrations/author/zD2oqC8lLBBA">Icons 8</a>
          from <a href="https://icons8.com/illustrations">Ouch!</a>
        </div>
      </div>
      ;
    </template>
  </MbscEventcalendar>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>

<style>
.md-empty-agenda-wrapper {
  align-items: center;
  display: flex;
  flex-direction: column;
}

.md-bold {
  font-weight: 500;
}

.md-illustration-description {
  font-size: 8px;
}

.md-custom-agenda-btn.mbsc-button {
  line-height: 20px;
}
</style>
