<template>

  <div v-if="collection.edges"
       :style="`background-image: url(${props.bgImage});`"
       class="  mt-8 sm:mt-12 xl:mt-20"
  >

    <slot></slot>
<ShopProductGrid>
  <ShopProductCard
        v-for="(product, index) in collection.edges"
        :index="index"
        :key="product.node.id"
        :product="product.node"
        class="xl:pb-16"/>
</ShopProductGrid>
  </div>
  <div v-else-if="error">Error loading featured products</div>
  <div v-else></div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import { products } from "~~/apollo/queries/products";


const props = defineProps<{

  numProducts: number
  bgImage: string
}>()


const numProducts = props.numProducts;

const { result, error } = useQuery(products, {

  numProducts
});


const collection = computed(() => result.value?.products ?? [])


</script>
