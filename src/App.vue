<script setup lang="ts">
import AppCarousel from "./components/AppCarousel.vue";

const urls = [
  "https://picsum.photos/id/32/500/300",
  "https://picsum.photos/id/35/500/300",
  "https://picsum.photos/id/56/500/300",
  "https://picsum.photos/id/84/500/300",
];
</script>

<template>
  <div class="page">
    <AppCarousel :urls="urls" />
  </div>
</template>
