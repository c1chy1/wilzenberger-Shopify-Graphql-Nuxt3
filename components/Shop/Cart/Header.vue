<template>

  <div class="flex justify-around text-tertiary">
  <div class="py-6 flex flex-col justify-around">

    <h1 class="text-sm font-semibold md:text-lh xl:text-2xl leading-none">Warenkorb</h1>
    <h2 class="text-lg leading-loose">Artikel(s) {{cartStore.totalQuantity}}</h2>
  </div>
<div class="hidden sm:block">
      <a class="close-button cursor-pointer"
         @click="closeCart"

      >
        <div class="in">
          <div class="close-button-block"></div>
          <div class="close-button-block"></div>
        </div>
        <div class="out">
          <div class="close-button-block"></div>
          <div class="close-button-block"></div>
        </div>
      </a>

  </div>
  </div>
</template>



<script setup lang="ts">

import { useCart } from "@/stores/cart";

const cartStore = useCart()


function closeCart() {

  cartStore.toggleCart(false)
}


</script>
<style lang="scss">

$button-size: 32px;
$close-width: calc($button-size / 10);

.close-button {
  display: block;
  width: $button-size;
  height: $button-size;
  position: relative;
  overflow: hidden;
  > div {
    position: relative;
  }
  &-block {
    width: 32px;
    height: 20px;
    position: relative;
    overflow: hidden;
    &:before,
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: calc(55% - 4px);
      display: block;
      width: 4px;
      height: 20px;
      transform-origin: bottom center;
      background: #8BA039;
      transition: all ease-out 280ms;
    }
    &:last-of-type {
      transform: rotate(180deg);
    }
  }
  .in {
    .close-button-block {
      &:before {
        transition-delay: 280ms;
        transform: translateX(20px) translateY(-20px) rotate(45deg);
      }
      &:after {
        transition-delay: 280ms;
        transform: translateX(-22px) translateY(-22px) rotate(-45deg);
      }
    }
  }
  .out {
    position: absolute;
    top: 0;
    left: 0;
    .close-button-block {
      &:before {
        transform: translateX(-5px) translateY(5px) rotate(45deg);
      }
      &:after {
        transform: translateX(5px) translateY(5px) rotate(-45deg);
      }
    }
  }
  &:hover {
    .in {
      .close-button-block {
        &:before {
          transform: translateX(-5px) translateY(5px) rotate(45deg);
        }
        &:after {
          transform: translateX(5px) translateY(5px) rotate(-45deg);
        }
      }
    }
    .out {
      .close-button-block {
        &:before {
          transform: translateX(-20px) translateY(20px) rotate(45deg);
        }
        &:after {
          transform: translateX(20px) translateY(20px) rotate(-45deg);
        }
      }
    }
  }
}

</style>
