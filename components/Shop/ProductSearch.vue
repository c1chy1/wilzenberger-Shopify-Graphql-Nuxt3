<template>
  <div class="flex">
    <div class="search-box ">
      <button class="btn-search">
        <i class="fas fa-search"></i>

   <IconBasic
       class="fill-tertiary w-8 xl:w-2/3"
   image-link="/public/icons/search-icon.svg"
       alt="search button"
   />
      </button>
      <input
          ref="search"
          type="search"
          placeholder="Search"
          v-model="searchTerm"
          class="input-search  border-none focus:ring-0 cursor-pointer transition-all hover:fill-primary" >
    </div>


        <template v-if="searchTerm">

        <div class="gap-6 p-6 flex items-end absolute top-12  xl:top-0 right-2">
    <ShopProductSearchItem

        v-for="(product, index) in collection"
        :index="index"
        :key="product.id"
        :product="product"
        class="lg:w-32 z-50 "/>
    </div>

        </template>


  </div>

</template>

<script setup lang="ts">
import { useRouteQuery } from '@vueuse/router'

import {useQuery} from "@vue/apollo-composable";

import {products} from "~/apollo/queries/products";
import type {
    ProductConnection,
} from '@/types/search'

import {computed} from "vue";

const numProducts = 5

const searchTerm = useRouteQuery('q', null, {
    mode: 'replace',
    route: useRoute(),
    router: useRouter(),
})


/*
interface SearchReturn {
    products: ProductConnection
}
*/

const titleQueryString = computed(() => searchTerm.value ? `title:${searchTerm.value}*` : null)

const variables = computed(() => ({
    first: 40,
    query: titleQueryString.value,
    reverse: true,
}))


const {
    result,
    loading,
    refetch,
    fetchMore,
} = useQuery(products, {
    numProducts ,
    ...variables.value
});


const collection = computed(() => result.value?.products?.edges?.map(edge => edge.node) || [])




console.log(result)

console.log(products)

const searchLoading = ref(false)
watchDebounced(searchTerm, async (newVal, oldVal) => {

    if (newVal !== oldVal) {
        if (newVal !== '') {
            searchLoading.value = true
            await refetch({ ...variables.value })?.then(() => {
                searchLoading.value = false

                console.log(newVal)
                console.log(variables.value)
            })
        }
    }
}, {
    debounce: 650,
})


watch(searchTerm , (currentValue, oldValue) => {
    console.log(currentValue);
    console.log(oldValue);
    console.log(searchTerm)
});



/*
let query = ref('');



const numProducts = 5

const { result, error } = useQuery(products, {

  numProducts ,
  query
});

const collection = computed(() => result.value?.products ?? [])


console.log(collection)

const state = reactive({
    collection: []
})



watch(query , (currentValue, oldValue) => {
  console.log(currentValue);
    console.log(oldValue);
    console.log(query.value)
  });*/

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
