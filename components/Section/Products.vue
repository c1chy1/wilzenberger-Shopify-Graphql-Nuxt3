<template>


  <section class="section over-hide h-screen grid lg:grid-cols-4 grid-rows-1" >

            <div
                :class="`animate__delay-${index+1}s`"
                class="animate__animated animate__bounceInRight animate__fast  card-3d-wrap h-[26rem] sm:h-[32rem] xl:h-[32rem] w-1/2 lg:w-3/4 mx-auto my-8 xl:my-16"
                v-for="(product, index) in collection.edges">
              <div class="card-3d-wrapper shadow-2xl">


                <div class="card-back">
                  <div class="pricing-wrap">
                    <h4 class="mb-5 text-xs xl:text-lg">{{ product.node.handle }}</h4>
                    <ShopProductPriceCard
                        :basic-price="product.node.variants.edges[0].node.unitPrice.amount"
                        :basic-price-unit="product.node.variants.edges[0].node.unitPriceMeasurement.quantityValue"
                        :price="product.node.priceRange.maxVariantPrice.amount"
                        :currency="product.node.priceRange.maxVariantPrice.currencyCode"
                        class="mb-0 md:mb-2 text-xs xl:text-lg text-center"
                    />

                    <ShopProductWeight
                        :weight="product.node.variants.edges[0].node.weight"
                        :weight-unit="`mg`"
                        class="mt-4 md:mt-8 text-xs xl:text-lg font-semibold text-center"
                    />
                    <p class="mb-1"><i class="uil uil-location-pin-alt size-22"></i></p>
                    <p class="mb-4">Deutschland</p>

                    <NuxtLink :to="`/products/${product.node.handle}`"
                              class="border-b-primary text-center link flex justify-center  w-1/2 mx-auto">Zeig mir!</NuxtLink>

                    <div class="img-wrap img-1 ">
                      <img src="https://assets.codepen.io/1462889/grass.png" alt="">
                    </div>
                    <div class="img-wrap img-2 w-1/2">

                      <ShopProductImage

                          :srcset="product.node?.images?.edges[0].node?.src"
                          :id="product.node.id"
                          :alt="product.handle"
                          :src="product.node?.images?.edges[0].node?.src"
                          :width="product.node?.images?.edges[0].node?.width ?? ''"
                          :height="product.node?.images?.edges[0].node?.height ?? ''"
                          class="w-full drop-shadow-xl"
                      />

                    </div>
                    <div class="img-wrap img-3">
                      <img src="/public/images/Ivy.png" alt="">
                    </div>
                    <div class="img-wrap img-4">
                      <img src="/public/images/IvyRock.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

</template>

<script setup lang="ts">


import {useQuery} from "@vue/apollo-composable";
import {computed} from "vue";
import {products} from "~/apollo/queries/products";
import gsap from "gsap";

const props = defineProps<{
  numProducts: number
}>()


const numProducts = props.numProducts;

const { result, error } = useQuery(products, {

  numProducts
});
const collection = computed(() => result.value?.products ?? [])



</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900');

a {
  cursor: pointer;
  transition: all 200ms linear;
}
a:hover {
  text-decoration: none;
}
.link {
  color: #c4c3ca;
}
.link:hover {
  color: #ffeba7;
}
.over-hide {
  overflow: hidden;
}
.size-22{
  font-size: 22px;
}
.section{
  position: relative;
  width: 100%;
  z-index: 1;
}
.full-height{
  min-height: 100vh;
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked){
  position: absolute;
  left: -9999px;
}
.pricing:checked + label,
.pricing:not(:checked) + label{
  position: relative;
  display: block;
  width: 260px;
  height: 44px;
  border-radius: 4px;
  padding: 0;
  margin: 0 auto;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 44px;
  padding: 0 25px;

  overflow: hidden;
  color: #fff;
  text-align: left;
}
.pricing:checked + label:before,
.pricing:not(:checked) + label:before{
  position: absolute;
  content: '';
  z-index: -2;
  background-color: #102770;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
}
.pricing:checked + label:after,
.pricing:not(:checked) + label:after{
  position: absolute;
  content: '';
  z-index: -1;
  background-color: #ffeba7;
  width: 128px;
  height: 40px;
  display: block;
  top: 2px;
  left: 2px;
  border-radius: 2px;
  transition: left 300ms linear;
}
.pricing:checked + label:after {
  left: 130px;
}
.block-diff {
  display: block;
  mix-blend-mode: difference;
}

