<template>
  <SectionProducts

         :num-products="5"
          bg-image="/images/home_wilzenberger-bg-footer.png"/>

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
