<template>
  <div class="flex flex-col tracking-wide  mb-4 md:mb-8">
<div>


    <p class="font-semibold text-4xl"
    :class="[
      color === 'primary'   ? 'text-primary' :
      color === 'secondary' ? 'text-secondary' : '',]"
    >{{props.price}} €</p>
  <slot></slot>
</div>

  </div>
</template>

<script setup lang="ts">



const props = defineProps<{
  price: string;
  currency: string;
  color: 'primary' | 'secondary'

}>();


</script>