.card-3d-wrap {
  position: relative;
  max-width: calc(100% - 20px);

  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.card-3d-wrapper {
  width: 100%;
  height: 100%;
  position:absolute;
  top: 0;
  left: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  transition: transform 700ms 400ms ease-out;
}
.card-back {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 6px;
  left: 0;
  top: 0;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: 0 12px 35px 0 rgba(16, 39, 112,.07);
}
.card-back {
  transform: rotateY(0);
}
.card-3d-wrap:hover ~ .card-3d-wrap .card-3d-wrapper {
  transition: transform 700ms 400ms ease-out;
}
.pricing-wrap{
  position: relative;
  padding-top: 160px;
  width: 100%;
  display: block;
  z-index: 1;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -o-backface-visibility: hidden;
  backface-visibility: hidden;
}
.pricing-wrap h4{
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  letter-spacing: 3px;
  line-height: 1.7;
  color: #102770;
  transform: translate3d(0, 0, 35px) perspective(100px);
}
.pricing-wrap h4:before{
  position: absolute;
  content: '';
  z-index: -1;
  background: linear-gradient(217deg, #448ad5, #b8eaf9);
  width: 70px;
  height: 70px;
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 6px 20px 0 rgba(16, 39, 112,.3);
  animation: border-transform 6s linear infinite;
}
.card-back .pricing-wrap h4:before{
  background: linear-gradient(217deg, #8BA039, #a3c984);
}
@keyframes border-transform{
  0%,100% { border-radius: 63% 37% 54% 46% / 55% 48% 52% 45%; }
  14% { border-radius: 40% 60% 54% 46% / 49% 60% 40% 51%; }
  28% { border-radius: 54% 46% 38% 62% / 49% 70% 30% 51%; }
  42% { border-radius: 61% 39% 55% 45% / 61% 38% 62% 39%; }
  56% { border-radius: 61% 39% 67% 33% / 70% 50% 50% 30%; }
  70% { border-radius: 50% 50% 34% 66% / 56% 68% 32% 44%; }
  84% { border-radius: 46% 54% 50% 50% / 35% 61% 39% 65%; }
}
.pricing-wrap h2{
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 36px;
  line-height: 1.1;
  color: #102770;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.pricing-wrap h2 sup{
  font-size: 20px;
}
.pricing-wrap p{
  position: relative;
  width: 100%;
  display: block;
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  letter-spacing: 1px;
  color: #102770;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.card-back h2,
.card-back p,
.card-back h4{
  color: #0c1c00;
}
.link {
  position: relative;
  padding: 10px 20px;
  border-radius: 4px;
  text-align: center;
  color: #ffeba7;
  background-color: #102770;
  transition: all 200ms linear;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  transform: translate3d(0, 0, 30px) perspective(100px);
}
.link:hover {
  color: #102770;
  background-color: #ffeba7;
}
.card-back .link{
  background-color:#8BA039;
}
.card-back .link:hover{
  color: #0c1c00;
  background-color: #ffeba7;
}
.img-wrap img{
  width: 100%;
  height: auto;
  display: block;
}

.img-1 {
  position: absolute;
  display: block;
  left: 0;
  top: 0;
  z-index: 1;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  overflow: hidden;
  width: 100%;
  transform: translate3d(0, 0, 15px) perspective(100px);
}



.img-2{
  position: absolute;
  display: block;
  left: -35px;
  top: -40px;

  z-index: 5;
  opacity: 0;
  transform: translate3d(0, 0, 45px) perspective(100px) scale(0.5);
  pointer-events: none;
  transition: transform 300ms ease, opacity 200ms 150ms ease;
}
.card-3d-wrap:hover .img-2 {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 45px) perspective(100px) scale(1);
  transition: transform 300ms 1200ms ease, opacity 300ms 1200ms ease;
}



.img-3{
  position: absolute;
  display: block;
  right: -70px;
  top: -50px;
  z-index: 6;
  width: calc(50% + 35px);
  transform: translate3d(0, 0, 35px) perspective(100px) scale(0.5) rotate(0deg);
  opacity: 0;
  pointer-events: none;
  transition: transform 300ms 100ms ease, opacity 200ms 250ms ease;
}
.card-3d-wrap:hover .img-3 {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 35px) perspective(100px) scale(1) rotate(10deg);
  transition: transform 300ms 1300ms ease, opacity 300ms 1300ms ease;
}

.img-4{
  position: absolute;
  display: block;
  right: -20px;
  bottom: -135px;
  z-index: 5;
  width: calc(20% + 75px);
  transform: translate3d(0, 0, 25px) perspective(100px) scale(1);
  opacity: 0;
  pointer-events: auto;
  transition: transform 300ms 1300ms ease, opacity 200ms 1300ms ease;
}


.card-3d-wrap:hover .img-4 {
  opacity: 1;
  transform: translate3d(0, 0, 25px) perspective(100px) scale(0.7);
  pointer-events: none;
  transition: transform 300ms ease, opacity 200ms 150ms ease;
}



</style>
