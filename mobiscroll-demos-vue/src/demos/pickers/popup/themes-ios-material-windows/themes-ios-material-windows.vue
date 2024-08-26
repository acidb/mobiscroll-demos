<script setup>
import { MbscButton, MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'

import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const buttonRef = ref(null)
const isPopupOpen = ref(false)
const myAnchor = ref()

function openPopup() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isPopupOpen.value = true
}

function handleClose() {
  isPopupOpen.value = false
  // Your custom event handler goes here
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-button-group-block">
      <MbscButton ref="buttonRef" @click="openPopup">Open Popup</MbscButton>
    </div>

    <!-- theme: can be 'ios', 'material', 'windows' or 'auto' - in case of 'auto', the theme will automatically be set based on the platform -->
    <!-- themeVariant: can be 'light', 'dark' or 'auto' - in case of 'auto' it is set based in the active system theme -->
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      theme="material"
      themeVariant="dark"
      :isOpen="isPopupOpen"
      :buttons="['set', 'cancel']"
      @close="handleClose"
      @destroy="handleDestroy"
      @init="handleInit"
      @open="handleOpen"
      @position="handlePosition"
    >
      <div class="mbsc-align-center mbsc-padding">
        <h3>Hi again!</h3>
        <p>This is a popup with three custom buttons</p>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
