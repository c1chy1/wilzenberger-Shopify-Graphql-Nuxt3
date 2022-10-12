<script setup lang="ts">
import { useCart } from '@/stores/cart'

</script>

<template>
  <div>
    <template v-if="useCart().lineItemsCount >= 1">
      <transition-group name="slide" :duration="500" mode="out-in">
      <ShopCartItem v-for="item in useCart().lineItems" :item="item" key="item" />
      </transition-group>
    </template>
    <div v-else>
      Ihr Warenkorb ist leer
    </div>
  </div>
</template>
<style scoped>

.slide-leave-active {
  transition: transform 400ms ease-in-out;
}

.slide-leave-to {
  transform: translateX(100%);
}

.slide-enter-from {
  opacity: 0;
  animation: fade-in-right ease 0.4s forwards;
}

.slide-enter-active {
  transform: scaleX(0);
  transform-origin: right;
  animation: grow-left cubic-bezier(0.785, 0.135, 0.15, 0.86) 0.5s forwards;

}


</style>
