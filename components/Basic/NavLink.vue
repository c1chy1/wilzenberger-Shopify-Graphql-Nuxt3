<template>

  <li>
    <a :href="props.link">{{ props.title }}</a>
  </li>

</template>

<script setup lang="ts">
interface Props {
  link: string;
  title: string
}

const props = defineProps <Props>()

</script>
