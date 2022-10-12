import { defineStore } from 'pinia'
import { ProductVariant } from '@/types/components'

export const useProduct = defineStore('product', {
  state: () => ({
    variant: null as ProductVariant | null,
  }),
  getters: {},
  actions: {
    setVariant(variant: ProductVariant | null) {
      this.variant = variant
    }
  }
})
