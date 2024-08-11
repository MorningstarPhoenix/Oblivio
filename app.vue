<script setup lang="ts">
import { useOblivioStore } from '~/stores/oblivioStore'

const oblivioStore = useOblivioStore()

oblivioStore.initialize()
</script>

<template>
  <div class="m-4">
    <NuxtPage />
  </div>
</template>

<style>
</style>
