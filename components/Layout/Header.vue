<template>

  <header
      class="w-full  h-[70vh] xl:h-[80vh] flex items-center ">

<nuxt-img format="webp"
          quality="50"
          preload
          sizes="sm:50vw lg:75vw 2xl:100vw"
          class=" h-2/5 sm:h-full w-full mb-auto  "
          src="https://res.cloudinary.com/dy8wzssqw/image/upload/f_auto/v1683744574/home_wilzenberger-bg-header_f055ns.png"></nuxt-img>

<div class=" 2xl:mb-20 w-full absolute">
<slot></slot>
</div>
  </header>
</template>
