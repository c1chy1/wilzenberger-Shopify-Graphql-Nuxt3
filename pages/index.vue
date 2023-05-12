<template>

  <section>
    <BasicSeoHead
        title="Wilzenberger"
        description="Wilzenberger"/>
    <LayoutHeader>
      <h1
          class="animate__animated animate__heartBeat animate__repeat-2 animate__delay-15s  uppercase text-center text-4xl md:text-5xl xl:text-7xl text-primary w-full m-auto leading-none animate__delay-5s animate__animated animate__wobble ">Das
        Beste <br> aus der natur
      </h1>
      <p class="uppercase text-center 2xl:text-2xl text-secondary w-full m-auto leading-tight ">Lorem ipsum dolor sit
        amet,
        <br> consetetur sadipscining.</p>
    </LayoutHeader>

    <AnimationSun/>
    <SectionAbout>

      <h2 class=" font-serif text-center text-3xl md:text-4xl  xl:text-6xl text-tertiary w-full font-bold  leading-none ">
        Das Beste
        aus dem Sauerland!</h2>

      <nuxt-img
              loading="lazy"
              format="webp"
              quality="50"
              sizes="sm:50vw lg:75vw 2xl:100vw"
              class="mx-auto xl:my-2"
              src="/images/home_wilzenberger-line-about.png"
              alt="about">
      </nuxt-img>
      <p class=" bg-[#F9F9F9] bg-opacity-30 rounded-full p-4 text-center w-10/12  text-secondary text-xs md:text-sm xl:text-base  xl:w-1/2  leading-tight mx-auto ">
        Lorem ipsum dolor sit amet, consetetur
        sadipscining.Lorem ipsum dolor sit amet, consetetur sadipscining.Lorem ipsum dolor sit amet, consetetur
        sadipscining.Lorem ipsum dolor sit amet, consetetur sadipscining.Lorem ipsum dolor sit amet, consetetur

      </p>
    </SectionAbout>

    <SectionOurProducts

    />

    <ShopFeaturedProducts
        class="z-50"
        :num-products="4"
        bg-image=""
    />
    <section class="bg-[#F9F9F9]">
      <div class="text-center pt-14">
        <h2 class="text-4xl xl:text-5xl font-semibold text-primary uppercase">Die Herstellung</h2>
        <p class="text-secondary text-base py-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod
          tempor</p>
        <div class="flex items-center">
          <hr class="w-1/2 text-secondary text-opacity-40  border-dashed divide-y">
          <IconBasic
              class="mx-auto"
              image-link="/icons/arrow.png"
              alt="arrow"/>
          <hr class="w-1/2 text-secondary text-opacity-40  border-dashed divide-y">
        </div>
      </div>
      <SectionProductionContent
          id=""
          title="LOREM IPSUM"
          direction="right"
          text-direction="right"
          image-link="/images/home_wilzenberger-herst-pic1.png"
          alt="herst"
      >
        <p class="  xl:text-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr
        </p>
      </SectionProductionContent>

      <SectionProductionContent
          id=""
          title="LOREM IPSUM"
          direction="left"
          text-direction="left"
          image-link="/images/home_wilzenberger-herst-pic2.png"
          alt="herst">
        <p class="text-left">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr,
        </p>
      </SectionProductionContent>


      <SectionProductionContent
          id=""
          title="LOREM IPSUM"
          direction="right"
          text-direction="right"
          image-link="/images/home_wilzenberger-herst-pic3.png"
          alt="herst"
      >
        <p class="xl:text-right">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
          clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
          consetetur sadipscing elitr,
        </p>
      </SectionProductionContent>

    </section>

  </section>
</template>

<script setup lang="ts">


import {ref} from 'vue'

const display = ref(false)
</script>


