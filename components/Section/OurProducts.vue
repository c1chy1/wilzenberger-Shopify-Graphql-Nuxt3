<template>

  <section
      class="w-full    xl:bg-no-repeat  text-white text-center bg-cover"
      :style="`background-image: url(${props.bgImage});`">

    <h3 class="uppercase  text-3xl xl:text-5xl font-semibold  pt-4 xl:pt-12">Unsere Produkte</h3>
    <div class="container max-w-6xl  flex justify-center items-center mx-auto">
      <div class="flex flex-col w-1/2">
        <hr class=" text-secondary text-opacity-40  border-dashed divide-y">
        <p class=" py-2 font-semibold xl:text-xl text-right uppercase">Entdecke die Vielfalt</p>
        <hr class="text-secondary text-opacity-40  border-dashed divide-y">
      </div>

      <nuxt-img
          class="mx-5"
          format="webp"
          src="/images/home_wilzenberger-icon-flower.png" alt="flower"/>
      <div class="flex flex-col w-1/2">
        <hr class=" text-secondary text-opacity-40  border-dashed divide-y">
        <p class="uppercase py-2 font-semibold xl:text-xl text-left">Erlebe die Wirkung</p>
        <hr class=" text-secondary text-opacity-40  border-dashed divide-y">
      </div>
    </div>

    <div class="flex container max-w-6xl justify-center mx-auto">
      <div>

        <ul>
          <li class="mb-4">
            <article class="flex items-center px-1">

              <IconBasic image-link="public/icons/lactosefrei.png"
                         alt="lactosefrei"
              />
              <h4 class="ml-2 xl:ml-4 text-sm xl:text-xl uppercase font-semibold">Laktosefrei</h4>
            </article>
            <p class="w-full mx-auto py-2 px-1 text-xs xl:text-sm text-left ">Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod</p>
            <hr class="text-secondary text-opacity-40  border-dashed divide-y">
          </li>

          <li class="mb-4">
            <article class="flex items-center px-1">

              <IconBasic image-link="public/icons/zuckerfrei.png"
                         alt="zuckerfrei"
              />
              <h4 class="ml-2 xl:ml-4 text-sm xl:text-xl  uppercase font-semibold">Zuckerfrei</h4>
            </article>
            <p class="w-full mx-auto py-2 px-1 text-xs xl:text-sm text-left">Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod</p>
            <hr class="text-secondary text-opacity-40  border-dashed divide-y">
          </li>
          <li class="mb-4">
            <article class="flex items-center px-1">
              <IconBasic image-link="public/icons/glutenfrei.png"
                         alt="glutenfrei"
              />
              <h4 class="ml-2 xl:ml-4 text-sm xl:text-xl  uppercase  font-semibold">Glutenfrei</h4>
            </article>
            <p class="w-full mx-auto py-2 px-1 text-xs xl:text-sm text-left">Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod</p>
            <hr class="text-secondary text-opacity-40  border-dashed divide-y">
          </li>
        </ul>


      </div>
      <div class="w-1/2 ">

        <img src="/images/home_wilzenberger-product.png" alt="product"/>

      </div>
      <div>
        <ul>
          <li class="mb-4">
            <article class="flex flex-row-reverse items-center px-1">
              <IconBasic image-link="public/icons/gen.png"
                         alt="Ohne Gentechnik"/>

              <h4 class="mr-2 xl:mr-4 text-sm xl:text-xl uppercase font-semibold">Ohne Gentechnik</h4>
            </article>
            <p class="w-full mx-auto py-2 px-1 text-xs xl:text-sm text-right">Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod</p>
            <hr class="text-secondary text-opacity-40  border-dashed divide-y">
          </li>

          <li class="mb-4">
            <article class="flex flex-row-reverse items-center px-1">
              <IconBasic image-link="public/icons/vegan.png"
                         alt="Vegan"/>

              <h4 class="mr-2 xl:mr-4 text-sm xl:text-xl uppercase font-semibold">Vegan</h4>
            </article>
            <p class="w-full mx-auto py-2 px-1 text-xs xl:text-sm text-right">Lorem ipsum dolor sit amet, consetetur
              sadipscing elitr, sed diam nonumy eirmod</p>
            <hr class="text-secondary text-opacity-40  border-dashed divide-y">
          </li>
          <li class="mr-4 md:mr-0">
            <BasicButton
                @click="addGraviola"
                class="text-bs-white w-full text-center text-xs m-auto my-4 py-2 lg:my-6  lg:py-2 xl:px-4 border border-transparent shadow-sm text-white  bg-bs-red hover:bg-bs-red transition-all ease-linear active:text-tertiary  uppercase"
                color="Blue"
                label="In den warenkorb"
                label-hover="Danke!"
                tag="button"
            >In den warenkorb
            </BasicButton>

          </li>
        </ul>
      </div>
    </div>

  </section>


</template>

<script setup lang="ts">

import {useQuery} from "@vue/apollo-composable";
import {productByHandle} from "~/apollo/queries/productByHandle";
import {computed} from "vue";
import {useProduct} from "~/stores/product";
import {useCart} from "~/stores/cart";

interface Props {
  bgImage: string;

}
const props = defineProps<Props>()


const {result, error} = useQuery(productByHandle, {


  handle: 'weihrauch-extrakt'
});

const variant = computed(() => result.value?.productByHandle ?? [])

function addGraviola() {

  const line = {merchandiseId: variant.value?.variants.edges[0].node.id || useProduct().variant?.id, quantity: 1}
  useCart().addToCart([line])

}
</script>

