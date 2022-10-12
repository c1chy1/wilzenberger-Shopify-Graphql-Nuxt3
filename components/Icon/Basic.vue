<template>

  <img :src="`${props.imageLink}`" :alt="`${props.alt}`">

</template>

<script setup lang="ts">

interface Props {
  imageLink: string
  alt: string
}

const props = defineProps<Props>()

</script>
