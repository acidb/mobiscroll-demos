<script setup>
import {
  MbscButton,
  MbscDatepicker,
  MbscDropdown,
  MbscInput,
  MbscPage,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscSwitch,
  MbscTextarea,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const buttonRef = ref(null)
const isPopupOpen = ref(false)
const popupEventAllDay = ref(false)
const datePickerControls = ['date']
const datetimePickerControls = ['datetime']
const popupEventTitle = ref('')

const toastMessage = ref('aaaaa')
const isToastOpen = ref(false)

const startInput = ref(null)
const endInput = ref(null)

function openPopup() {
  popupEventTitle.value = 'New Event'
  isPopupOpen.value = true
}

function handleClose() {
  isPopupOpen.value = false
  // Your custom event handler goes here
}

function handleToastClose() {
  isToastOpen.value = false
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton ref="buttonRef" @click="openPopup">Add event</MbscButton>
      </div>
    </div>

    <MbscPopup
      :width="400"
      :contentPadding="false"
      headerText="Add new event"
      display="center"
      :isOpen="isPopupOpen"
      :responsive="myResponsive"
      :anchor="popupAnchor"
      :buttons="[
        'cancel',
        {
          text: 'Add',
          keyCode: 'enter',
          handler: function () {
            // toastMessage.value = 'Event added'
            // isToastOpen.value = true
            handleClose()
          },
          cssClass: 'mbsc-popup-button-primary'
        }
      ]"
      @close="handleClose"
    >
      <div class="mbsc-form-group">
        <MbscInput label="Title" v-model="popupEventTitle" />
        <MbscTextarea label="Description" v-model="popupEventDescription" />
      </div>
      <div class="mbsc-form-group">
        <MbscSwitch label="All-day" v-model="popupEventAllDay" />

        <MbscInput ref="startInput" label="Starts" />
        <MbscInput ref="endInput" label="Ends" />

        <template v-if="!popupEventAllDay">
          <MbscDropdown v-model="popupTravelTime" label="Travel time">
            <option value="0">None</option>
            <option value="5">5 minutes</option>
            <option value="15">15 minutes</option>
            <option value="30">30 minutes</option>
            <option value="60">1 hour</option>
            <option value="90">1.5 hours</option>
            <option value="120">2 hours</option>
          </MbscDropdown>
        </template>
        <MbscDatepicker
          v-model="popupEventDates"
          select="range"
          :controls="popupEventAllDay ? datePickerControls : datetimePickerControls"
          :startInput="startInput"
          :endInput="endInput"
        />
        <MbscSegmentedGroup v-model="popupEventStatus">
          <MbscSegmented value="busy" :defaultChecked="true">Show as busy</MbscSegmented>
          <MbscSegmented value="free">Show as free</MbscSegmented>
        </MbscSegmentedGroup>
        <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
      </div>
    </MbscPopup>
  </MbscPage>
</template>

<style></style>
