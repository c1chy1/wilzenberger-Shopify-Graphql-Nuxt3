<script setup lang="ts">
import { useCart } from '@/stores/cart'
</script>

<template>

  <div class="grid gap-2 p-4 rounded-lg bg-primary bg-opacity-5">
    <h3 class="text-sm lg:text-lg font-medium">Bestellübersicht</h3>
    <div class="flex flex-col text-sm lg:text-lg">
      <div class="flex items-center justify-between py-3 text-sm">
        <span class="text-gray-500">Zwischensumme</span>
        <span>{{ useCart().subtotalAmount || '--' }}</span>
      </div>
      <div class="flex items-center justify-between py-3  border-gray-300 border-y">
        <span class="text-gray-500">Steuerschätzung</span>
        <span>{{ useCart().totalTaxAmount || '--' }}</span>
      </div>
      <div class="flex items-center justify-between py-4">
        <span class="font-medium">Auftragssumme</span>
        <span>{{ useCart().totalAmount || '--' }}</span>
      </div>
    </div>
    <div>
      <button
         class="bg-primary px-4 text-white cursor-pointer"
        :disabled="useCart().lineItemsCount === 0"
        :href="useCart().cart.checkoutUrl ?? '#'"
      >
        Kasse
      </button>
    </div>
  </div>
</template>
