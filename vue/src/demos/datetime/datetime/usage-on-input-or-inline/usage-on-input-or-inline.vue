<script setup>
import { MbscDatepicker, MbscPage, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const inputProps = {
  placeholder: 'Please Select...'
}
</script>

<template>
  <MbscPage>
    <MbscDatepicker :controls="['date']" inputComponent="input" :inputProps="inputProps" />
    <MbscDatepicker
      :controls="['date']"
      label="Calendar"
      labelStyle="stacked"
      inputStyle="outline"
      placeholder="Please Select..."
    />
    <MbscDatepicker :controls="['date']" display="inline" />
  </MbscPage>
</template>
