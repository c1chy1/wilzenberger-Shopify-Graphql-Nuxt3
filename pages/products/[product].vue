<template :key="handle">
  <section class="mx-auto ">
    <p v-if="loading">Loading...</p>
    <template v-else>
      <template v-if="product">
        <Html>
        <Head v-if="product?.title && product?.description">
          <Title>{{ product.title }}</Title>
          <Meta name="description" :content="product.description"/>
        </Head>
        </Html>
        <div class=" container xl:max-w-6xl pt-4 pb-16 mx-auto">

          <p class="flex justify-start text-base text-tertiary pl-4">

            <NuxtLink to="/" class="hover:text-primary">Home >&nbsp
            </NuxtLink>
            <NuxtLink class="hover:text-primary" to="/produkte">
              Produkte >&nbsp
            </NuxtLink>

            <ShopProductTitle
                tag="a"
                :title="product.title"
                class="text-primary hover:text-tertiary"
                :href="product.handle"
                text-direction="left"
            >
            </ShopProductTitle>

          </p>
        </div>
        <section
            class="container xl:mb-24 gap-x-6 grid grid-cols-1 xl:gap-10 md:grid-cols-2 px-4 mt-4 md:w-5/6 xl:max-w-6xl mx-auto">

          <ShopProductImage
              :alt="product.handle"
              :sizes="sizes"
              :srcset="srcset"
              :width="product.images?.edges[0]?.node?.width ?? ''"
              :height="product.images?.edges[0]?.node?.height ?? ''"
              class="w-full  border border-tertiary border-opacity-20 "
          />


          <div class=" xl:ml-0">
            <ShopProductTitle
                tag="h2"
                :title="product.title"
                text-direction="left"
                class=" text-3xl  xl:text-lg text-primary"

            >Kapseln
            </ShopProductTitle>

            <ShopProductReview

                :id="product.id"
            >Art. Nr.
            </ShopProductReview>
            <hr class="my-4">

            <ShopProductDescription

                class="text-sm pb-4"
                v-html="product.descriptionHtml"/>


            <div class="bg-secondary bg-opacity-10 p-8">
              <div class="flex justify-between">
                <small>Lieferzeit 2-4 Werktage</small>
                <div>
                  <ShopProductPrice
                      color="primary"
                      :price="product.priceRange.maxVariantPrice.amount"
                      :currency="product.priceRange.maxVariantPrice.currencyCode"
                  ><small>zzgl. 19% MwSt.</small>
                  </ShopProductPrice>

                </div>
              </div>
              <ShopProductQuantity/>

            </div>

          </div>
          <client-only>
          <SectionGallery
              :gallery="product"
          />
          </client-only>
        </section>
        <section class="flex flex-col mt-12 xl:flex-row px-4 mt-4 md:w-5/6 xl:max-w-6xl mx-auto">
          <SectionTabs/>

          <SectionAdvantages/>

        </section>
        <ShopFeaturedProducts

            id="product-grid"
            :num-products="3"
            bg-image="/images/home_wilzenberger-products-bg-gray.png"
            class="text-center text-tertiary pt-12 pb-12"
        >
          <h3 class="uppercase mx-auto w-10/12 xl:w-full xl:text-xl leading-none font-semibold">Diese produkte könnten
            Ihnen auch gefallen</h3>
          <p class="mt-2 mb-4 pb-4 w-10/12 xl:w-full mx-auto text-xs xl:text-base">Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt</p>
        </ShopFeaturedProducts>



      </template>
    </template>

  </section>
</template>


<script setup lang="ts">


import {useQuery} from "@vue/apollo-composable";
import {productByHandle} from "~/apollo/queries/productByHandle";
import {breakpointsTailwind} from "@vueuse/core";
import {getSrcset} from "~/utilities/images";


const route = useRoute();
const handle = route.params.product;

const {result, loading, error} = useQuery(productByHandle, {handle});

const product = computed(() => result.value?.productByHandle ?? [])


const src = computed(() => product.value.images?.edges[3]?.node?.src ?? "");
const sizes = `(max-width: ${breakpointsTailwind.md}px) 95vw, 40vw`;
const srcset = computed(() => getSrcset(src.value || ""));

</script>
