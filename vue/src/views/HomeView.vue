<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div style="display: flex; flex-wrap: wrap; flex-direction: column">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>

      <li>
        <RouterLink to="/about">About</RouterLink>
      </li>
    </ul>
    <h1>Mobiscroll Vue Demos</h1>
    <h2>Event Calendar</h2>
    <h3>Timeline demos</h3>
    <ul>
      <li>
        <RouterLink to="/timeline/compare-resources">Compare resources</RouterLink>
      </li>
    </ul>
    <h3>Scheduler demos</h3>
    <ul>
      <li>
        <RouterLink to="/schedule/work-week-hours">Work week hours</RouterLink>
      </li>
    </ul>
  </div>
</template>
