<template>
  <section>

    <LayoutHeader>

      <h1 class="uppercase text-center  text-4xl md:text-5xl xl:text-7xl text-primary w-full m-auto leading-none ">Unsere Produkte <br>
      </h1>
      <p class="uppercase text-center 2xl:text-2xl text-secondary w-full m-auto leading-tight ">Lorem ipsum dolor sit amet,
        <br> consetetur sadipscining.</p>
    </LayoutHeader>

      <SectionProducts

         :num-products="5"
          bg-image="/images/home_wilzenberger-bg-footer.png"
     />


  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import {productByHandle} from "~/apollo/queries/productByHandle";


const route = useRoute();
const handle = route.params.product;
const {result, loading, error} = useQuery(productByHandle, {handle});
const images = computed(() => result.value?.productByHandle.images.edges ?? [])


</script>
