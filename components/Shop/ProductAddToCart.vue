<template>
  <button
      @keyup.enter="addToCart"
      @click="addToCart"
      class="button bg-white"
      :class="open ? 'loading' : ''"
      ref="button"
  >
    <span class="hover:text-tertiary border uppercase font-semibold text-xs px-10 tracking-widest">In Den Warenkorb</span>

    <div class="cart">
      <svg viewBox="0 0 36 26">
        <polyline points="1 2.5 6 2.5 10 18.5 25.5 18.5 28.5 7.5 7.5 7.5"></polyline>
        <polyline points="15 13.5 17 15.5 22 10.5"></polyline>
      </svg>
    </div>

  </button>

</template>



<script setup lang="ts">
import {ProductCard} from '@/types/components'
import {useProduct} from '@/stores/product'
import {useCart} from '@/stores/cart'

const open = ref(false)

const props = defineProps<{
  product: ProductCard;
}>();


function addToCart() {


  const line = {merchandiseId: props.product.variants.edges[0].node.id || useProduct().variant?.id, quantity: 1}
  useCart().addToCart([line])
  open.value = true
  setTimeout(() => {open.value = false}, 3700);

}


</script>


<style scoped lang="scss">

.button {

  --text: #8BA039;
  --cart: #8BA039;
  --tick: var(--background);
  position: relative;
  background: none;
  padding: 8px 5px;
  border-radius: 8px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  min-width: 175px;
  color: var(--text);
  background: var(--background);
  transform: scale(var(--scale, 1));
  transition: transform .4s cubic-bezier(.36, 1.01, .32, 1.27);

  &:active {
    --scale: .95;
  }

  span {

    display: block;
    position: relative;
    line-height: 26px;
    transform: translateY(var(--span-y, 0));
    transition: transform .7s ease;

    &:before,
    &:after {
      content: '';
      width: var(--w, 2px);
      height: var(--h, 14px);
      border-radius: 1px;
      position: absolute;
      left: var(--l, 11px);
      top: var(--t, 6px);
      background: currentColor;
      transform: scale(.75) rotate(var(--icon-r, 0deg)) translateY(var(--icon-y, 0));
      transition: transform .65s ease .05s;
    }

    &:after {
      --w: 14px;
      --h: 2px;
      --l: 5px;
      --t: 12px;
    }
  }

  .cart {
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -13px 0 0 -16px;
    transform-origin: 12px 40px;
    transform: translateX(-120px) rotate(-18deg);

    &:before,
    &:after {
      content: '';
      position: absolute;
    }

    &:before {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 2px var(--cart);
      bottom: 0;
      left: 9px;
      filter: drop-shadow(11px 0 0 var(--cart));
    }

    &:after {
      width: 16px;
      height: 9px;
      background: var(--cart);
      left: 9px;
      bottom: 7px;
      transform-origin: 50% 100%;
      transform: perspective(4px) rotateX(-6deg) scaleY(var(--fill, 0));
      transition: transform 1.2s ease var(--fill-d);
    }

    svg {
      z-index: 1;
      width: 36px;
      height: 26px;
      display: block;
      position: relative;
      fill: none;
      stroke: var(--cart);
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;

      polyline {
        &:last-child {
          stroke: var(--tick);
          stroke-dasharray: 10px;
          stroke-dashoffset: var(--offset, 10px);
          transition: stroke-dashoffset .4s ease var(--offset-d);
        }
      }
    }
  }

  &.loading {
    --scale: .95;
    --span-y: -37px;
    --icon-r: 180deg;
    --fill: 1;
    --fill-d: .8s;
    --offset: 0;
    --offset-d: 1.73s;

    .cart {
      animation: cart 3.4s linear forwards .2s;
    }
  }
}

@keyframes cart {
  12.5% {
    transform: translateX(-60px) rotate(-18deg);
  }
  25%,
  45%,
  55%,
  75% {
    transform: none;
  }
  50% {
    transform: scale(.9);
  }
  44%,
  56% {
    transform-origin: 12px 23px;
  }
  45%,
  55% {
    transform-origin: 50% 50%;
  }
  87.5% {
    transform: translateX(70px) rotate(-18deg);
  }
  100% {
    transform: translateX(140px) rotate(-18deg);
  }
}


</style>
