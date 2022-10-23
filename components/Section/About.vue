<template>

  <section
      class="w-full min-h-[65vh] bg-no-repeat bg-contain  bg-bottom bg-opacity-10 xl:bg-[length:138%_80%]   xl:bg-[length:138%_100%]  xl:bg-no-repeat flex"
  >
    <nuxt-img format="webp" class="hidden sm:block w-full" src="/images/home_wilzenberger-bg-about.png"></nuxt-img>

    <div class="mb-12 w-full absolute ">
      <slot></slot>
    </div>
  </section>


</template>


