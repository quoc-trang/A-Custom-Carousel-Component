<script setup lang="ts">
import { useCycleList } from "@/composables/useCycleList";
import { useInterval } from "@/composables/useInterval";

const { urls, duration } = defineProps<{
  urls: string[];
  duration: number;
}>();

const { state, next } = useCycleList(urls);

useInterval(next, duration);
</script>
<template>
  <Transition>
    <img :src="state" alt="" :key="state" class="absolute" data-test="active-image" />
  </Transition>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
