<template>
  <div
      :id="props.id"
      :class="props.direction === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'"
      class="flex flex-col w-full max-w-6xl py-12  mx-auto">
    <div class="lg:w-1/2 bg-no-repeat flex justify-center">
      <img
          :alt="`${props.alt}`"
          :src="`${props.imageLink}`">
    </div>
    <div  class=" lg:w-1/2 flex flex-col space-y-2 justify-center  ">
      <div class="p-6 mx-auto">
        <div>
          <h3
              class="my-4 leading-none text-3xl text-tertiary font-semibold"
              :class="props.textDirection === 'right' ? 'lg:text-right' : 'lg:text-left'"

          >{{ props.title }}</h3></div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

interface Props {
  id: string;
  title: string;
  direction: 'left' | 'right'
  textDirection: 'left' | 'right'
  imageLink: string
  alt: string
}

const props = defineProps<Props>()

</script>

