<script setup>
import { MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const isPopupOpen = ref(false)
const myAnchor = ref()

const currentDeveloper = ''
const timeoutRef = null

function openPopup(event, developer) {
  myAnchor.value = event.target
  this.currentDeveloper = developer
  isPopupOpen.value = true
}

function handleClose() {
  this.timeoutRef = setTimeout(() => {
    isPopupOpen.value = false
  }, 500)
}

function cancelClosePopup() {
  clearTimeout(timeoutRef)
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-align-center">
      <div class="mbsc-note">Hover on the link to show popup.</div>
    </div>
    <div class="mbsc-padding">
      <p>
        Meet web developer
        <a
          @mouseenter="openPopup($event, 'Liza')"
          @mouseleave="handleClose"
          style="cursor: pointer; text-decoration: underline"
        >
          Liza
        </a>
        who designs and builds websites. She is responsible for the appearance, of the site and
        technical aspects, such as site speed and how much traffic the site can handle. She also
        creates site content that requires technical features.
      </p>
      <p>
        Meet
        <a
          @mouseenter="openPopup($event, 'Mike')"
          @mouseleave="handleClose"
          style="cursor: pointer; text-decoration: underline"
        >
          Mike
        </a>
        , a backend developer specializing in server management and database integration. He ensures
        the site runs smoothly by handling server-side logic, optimizing performance, and
        implementing security measures.
      </p>
    </div>
    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :isOpen="isPopupOpen"
      @close="isPopupOpen = false"
      @mouseenter="cancelClosePopup"
      @mouseleave="handleClose"
    >
      <template v-if="currentDeveloper === 'Liza'">
        <div class="mbsc-align-center mbsc-padding">
          <img style="height: 80px" src="https://img.mobiscroll.com/demos/f1.png" alt="avatar" />
          <h3>
            <b>Liza Taylor</b>
          </h3>
          <p>
            liza.taylor@mobiscroll.com <br />
            (202) 555-0127
          </p>
        </div>
      </template>
      <template v-if="currentDeveloper === 'Mike'">
        <div class="mbsc-align-center mbsc-padding">
          <img style="height: 80px" src="https://img.mobiscroll.com/demos/m1.png" alt="avatar" />
          <h3>
            <b>Mike Smith</b>
          </h3>
          <p>
            mike.smith@mobiscroll.com <br />
            (202) 555-9126
          </p>
        </div>
      </template>
    </MbscPopup>
  </MbscPage>
</template>

<style></style>
