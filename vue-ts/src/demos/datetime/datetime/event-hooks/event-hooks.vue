<script setup lang="ts">
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

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

function handleInit(event) {
  // Logic running on component init
}

function handleOpen(event) {
  // Your custom event handler goes here
}

function handlePageChange(event) {
  // Your custom event handler goes here
}

function handlePageLoaded(event) {
  // Use it to inject custom markup & attach custom listeners
}

function handlePageLoading(event) {
  // Use it to load data on demand
}

function handlePosition(event) {
  // Logic for component positioning
}

function handleTempChange(event) {
  // Logic for temporary value change
}
</script>

<template>
  <MbscDatepicker
    :controls="['calendar']"
    label="Date"
    labelStyle="stacked"
    inputStyle="box"
    placeholder="Please select..."
    @cancel="handleCancel"
    @change="handleChange"
    @close="handleClose"
    @destroy="handleDestroy"
    @init="handleInit"
    @open="handleOpen"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-loading="handlePageLoading"
    @position="handlePosition"
    @temp-change="handleTempChange"
  />
</template>
