<script setup>
import { MbscDatepicker, setOptions /* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

function handleCancel(event) {
  // Logic for cancel button click
}

function handleCellClick(event) {
  // Logic for event click
}

function handleCellHoverIn(event) {
  // Logic for handling cell hover in
}

function handleCellHoverOut(event) {
  // Logic for handling cell hover out
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

function handleLabelClick(event) {
  // Logic for label click
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
    label="Calendar"
    labelStyle="stacked"
    inputStyle="box"
    placeholder="Please select..."
    @cancel="handleCancel"
    @cell-click="handleCellClick"
    @cell-hover-in="handleCellHoverIn"
    @cell-hover-out="handleCellHoverOut"
    @change="handleChange"
    @close="handleClose"
    @destroy="handleDestroy"
    @init="handleInit"
    @label-click="handleLabelClick"
    @open="handleOpen"
    @page-change="handlePageChange"
    @page-loaded="handlePageLoaded"
    @page-loading="handlePageLoading"
    @position="handlePosition"
    @temp-change="handleTempChange"
  />
</template>
