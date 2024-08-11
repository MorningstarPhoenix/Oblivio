<script setup lang="ts">
import { useOblivioStore } from '~/stores/oblivioStore'

const oblivioStore = useOblivioStore()
</script>

<template>
  <div class="flex">
    <div class="w-full max-w-72 border-r ">
      Sidebar
    </div>
    <div class="ml-4 flex flex-1 flex-col">
      <div class="flex justify-between">
        <div class="font-light text-muted-foreground">
          Resources
          <div v-for="(resource, index) in oblivioStore.resources.keys()" :key="index">
            {{ resource.name }} {{ oblivioStore.resources.get(resource) }}
          </div>
        </div>
        <div class="relative w-full max-w-sm items-center">
          <Input class="w-full max-w-56 pl-10" placeholder="Search..." />
          <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
            <Icon name="mdi-magnify" class="text-muted-foreground" />
          </span>
        </div>
      </div>
      <div class="size-full ">
        <div class="grid grid-cols-4" />
      </div>
    </div>
    <div class="w-full max-w-72 border-l">
      Events
    </div>
  </div>
</template>

<style scoped>

</style>
