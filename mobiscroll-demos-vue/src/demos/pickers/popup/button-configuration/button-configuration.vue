<script setup>
import { MbscButton, MbscPopup, MbscToast, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isPopupDefaultOpen = ref(false)
const isPopupCustomOpen = ref(false)

const toastMessage = ref('')
const isToastOpen = ref(false)

function openPopupDefault() {
  isPopupDefaultOpen.value = true
}

function openPopupCustom() {
  isPopupCustomOpen.value = true
}

function handleDefaultClose() {
  isPopupDefaultOpen.value = false
}

function handleCustomClose() {
  isPopupCustomOpen.value = false
}
</script>

<template>
  <div class="mbsc-align-center">
    <div class="mbsc-note">Customize popup buttons depending on your context.</div>
  </div>
  <div class="mbsc-form-group">
    <div class="mbsc-button-group-block">
      <MbscButton @click="openPopupDefault">Default</MbscButton>
      <MbscButton @click="openPopupCustom">Custom button</MbscButton>
    </div>
  </div>

  <MbscPopup display="center" :isOpen="isPopupDefaultOpen" @close="handleDefaultClose">
    <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi there!</h3>
      <p class="md-text-center">This is the default with no buttons.</p>
    </div>
  </MbscPopup>

  <MbscPopup
    display="center"
    :isOpen="isPopupCustomOpen"
    :buttons="[
      'ok',
      {
        text: 'Custom',
        handler: () => {
          // ?!
          toastMessage.value = 'Custom button clicked'
          isToastOpen.value = true
        }
      },
      'close'
    ]"
    @close="handleCustomClose"
  >
    <div class="mbsc-align-center mbsc-padding">
      <h3 class="md-text-center">Hi again!</h3>
      <p class="md-text-center">This is a popup with a custom and predefined buttons.</p>
    </div>
  </MbscPopup>
  <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
</template>
