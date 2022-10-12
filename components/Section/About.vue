<template>

  <section
      class="w-full min-h-[65vh] bg-no-repeat bg-contain  bg-bottom bg-opacity-10 xl:bg-[length:138%_80%]   xl:bg-[length:138%_100%]  xl:bg-no-repeat flex"
      :style="`background-image: url(${props.bgImage});`"
  >


    <div class="mx-auto container ">
      <slot></slot>
    </div>
  </section>


</template>

<script setup lang="ts">

interface Props {
  bgImage: string;
}

const props = defineProps<Props>()

</script>
