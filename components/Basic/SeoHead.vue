
<template><div v-if="false"></div></template>

<script setup lang="ts">
const { WEBSITE_URL } = useRuntimeConfig()
interface Props {
  title: string
  description: string
}
const props = defineProps<Props>()
useHead({
  title: props.title,
  htmlAttrs: {
    lang: 'de',
  },
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: props.description,
    }

  ],
})
</script>
