<template>
  <article class="text-center">
    <NuxtLink :to="productPath" class="border-b-primary">
    <ShopProductImage


          :alt="product.handle"
          :height="height"
          :lazy="index > lazyLoadingThreshold"
          :sizes="sizes"
          :srcset="srcset"
          :width="width"
          class="mx-auto w-2/5 xl:w-full pt-5 hover:border hover:border-primary hover:transition-all hover:bg-primary hover:bg-opacity-70 "
      />
    </NuxtLink>
      <ShopProductTitle
          tag="h3"
          :title="product.title"
          :id="product.handle"
          text-direction="center"
          class="text-xl font-semibold"
      />

      <ShopProductWeight
          :weight="product.variants.edges[0].node.weight"
          :weight-unit="`mg`"
          class="mt-4 md:mt-8 font-semibold"
      />


      <ShopProductDescription

          description="Nahrungsergänzungsmittel mit Boswellia-Serrata"
          class="font-light text-center text-xs w-1/2 mx-auto mb-3"
      />
      <ShopProductPriceCard
          :basic-price="product.variants.edges[0].node.unitPrice.amount"
          :basic-price-unit="product.variants.edges[0].node.unitPriceMeasurement.quantityValue"
     :price="product.priceRange.maxVariantPrice.amount"
     :currency="product.priceRange.maxVariantPrice.currencyCode"
          class="mb-0 md:mb-2"
      />
    <ShopProductAddToCart
        :product="product"
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
const srcset = getSrcset(src)+'?format=webp&';

</script>
