<template>
  <div>
  <div class="flex divide-x justify-start ">

    <small class="text-xs pr-2"><slot></slot>{{num}}</small>

    <small class="text-xs px-2"> ★★★★★ </small>

    <small class="pl-2">Bewertung abgeben</small>
  </div>


  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  id: string;

}>();

const id = props.id.toString()
const replaced = id.match(/\d+/)

let num;

if (replaced !== null) {
  num = Number(replaced[0])
}
</script>
