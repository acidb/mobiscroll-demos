<script setup>
import { MbscButton, MbscPage, MbscPopup, setOptions /* localeImport */ } from '@mobiscroll/vue'
import { ref } from 'vue'

setOptions({
  // locale,
  // theme
})

const buttonRef = ref(null)
const isAnchoredOpen = ref(false)
const isTopOpen = ref(false)
const isCenterOpen = ref(false)
const isBottomOpen = ref(false)
const myAnchor = ref()

function openAnchored() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isAnchoredOpen.value = true
}

function openTop() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isTopOpen.value = true
}

function openCenter() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isCenterOpen.value = true
}

function openBottom() {
  myAnchor.value = buttonRef.value.instance.nativeElement
  isBottomOpen.value = true
}

function closeAnchored() {
  isAnchoredOpen.value = false
}

function closeTop() {
  isTopOpen.value = false
}

function closeCenter() {
  isCenterOpen.value = false
}

function closeBottom() {
  isBottomOpen.value = false
}
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Try different display modes</div>
      <div class="mbsc-form-group mbsc-button-group-block">
        <MbscButton ref="buttonRef" @click="openAnchored">Try anhored display mode</MbscButton>
        <MbscButton @click="openTop">Try top display mode</MbscButton>
        <MbscButton @click="openCenter">Try center display mode</MbscButton>
        <MbscButton @click="openBottom">Try bottom display mode</MbscButton>
      </div>
    </div>

    <MbscPopup
      display="anchored"
      :anchor="myAnchor"
      :showOverlay="false"
      :isOpen="isAnchoredOpen"
      @close="closeAnchored"
    >
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome on our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>

    <MbscPopup display="top" :showOverlay="false" :isOpen="isTopOpen" @close="closeTop">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome on our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>

    <MbscPopup display="center" :showOverlay="false" :isOpen="isCenterOpen" @close="closeCenter">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome on our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>

    <MbscPopup display="bottom" :showOverlay="false" :isOpen="isBottomOpen" @close="closeBottom">
      <div class="mbsc-align-center mbsc-padding">
        <img src="https://img.mobiscroll.com/demos/logo-noshadow.jpg" />
        <h4>Welcome on our website!</h4>
        <p>Have fun navigating through the demos.</p>
      </div>
    </MbscPopup>
  </MbscPage>
</template>
