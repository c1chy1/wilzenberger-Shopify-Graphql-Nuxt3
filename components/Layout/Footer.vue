<template>
<footer

     class="bg-no-repeat text-white bg-cover"
    :style="`background-image: url(${props.bgImage});`">

  <div class="xl:w-2/3 grid grid-cols-2 sm:grid-cols-4 xl:p-4 items-center justify-items-center mx-auto divide-x-2">
    <div class="flex hidden sm:block h-full items-center w-2/3 xl:w-full">

<IconBasic
    image-link="/images/home_wilzenberger-logo.png"
      alt="logo"
/>
  </div>
  <div class="h-full pl-1 xl:pl-4">

    <ul class="h-full flex flex-col justify-evenly text-xs md:text-sm xl:text-base">
      <li>

        <IconBasic
            class="inline-block pr-1 xl:pr-2 w-1/6 "
            image-link="/public/icons/icon-footer-airplane.png"
                   alt="airplane"/>
        Adressdaten...</li>
      <li>
        <IconBasic
            class="inline-block pr-1 xl:pr-2 w-1/6 "
            image-link="/public/icons/icon-footer-mail.png"
            alt="mail"/>
        Mail...</li>
      <li>
        <IconBasic
            class="inline-block pr-1 xl:pr-2 w-1/6 "
            image-link="/public/icons/icon-footer-phone.png"
            alt="phone"/>
       Tel...</li>
      <li>
        <IconBasic
            class="inline-block pr-1 xl:pr-2 w-1/6 "
            image-link="/public/icons/icon-footer-globe.png"
            alt="globe"/>www...</li>
    </ul>

  </div>
    <div class=" h-full pl-1 md:pl-2 xl:pl-8 py-2">
    <ul class="h-full xl:list-disc text-xs md:text-sm xl:text-base flex flex-col justify-evenly">
      <li><NuxtLink to="/" class="hover:text-tertiary transition-all">Home</NuxtLink></li>
      <li><NuxtLink to="/produkte"    class="hover:text-tertiary transition-all">Unsere Produkte</NuxtLink></li>
      <li><NuxtLink to="/herstellung" class="hover:text-tertiary transition-all">Herstellung</NuxtLink></li>
      <li><NuxtLink to="/kontakt"     class="hover:text-tertiary transition-all">Kontakt</NuxtLink></li>
      <li><NuxtLink to="/datenschutz" class="hover:text-tertiary transition-all">Dateschutz / AGB</NuxtLink></li>
      <li><NuxtLink to="/impressum"   class="hover:text-tertiary transition-all">Impressum</NuxtLink></li>
    </ul>

  </div>
    <div class=" h-full md:pl-2 xl:pl-4 hidden sm:block">

    <ul class="h-full xl:list-disc pl-1 xl:pl-4 text-xs md:text-sm xl:text-base flex flex-col justify-evenly">
      <li>Zahlung

        <div class="flex">


          <IconBasic
              class="w-12 h-6 mt-2 mr-2 w-1/2"
              image-link="/public/icons/Paypal.png"
              alt="paypal"/>


          <IconBasic
              class="w-12 h-6 mt-2 mr-2 w-1/2"
              image-link="/public/icons/MasterCard_logo.png"
              alt="master card"/>

        </div>
      </li>
      <li >Lieferung

        <div class="flex">
          <IconBasic
              class="w-12 h-6 mt-2 mr-2 w-1/2"
              image-link="/public/icons/dhl_logo2.png"
              alt="dhl"/>

          <IconBasic
              class="w-12 h-6 mt-2 mr-2 w-1/2"
              image-link="/public/icons/Hermes.jpg"
              alt="hermes"/>
        </div>
      </li>
    </ul>


  </div>
  </div>

<div class="w-full border-t-2">
  <div class="xl:w-10/12 flex mx-auto text-xs xl:text-base flex justify-around">

    <p class=" pl-1 py-2 xl:py-4">Copyright © 2023 by  <a href="https://www.c1chy.de" class="hover:text-tertiary transition-all">c1chy...</a></p>

    <div>
      <ul class="flex py-2 xl:py-4 uppercase  items-center font-semibold text-xs sm:text-sm">
        <li class="pr-2">AGB</li>
        <li><NuxtLink to="/datenschutz" class="pr-2 hover:text-tertiary transition-all">Datenschutz
        </NuxtLink></li>
        <li><NuxtLink to="/impressum" class="pr-2 hover:text-tertiary transition-all">Impressum</NuxtLink></li>


      </ul>

    </div>
  </div>
</div>
</footer>


</template>

<script setup lang="ts">

interface Props {
  bgImage: string;

}

const props = defineProps<Props>()

</script>
