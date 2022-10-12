<template>
  <div class="flex flex-col">
  <div class="relative">

    <input


        ref="search"
        name=""
        type="search"
           placeholder="Search"
        v-model="query"

    />

<!--    <input type="hidden" name="type" :value="`products${handle}`" />
&lt;!&ndash;    <input type="hidden" name="options[unavailable_products]" value="hide" />
    <input type="hidden" name="options[prefix]" value="last" />&ndash;&gt;
    <input type="submit" value="Search" />-->

  </div>


    <div v-if="query" class="absolute mt-16" >

      <transition-group name="slide" :duration="500" mode="in-out">
  <div v-for="item of collection.edges" :key="item.node.id" :id="item.node.id">



<a :href="`products/${item.node.title}`">
  <img class="search-result-item" :src="item.node.images.edges[0].node.src">
  <div class="search-item-title">
    <p v-if="item.node.title">{{item.node.title}}</p>

  </div>


</a>
  </div>
      </transition-group>
    </div>
    <div class="absolute mt-12" v-else> <p>No Results</p></div>
  </div>

</template>

<script setup lang="ts">

import {useQuery} from "@vue/apollo-composable";
import {products} from "~/apollo/queries/products";
import {computed} from "vue";



const query = ref("");

const items = []

const numProducts = 1

const { result, error } = useQuery(products, {

  numProducts , query
});

const collection = computed(() => result.value?.products ?? [])


watch(query , (currentValue, oldValue) => {
    console.log(currentValue);
    console.log(oldValue);
    console.log(query.value)
  });


function test(s) {

  console.log(query)
  console.log(collection)

  console.log(s)

}

</script>
