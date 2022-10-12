<template>
  <div class="flex flex-col tracking-wide">
<div>


    <p class="font-semibold">{{props.price}} {{props.currency}} / 120 Kapseln</p>
</div>

    <small class="text-xs"> Grundpreis {{props.basicPrice}} {{props.currency}} / {{props.basicPriceUnit}} Kapseln</small>
  </div>
</template>

<script setup lang="ts">



const props = defineProps<{
  price: string;
  currency: string
  basicPrice: string;
  basicPriceUnit: number

}>();


</script>
