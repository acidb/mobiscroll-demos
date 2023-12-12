<script setup>import { MbscDatepicker, MbscPage, setOptions/* localeImport */ } from '@mobiscroll/vue'

setOptions({
  // locale,
  // theme
})

const now = new Date
const until = new Date(now.getFullYear() + 10, now.getMonth())</script> 

<template>  <MbscPage>
    <div class="mbsc-form-group">
      <div class="mbsc-form-group-title">Add a new credit card</div>
      <MbscInput label="Name" placeholder="Required"></mbsc-input>
      <MbscInput label="Card" placeholder="Credit card number"></mbsc-input>
      <MbscDatepicker
        :controls="['date']"
        dateFormat="MM/YYYY"
        dateWheels="DD MMMM YYYY"
        :min="today"
        :max="until"
        label="Expiration"
        placeholder="Required"
        value="12/2025"
      />
      <MbscInput label="Security" placeholder="3-digit CVV"></mbsc-input>
    </div>
  </MbscPage></template>