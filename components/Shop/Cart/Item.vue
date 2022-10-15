<template>
  <div class="flex justify-around py-1 xl:py-3 mx-4  -mb-[1px] space-x-5  xl:space-x-10  bg-primary bg-opacity-5  border border-primary relative z-10">

    <NuxtLink :to="productPath" class="border-b-primary">
    <div class="col-span-2 row-span-2">
      <img
          class="object-cover w-2/3 sm:w-full rounded-md aspect-square hover:border hover:border-primary hover:transition-all hover:bg-primary hover:bg-opacity-70"
          :src="image.url"
          :alt="image.altText"
          :width="image.width"
          :height="image.height"
      />
    </div>
    </NuxtLink>
    <div class="flex flex-row items-start justify-between col-span-2 row-span-1 ">
      <div>
        <div class="flex items-center my-2 text-sm text-gray-500 ">
          <template v-for="(option, i) in item.node.merchandise.selectedOptions">
            <template v-if="option.value !== 'Default Title'">
              <span
                  :class="i !== item.node.merchandise.selectedOptions.length - 1 || i === 0 ? 'pr-3' : 'pl-3 border-l border-gray-300'">
                {{ option.value }}
              </span>
            </template>
          </template>
          <div class=" px-2 xl:px-4">

            <div class="text-sm sm:text-xl text-primary xl:text-2xl"><p>{{item.node.merchandise.product.title}}</p>
            </div>

            <div class="text-lg sm:text-xl xl:text-3xl text-tertiary">{{ price }}</div>
          </div>
        </div>

        <BasicSelect
            size="sm"
            class="flex justify-center"
            v-model="quantity"
            :options="[...Array(10).keys()].map(i => i + 1)"
        />


      <div @click="openModal" class="text-white cursor-pointer hover:bg-tertiary bg-primary transition-all absolute -left-3 -top-2 z-50">
        <Icon @click="show = true" icon="uil:times" class="w-6 h-6"/>
        <Teleport to="body">
          <transition name="modal-fade">
            <div v-if="show" class="modal-overlay z-50">
              <div v-if="show" class="modal p-4 bg-tertiary bg-opacity-25" >

              <div class="cookiesContent" id="cookiesPopup">
                <div class="flex justify-between">
                  <nuxt-img format="webp" src="icon.png" alt="logo" class="xl:w-32 xl:h-32"/>
                <button @click="show = false" class="close hover:text-primary transition-all text-white">✖</button>

                </div>
                <p class="py-4 text-white">Sind Sie sicher Artikel aus dem Warenkorb löschen ?</p>

                <BasicButton
                    @click="closeModal"
                    class="bg-primary text-white w-full ml-2 mt-2 py-2 uppercase active:text-tertiary w-full"
                    color="Blue"
                    label="Kein Problem"
                    label-hover="Danke!"
                    tag="button">
                </BasicButton>
              </div>
            </div>

            </div>
          </transition>
        </Teleport>

      </div>

        <div class="self-center  col-span-2 row-span-1 text-sm pt-2 xl:pt-4 text-tertiary">
          <div class="flex items-center justify-center space-x-2 text-xs sm:text-base  xl:text-xl">
            <template v-if="item.node.merchandise.availableForSale">
              <Icon icon="uil:check" class="w-3 h-3  xl:w-6 xl:h-6 text-emerald-500"/>
              <span>auf Lager</span>
            </template>
            <template v-else>
              <Icon icon="uil:times" class="w-6 h-6"/>
              <span>Not Available</span>
            </template>
          </div>

        </div>

    </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useCart} from '@/stores/cart'
import {CartLineEdge} from '@/types/components'
import {Icon} from '@iconify/vue'
import {formatLocalePrice} from '@/utilities/money'


interface CartItem {
  item: CartLineEdge
}

const props = defineProps<CartItem>()

const show = ref(false)
const quantity = ref(props.item.node.quantity)
const productPath = `/products/${props.item.node.merchandise.product.handle}`;

const price = computed(() => formatLocalePrice(
    +props.item.node.estimatedCost.subtotalAmount.amount,
    "en-US",
    props.item.node.estimatedCost.subtotalAmount.currencyCode
))

const image = {
  url: props.item.node.merchandise.product.featuredImage.thumbnail,
  width: +props.item.node.merchandise.product.featuredImage.width,
  height: +props.item.node.merchandise.product.featuredImage.height,
  altText: props.item.node.merchandise.product.featuredImage.altText ?? '',
}

const openModal = () => {

  show.value = true

}
const closeModal = () => {

  show.value = false

  if (!show.value) {
    useCart().removeFromCart([props.item.node.id])
  }
}


const updateQuantity = () => {
  const line = {
    id: props.item.node.id,
    quantity: +quantity.value,
  }
  useCart().updateCartItem([line])
}

watch(quantity, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    updateQuantity()
  }
})

</script>

<style scoped>


button.close {
  width: 30px;
  font-size: 20px;
  align-self: flex-start;
  background-color: transparent;
  border: none;
  margin-bottom: 10px;
}


.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.modal {
  position: fixed;
  z-index: 999;
  top: 20%;

}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

</style>

