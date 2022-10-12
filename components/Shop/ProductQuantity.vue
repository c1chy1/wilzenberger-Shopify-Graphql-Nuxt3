<template>
  <div class="flex justify-between text-primary h-12 w-full">
    <div class="flex items-center justify-center gap-x-4  bg-white border border-light-gray transition-all w-20">

      <button
          class="font-semibold px-1.5 py-2  text-light-gray  focus:outline-none border-transparent border-t-0 border-b-0 border-l-0 border-light-gray active:border-primary active:border-t active:border-b active:border-l"
          @click="decrement">
        -
      </button>
      <span class="font-semibold text-[black]">{{ number }}</span>

      <button
          class=" font-semibold px-1.5 py-2 text-light-gray   focus:outline-none  border-t-0 border-b-0 border-r-0 border-light-gray active:border-primary active:border-t active:border-b active:border-r"
          @click="increment">
        +
      </button>
    </div>

    <BasicButton
        @click="addToCart"
        class="bg-primary text-white w-full ml-2 uppercase active:text-tertiary w-full"
        color="Blue"
        label="In den warenkorb"
        label-hover="Danke!"
        tag="button">In den warenkorb
    </BasicButton>

  </div>
</template>

<script setup lang="ts">

import {useCart} from "@/stores/cart";
import {useProduct} from '@/stores/product'
import {useQuery} from "@vue/apollo-composable";
import {productByHandle} from "~/apollo/queries/productByHandle";


const route = useRoute();
const handle = route.params.product;


const {result, error} = useQuery(productByHandle, {
  handle
});

const variant = computed(() => result.value?.productByHandle)


const number = ref(0);

function increment() {

  number.value++;
}

function decrement() {

  if (number.value > 0)

    number.value--;
}

function addToCart() {

  const line = {
    merchandiseId: variant.value?.variants.edges[0].node.id || useProduct().variant?.id,
    quantity: number.value
  }
  useCart().addToCart([line])


}
</script>
