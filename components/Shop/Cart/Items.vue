<template>

    <template  v-if="useCart().lineItemsCount >= 1">
      <transition-group tag="ul" name="slideIn"  mode="out-in" appear
    class="relative"
      >
      <ShopCartItem  v-for="item in useCart().lineItems" :item="item" :key="item" />
      </transition-group>
    </template>

    <div v-else>
      Ihr Warenkorb ist leer
    </div>

</template>

<script setup lang="ts">
import { useCart } from '@/stores/cart'

</script>
