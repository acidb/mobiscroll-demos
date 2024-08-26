<script setup>
import {
  MbscButton,
  MbscInput,
  MbscPage,
  MbscPopup,
  MbscRadio,
  MbscRadioGroup,
  MbscSegmented,
  MbscSegmentedGroup,
  setOptions /* localeImport */
} from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isSubscribeOpen = ref(false)
const isListOpen = ref(false)
</script>

<template>
  <MbscPage>
    <div class="mbsc-align-center">
      <div class="mbsc-note">Use the popup with or without return value.</div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Without return value</div>
      <div class="mbsc-button-group-block">
        <MbscButton @click="isSubscribeOpen = true">Open Popup</MbscButton>
      </div>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">With return value</div>
      <label>
        <MbscInput label="Update" @click="isListOpen = true" placeholder="Please Select..." />
      </label>
    </div>

    <MbscPopup
      display="center"
      :showOverlay="false"
      :isOpen="isSubscribeOpen"
      :buttons="[
        {
          text: 'Subscribe',
          handler: function () {
            isSubscribeOpen = false
            // add toast
          }
        }
      ]"
      @close="isSubscribeOpen = false"
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

    <MbscPopup
      display="center"
      :showOverlay="false"
      :isOpen="isListOpen"
      :buttons="['ok', 'cancel']"
      @close="isListOpen = false"
    >
      <div class="mbsc-form-group-inset">
        <p>
          Some updates are available for you. <br />
          When would you like to install them?
        </p>
      </div>

      <div class="mbsc-form-group-inset">
        <MbscRadioGroup>
          <MbscRadio label=" Right now" :defaultChecked="true" />
          <MbscRadio label=" Later on today" />
          <MbscRadio label="Remind me tomorrow" />
        </MbscRadioGroup>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
