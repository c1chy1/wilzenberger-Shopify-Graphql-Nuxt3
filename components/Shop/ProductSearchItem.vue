<template>
  <article class="text-center">
    <NuxtLink :to="productPath" >
      <ShopProductImage
          :alt="product.handle"
          :height="height"
          :lazy="index > lazyLoadingThreshold"
          :sizes="sizes"
          :srcset="srcset"
          :width="width"
          class="mx-auto w-2/5 xl:w-full pt-5 rounded  hover:transition-all hover:bg-primary hover:bg-opacity-70 "
      />
    </NuxtLink>
    <ShopProductTitle
        tag="h3"
        :title="product.title"
        :id="product.handle"
        text-direction="center"
        class="text-xl font-semibold bg-[#FCFCFD] pt-3 bg-opacity-40 rounded-xl "
    />

  </article>
</template>

<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";
import { getSrcset } from "~/utilities/images";
import {ProductCard} from "~~/types/components"


const props = defineProps<{
  product: ProductCard;
  index: number
}>();


const productPath = `/products/${props.product.handle}`;


const lazyLoadingThreshold = 7;
const src = props.product?.images?.edges[0]?.node?.url ?? "";
const width = props.product?.images?.edges[0]?.node?.width ?? "";
const height = props.product?.images?.edges[0]?.node?.height ?? "";
const sizes = `(max-width: ${breakpointsTailwind.md}px) 45vw, 100%`;
const srcset = getSrcset(src);

</script>
