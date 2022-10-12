<template>
  <button
      class="fixed flex items-center justify-end right-5 bottom-5 z-20"
      aria-label="Cart"
      @click="handleClick"
      @keyup.enter="handleClick"
  >
    <img src="public/icons/cart.png" alt="cart" class="relative rounded-b-2xl" >
<span class="bg-[#FCFCFD] px-1 text-xs rounded-full absolute left-6 top-2.5 ">
{{cart.totalQuantity}}
</span>
  </button>
</template>



<script setup lang="ts">

import { useCart } from "@/stores/cart";

const cart = useCart()


function handleClick() {
  cart.toggleCart();
}
</script>
