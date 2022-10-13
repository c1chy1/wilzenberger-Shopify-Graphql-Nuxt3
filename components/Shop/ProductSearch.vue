<template>
  <div class="flex">
    <div class="search-box">
      <button class="btn-search">
        <i class="fas fa-search"></i>

   <IconBasic
       class="fill-tertiary xl:w-2/3"
   image-link="/public/icons/search-icon.svg"
       alt="search button"
   />
      </button>
      <input
          ref="search"
          type="search"
          placeholder="Search"
          v-model="query"
          class="input-search uppercase border-none focus:ring-0 cursor-pointer transition-all hover:fill-primary" >
    </div>

    <transition name="fade">
    <div v-if="query.length > 1" >
    <ShopProductSearchItem

        v-for="(product, index) in collection.edges"
        :index="index"
        :key="product.node.title"
        :product="product.node"
        class="absolute  right-14 top-0"/>
    </div>

    <div v-else></div>
    </transition>

  </div>

</template>

<script setup lang="ts">

import {useQuery} from "@vue/apollo-composable";
import {products} from "~/apollo/queries/products";
import {computed} from "vue";

let query = ref([]);



const numProducts = 5

const { result, error } = useQuery(products, {

  numProducts ,
  query
});

const collection = computed(() => result.value?.products ?? [])


watch(query , (currentValue, oldValue) => {
  console.log(currentValue);
    console.log(oldValue);
    console.log(query.value)
  });

</script>
<style scoped>

.search-box{
  width: fit-content;
  height: fit-content;
  position: relative;
  padding-right: 2rem;
  outline: none;
}
.input-search{
  margin-right: 2rem;
  height: 50px;
  width: 25px;
  transition: all .5s ease-in-out;
  background-color: transparent;
  color:#8BA039 ;
}
.input-search::placeholder{
  color:#828282;
  outline: none;
}
.btn-search{
  width: 50px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  position: absolute;
  outline: none;
  right: 0px;
  color: #8BA039 ;
  background-color:transparent;
  pointer-events: painted;

}
.btn-search:focus ~ .input-search{
  width: 170px;
  border-radius: 0px;
  outline: none;
  background-color: transparent;
  border-bottom:2px solid #828282;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}
.input-search:focus{
  width: 200px;
  outline: none;
  background-color: transparent;
  border:2px solid #828282;
  transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
}


.btn-search:before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height:2px;
  background: #828282;
  transition: all 0.5s ease-out;

}

.btn-search:hover:before {
  transition: all 0.3s;
  width: 100%;
}

.btn-search a {
  position: relative;
  transition: all 0.3s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease;
}


</style>
