<template>


    <transition-group name="slide" :duration="500" mode="in-out">
      <div key="cart" id="cart" v-show="cartStore.cartOpen"

           class="transition-all xl:pl-6 fixed w-full sm:w-2/3 lg:w-1/3  2xl:w-1/4 top-0 bottom-0 right-0 bg-white overflow-x-hidden overflow-y-scroll z-40"
           ref="cart">
        <ShopCartHeader key="2"
        />

<transition name="fade">
        <ShopCartItems
              key="4"
              class=""
              :items="lineItems"/>
</transition>
        <ShopCartSummary class="col-span-4 lg:col-span-4 xl:col-span-5" key="5"/>
      </div>

    </transition-group>

</template>

<script setup lang="ts">

import {useCart} from '@/stores/cart'


const lineItems = useCart().lineItems

useHead({
  title: computed(() => `Cart (${useCart().lineItemsCount})`),
})

const cartStore = useCart()

const cart = ref(null);

</script>
