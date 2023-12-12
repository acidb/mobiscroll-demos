<script setup>import { MbscDatepicker, setOptions/* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})</script> 

<template>  <MbscDatepicker
    display="inline"
    select="range"
    rangeSelectMode="wizard"
    :controls="['calendar']
    :showRangeLabels="true"
  /></template>