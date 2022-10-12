<template>
  <button @click="open = true">
    Open Modal
  </button>
  <Teleport to="body">
    <div v-if="open" class="modal-overlay z-30">
    <div v-if="open" class="modal">
      <p>Hello from the modal!</p>
      <button @click="open = false">
        Close
      </button>
    </div>
    </div>
  </Teleport>
</template>


<script setup lang="ts">

const props = defineProps<{

  open : boolean

}>()
const open = ref(false)


</script>

