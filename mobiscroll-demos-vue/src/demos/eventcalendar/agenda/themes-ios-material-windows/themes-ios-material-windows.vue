<script setup>
import {
  getJson,
  MbscDropdown,
  MbscEventcalendar,
  MbscPage /* localeImport */
} from '@mobiscroll/vue'
import { onMounted, ref } from 'vue'

const myEvents = ref([])
const myTheme = ref('material')
const myThemeVariant = ref('dark')

const myView = {
  agenda: { type: 'month' }
}

function handleThemeChange(args) {
  myTheme.value = args.target.value
}

function handleThemeVariantChange(args) {
  myThemeVariant.value = args.target.value
}

onMounted(() => {
  getJson(
    'https://trial.mobiscroll.com/events/?vers=5',
    (events) => {
      myEvents.value = events
    },
    'jsonp'
  )
})
</script>

<template>
  <MbscPage class="mds-full-height">
    <div class="mds-full-height mbsc-flex-col">
      <div class="mbsc-grid">
        <div class="mbsc-row">
          <div class="mbsc-col-sm-6">
            <MbscDropdown
              inputStyle="box"
              label="Theme"
              labelStyle="stacked"
              :value="myTheme"
              @change="handleThemeChange"
            >
              <option value="auto">Auto</option>
              <option value="ios">iOS</option>
              <option value="material">Material</option>
              <option value="windows">Windows</option>
            </MbscDropdown>
          </div>
          <div class="mbsc-col-sm-6">
            <MbscDropdown
              inputStyle="box"
              label="Theme variant"
              labelStyle="stacked"
              :value="myThemeVariant"
              @change="handleThemeVariantChange"
            >
              <option value="auto">Auto</option>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </MbscDropdown>
          </div>
        </div>
      </div>
      <MbscEventcalendar
        :view="myView"
        :data="myEvents"
        :theme="myTheme"
        :themeVariant="myThemeVariant"
      />
    </div>
  </MbscPage>
</template>

<style>
.mds-full-height {
  height: 100%;
}

.mds-overflow-hidden {
  overflow: hidden;
}
</style>
