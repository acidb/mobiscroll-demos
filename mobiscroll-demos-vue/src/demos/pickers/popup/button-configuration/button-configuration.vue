<script setup>
import {
  MbscButton,
  MbscPage,
  MbscPopup,
  MbscToast,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isDefaultOpen = ref(false)
const isCustomOpen = ref(false)

const toastMessage = ref('Custom button clicked')
const isToastOpen = ref(false)
</script>

<template>
  <MbscPage>
    <div class="mbsc-align-center">
      <div class="mbsc-note">Customize popup buttons depending on your context.</div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-button-group-block">
        <MbscButton @click="isDefaultOpen = true">Default</MbscButton>
        <MbscButton @click="isCustomOpen = true">Custom button</MbscButton>
      </div>
    </div>

    <MbscPopup display="center" :isOpen="isDefaultOpen" @close="isDefaultOpen = false">
      <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi there!</h3>
        <p class="md-text-center">This is the default with no buttons.</p>
      </div>
    </MbscPopup>

    <MbscPopup
      display="center"
      :isOpen="isCustomOpen"
      :buttons="[
        'ok',
        {
          text: 'Custom',
          handler: () => {
            isToastOpen = true
            isCustomOpen = false
          }
        },
        'close'
      ]"
      @close="isCustomOpen = false"
    >
      <div class="mbsc-align-center mbsc-padding">
        <h3 class="md-text-center">Hi again!</h3>
        <p class="md-text-center">This is a popup with a custom and predefined buttons.</p>
      </div>
    </MbscPopup>
    <MbscToast :message="toastMessage" :isOpen="isToastOpen" @close="handleToastClose" />
  </MbscPage>
</template>
