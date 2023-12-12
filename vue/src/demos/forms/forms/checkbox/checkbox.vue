<script setup>
import { MbscCheckbox, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})
</script>

<template>
  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Checkbox</div>
      <MbscCheckbox
        v-model="option1"
        label="Option 1"
        description="Checked checkbox"
        :defaultChecked="true"
      />
      <MbscCheckbox v-model="option2" label="Option 2" description="Empty checkbox" />
      <MbscCheckbox
        v-model="option3"
        label="Option 3"
        description="Disabled checkbox"
        :disabled="true"
      />
      <MbscCheckbox
        v-model="option4"
        label="Option 4"
        description="Disabled and checked checkbox"
        :disabled="true"
        :defaultChecked="true"
      />
    </div>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Checkbox colors</div>
      <MbscCheckbox v-model="primary" label="Primary" color="primary" :defaultChecked="true" />
      <MbscCheckbox
        v-model="secondary"
        label="Secondary"
        color="secondary"
        :defaultChecked="true"
      />
      <MbscCheckbox v-model="success" label="Success" color="success" :defaultChecked="true" />
      <MbscCheckbox v-model="danger" label="Danger" color="danger" :defaultChecked="true" />
      <MbscCheckbox v-model="warning" label="Warning" color="warning" :defaultChecked="true" />
      <MbscCheckbox v-model="info" label="Info" color="info" :defaultChecked="true" />
    </div>
  </MbscPage>
</template>
