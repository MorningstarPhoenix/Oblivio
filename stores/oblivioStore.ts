import { defineStore } from 'pinia'
import type { Resource } from '~/types/Oblivio'

export const useOblivioStore = defineStore('oblivio', () => {
  // State
  const resources: Map<Resource, number> = new Map()

  // Getters

  // Actions
  function initialize() {

  }

  return { initialize, resources: computed(() => resources) }
})
