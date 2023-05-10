<template>

    <nuxt-img

            format="webp"
            :alt="alt"
            :height="height"
            :loading="lazy ? 'lazy' : 'eager'"
            :srcset="srcset"
            :sizes="sizes"
            :width="width"
    />
</template>

<script setup lang="ts">
const props = defineProps<{
    alt?: string;
    height: string | number;
    lazy?: boolean;
    sizes?: string;
    srcset: string;
    width: string | number;
}>();


const {alt, height, lazy, sizes, srcset, width} = toRefs(props);
</script>
