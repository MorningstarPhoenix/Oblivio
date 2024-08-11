import { defineStore } from 'pinia'
import type { Resource } from '~/types/Oblivio'

export const useGameStore = defineStore('game', () => {
  // State
  const resources: Map<string, Resource> = new Map()
  // Getters

  // Actions
  function initialize() {
    resources.set('test', {
      id: 'test',
      name: 'Oblivio',
      description: 'A test',
      baseMarketBuyPrice: 100,
      baseMarketSellPrice: 100,
    })
    resources.set('oblivio2', {
      id: 'oblivio2',
      name: 'Oblivio2',
      description: 'A test2',
      baseMarketBuyPrice: 100,
      baseMarketSellPrice: 100,
    })
    resources.set('oblivio3', {
      id: 'oblivio3',
      name: 'Oblivio3',
      description: 'A test3',
      baseMarketBuyPrice: 100,
      baseMarketSellPrice: 100,
    })
  }

  return { 
  }

})