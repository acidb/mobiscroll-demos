<script setup>
import {
  MbscButton,
  MbscInput,
  MbscPage,
  MbscPopup,
  MbscSegmented,
  MbscSegmentedGroup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const buttonRef = ref(null)
const isPopupOpen = ref(false)
const myAnchor = ref()

const toastMessage = ref('Subscribed')
const isToastOpen = ref(false)

const myResponsive = {
  xsmall: {
    display: 'bottom'
  },
  small: {
    display: 'center'
  },
  custom: {
    // Custom breakpoint
    breakpoint: 800,
    display: 'anchored'
    //
    // anchor: myAnchor
  }
}

function openPopup() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isPopupOpen.value = true
}
</script>
<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton ref="buttonRef" @click="openPopup">Open Popup</MbscButton>
      </div>
    </div>

    <MbscPopup
      :isOpen="isPopupOpen"
      :buttons="[
        {
          text: 'Subscribe',
          handler: function () {
            isToastOpen = true
            isPopupOpen = false
          }
        }
      ]"
      :responsive="myResponsive"
      @close="isPopupOpen = false"
    >
      <div class="mbsc-align-center">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h2>Stay with us!</h2>
        <p>
          Join our newsletter and be the first <br />
          to receive exciting updates and news!
        </p>
        <MbscInput inputStyle="box" placeholder="Enter your email address" />
        <MbscSegmentedGroup>
          <MbscSegmented value="weekly" :defaultChecked="true">Weekly</MbscSegmented>
          <MbscSegmented value="montly">Monthly</MbscSegmented>
        </MbscSegmentedGroup>
      </div>
    </MbscPopup>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="isToastOpen = false" />
  </MbscPage>
</template>
