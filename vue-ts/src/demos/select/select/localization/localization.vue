<script setup lang="ts">
import { MbscSelect, localeEs, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // theme
})

const myData = [
  {
    text: 'Atlanta',
    value: 'atl'
  },
  {
    text: 'Berlin',
    value: 'ber'
  },
  {
    text: 'Boston',
    value: 'bos'
  },
  {
    text: 'Chicago',
    value: 'chi'
  },
  {
    text: 'London',
    value: 'lon'
  },
  {
    text: 'Los Angeles',
    value: 'la'
  },
  {
    text: 'New York',
    value: 'ny'
  },
  {
    text: 'Paris',
    value: 'par'
  },
  {
    text: 'San Francisco',
    value: 'sf'
  }
]
</script>

<template>
  <!-- sets the language of the component -->
  <MbscSelect
    :locale="localeEs"
    :data="myData"
    label="Select"
    display="bottom"
    inputStyle="outline"
    labelStyle="stacked"
    placeholder="Please select..."
  />
</template>
