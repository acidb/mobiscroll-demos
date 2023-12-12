<script setup>
import { MbscSelect, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
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

function handleCancel(event) {
  // Logic for cancel button click
}

function handleChange(event) {
  // Logic for value change
}

function handleClose(event) {
  // Your custom event handler goes here
}

function handleDestroy(event) {
  // Your custom event handler goes here
}

function handleFilter(event) {
  // Your custom event handler goes here
}

function handleInit(event) {
  // Logic running on component init
}

function handleOpen(event) {
  // Your custom event handler goes here
}

function handlePosition(event) {
  // Logic for component positioning
}

function handleTempChange(event) {
  // Logic for temporary value change
}
</script>

<template>
  <MbscSelect
    label="Select"
    labelStyle="stacked"
    inputStyle="outline"
    :data="myData"
    :filter="true"
    placeholder="Please select..."
    @cancel="handleCancel"
    @change="handleChange"
    @close="handleClose"
    @destroy="handleDestroy"
    @filter="handleFilter"
    @init="handleInit"
    @open="handleOpen"
    @position="handlePosition"
    @temp-change="handleTempChange"
  />
</template>
