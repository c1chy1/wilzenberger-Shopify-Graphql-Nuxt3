<template>

  <nav class="w-full flex md:flex relative bg-[length:100%_100%] bg-[right] z-[35]"
  >


    <ul
        class=" xl:w-3/5 mx-auto flex justify-around space-x-6 items-center text-secondary text-base xl:text-xl uppercase font-bold"
    >
        <nuxt-img src="/images/navigation.png"
                  loading="lazy"
                  format="webp"
                  quality="75"
                  class="object-cover absolute w-full"

        ></nuxt-img>
      <li class="xl:pr-48 logo" >
        <NuxtLink to="/">
          <IconBasic
              image-link="/images/home_wilzenberger-logo.png"
              alt="logo"
              class="md:w-2/3 xl:w-full sticky"
          />
        </NuxtLink>
      </li>


      <li id="nav"  :key="item.label" v-for="(item, index) of ids"

      class="animate__animated animate__bounceInRight "
      :class="`animate__delay-${index+8}s`"
      >
        <NuxtLink

            class=" transition-all hover:text-tertiary" :to="item.route">{{ item.label }}
        </NuxtLink>
      </li>
      <li>
        <ShopProductSearch/>
     </li>
    </ul>
  </nav>


</template>


<script setup lang="ts">

import {ids} from '~~/config/menu'



</script>
<style scoped>

.router-link-active {

  color: #8BA039;

}

.logo .router-link-active:before {

  width: 0;
}
#nav  {
  position: relative;
}


#nav:before {
  content: "";
  position: absolute;
  bottom: -11px;
  left: 0;
  width: 0;
  height:2px;
  background: #828282;
  transition: all 0.5s ease-out;

}

#nav:hover:before {
  transition: all 0.3s;
  width: 100%;
}

#nav a {
  position: relative;

  transition: all 0.3s ease-out;
}


</style>
