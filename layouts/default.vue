<template>



<section class="min-h-screen overflow-hidden">
  <SectionPreloader/>

  <ShopCartIcon/>
  <transition-group name="cart" mode="out-in">
    <ShopCart key="cart"/>
  </transition-group>
  <LayoutNavigationMobil class="md:hidden h-full"/>
    <LayoutNavigation
        bg-image="/images/navigation.png"
        class="hidden lg:block"
    />
  <main key="main">
        <slot></slot>
      </main>
    <LayoutFooter
    bg-image="/images/home_wilzenberger-bg-footer.png"/>
</section>
</template>

