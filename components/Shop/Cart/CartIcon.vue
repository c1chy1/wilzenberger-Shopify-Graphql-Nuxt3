<template>
  <button
      class="fixed flex items-center justify-end right-5 bottom-5 z-20"
      aria-label="Cart"
      @click="handleClick"
      @keyup.enter="handleClick"
  >
    <img src="/icons/cart.png" alt="cart" class="relative rounded-b-2xl" >
    <transition name="bounce">
<span  v-if="cart.totalQuantity"
       class="bg-[#FCFCFD] px-1 text-xs rounded-full absolute left-6 top-2.5 transition-all">
{{cart.totalQuantity}}
</span>
</transition>


  </button>
</template>

<script setup lang="ts">

import { useCart } from "@/stores/cart";

const cart = useCart()

function handleClick() {
  cart.toggleCart();
}
</script>
