<template>
  <div>

    <component
        :href="props.href"

        v-if="props.title"
        :is="tag || 'div'"
        :class="[


      textDirection === 'left'   ? 'text-left' :
      textDirection === 'center' ? 'text-center' :
      textDirection === 'right'  ? 'text-right' : '']"
    >{{ props.title }}
      <slot></slot>

    </component>

  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  tag?: string;
  title: any;
  textDirection: 'left' | 'right' | "center"
  href?: any
}>();

const {tag, title,href} = toRefs(props);
</script>
