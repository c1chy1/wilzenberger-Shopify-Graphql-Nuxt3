<template>
  <div>
    <p>{{props.weight}} {{props.weightUnit}}</p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  weight: any
  weightUnit: string
}>();

</script>
