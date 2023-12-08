<script setup lang="ts">
import { MbscDatepicker, localeEs, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // theme
})
</script>

<template>
  <!-- sets the language of the component -->
  <MbscDatepicker :locale="localeEs" :controls="['calendar']" display="inline" />
</template>
