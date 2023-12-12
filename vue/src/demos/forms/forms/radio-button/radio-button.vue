<script setup>
import { MbscRadioGroup, MbscRadio, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Radio buttons</div>
      <MbscRadioGroup name="group">
        <MbscRadio
          v-model="radio1"
          label="Radio Option 1"
          description="This is description for radio 1"
          :defaultChecked="true"
        />
        <MbscRadio
          v-model="radio2"
          label="Radio Option 2"
          description="This is description for radio 2"
        />
        <MbscRadio v-model="radio3" label="Radio Option 3" />
        <MbscRadio v-model="radio4" label="Disabled" :disabled="true" />
      </MbscRadioGroup>
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Radio button colors</div>
      <MbscRadioGroup name="colors">
        <MbscRadio v-model="primary" label="Primary" color="primary" />
        <MbscRadio v-model="secondary" label="Secondary" color="secondary" />
        <MbscRadio v-model="success" label="Success" color="success" :defaultChecked="true" />
        <MbscRadio v-model="danger" label="Danger" color="danger" />
        <MbscRadio v-model="warning" label="Warning" color="warning" />
        <MbscRadio v-model="info" label="Info" color="info" />
      </MbscRadioGroup>
    </div>
  </MbscPage>
</template>
