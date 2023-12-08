<script setup>
import { ref } from 'vue'
import { MbscButton, MbscToast, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const isToastOpen = ref(false)
</script>

<template>
  <MbscPage>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Buttons</div>
      <div className="mbsc-button-group">
        <MbscButton>Button</MbscButton>
        <MbscButton disabled>Disabled</MbscButton>
      </div>
      <div className="mbsc-button-group">
        <MbscButton @click="isToastOpen = true">Click for action</MbscButton>
        <MbscToast
          message="Button was clicked"
          :isOpen="isToastOpen"
          @close="isToastOpen = false"
        />
      </div>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Full width buttons</div>
      <div className="mbsc-button-group-block">
        <MbscButton>Full width button</MbscButton>
        <MbscButton disabled>Disabled full width</MbscButton>
      </div>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Justified buttons</div>
      <div className="mbsc-button-group-justified">
        <MbscButton>Tag</MbscButton>
        <MbscButton>Favorite</MbscButton>
        <MbscButton>Flag</MbscButton>
      </div>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Icons</div>
      <div className="mbsc-button-group">
        <MbscButton icon="tag"></MbscButton>
        <MbscButton icon="heart"></MbscButton>
        <MbscButton icon="flag" disabled></MbscButton>
      </div>
      <div className="mbsc-button-group">
        <MbscButton startIcon="tag">Tag</MbscButton>
        <MbscButton startIcon="heart">Favorite</MbscButton>
        <MbscButton startIcon="flag" disabled>Flag</MbscButton>
      </div>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Flat buttons</div>
      <div className="mbsc-button-group">
        <MbscButton variant="flat">Flat</MbscButton>
        <MbscButton variant="flat" startIcon="arrow-left5">Flat & Icon</MbscButton>
        <MbscButton variant="flat" icon="arrow-left5"></MbscButton>
        <MbscButton variant="flat" icon="key2" disabled></MbscButton>
        <MbscButton variant="flat" disabled>Flat disabled</MbscButton>
      </div>
    </div>
    <div className="mbsc-form-group">
      <div className="mbsc-form-group-title">Outline buttons</div>
      <div className="mbsc-button-group">
        <MbscButton variant="outline">Outline</MbscButton>
        <MbscButton variant="outline" startIcon="arrow-left5">Outline & Icon</MbscButton>
        <MbscButton variant="outline" icon="arrow-left5"></MbscButton>
        <MbscButton variant="outline" icon="key2" disabled></MbscButton>
        <MbscButton variant="outline" disabled>Outline disabled</MbscButton>
      </div>
    </div>
  </MbscPage>
</template>
