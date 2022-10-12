<template>

  <header
      class="w-full min-h-screen bg-cover bg-center flex"
      :style="`background-image: url(${props.bgImage});` "
    >


<div class=" pb-10 lg:pb-20 xl:pb-40 m-auto container">
<slot></slot>
</div>
  </header>

</template>



<script setup lang="ts">

interface Props {
  bgImage: string;

}

const props = defineProps<Props>()

</script>
