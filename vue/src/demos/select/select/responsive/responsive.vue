<script setup>
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const myResponsive = {
  xsmall: {
    display: 'bottom',
    touchUi: true
  },
  small: {
    display: 'anchored',
    touchUi: true
  },
  custom: {
    // Custom breakpoint
    breakpoint: 800,
    display: 'anchored',
    touchUi: false
  }
}

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
  <MbscSelect
    :data="myData"
    :responsive="myResponsive"
    labelStyle="stacked"
    inputStyle="outline"
    placeholder="Please select..."
  />
</template>
