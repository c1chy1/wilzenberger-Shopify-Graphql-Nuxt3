<template>

  <section
      class="w-full xl:min-h-[35vh]  hidden sm:flex"
  >

    <img
            loading="lazy"

            sizes=" sm:75vw 2xl:100vw"
            class=" w-full object-cover"
            src="https://res.cloudinary.com/dy8wzssqw/image/upload/c_scale,w_1200/f_auto/v1683744053/home_wilzenberger-bg-about_qjhn5b.png"
    >

    <div class="xl:mb-12 w-full sm:absolute ">
      <slot></slot>
    </div>
  </section>


</template>


