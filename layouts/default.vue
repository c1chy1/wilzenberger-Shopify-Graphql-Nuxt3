<template>



<section class="min-h-screen overflow-hidden">
<!--  <SectionPreloader/>-->

  <ShopCartIcon/>
  <transition-group name="cart" mode="out-in">
    <ShopCart key="cart"/>
  </transition-group>
  <LayoutNavigationMobil class="md:hidden h-full"/>
    <LayoutNavigation
        bg-image="/images/navigation.png"
        class="hidden lg:block"
    />
  <transition-group
   name="page"
   mode="out-in">
    <main key="main">
    <slot></slot>
    </main>
</transition-group>
    <LayoutFooter
    bg-image="/images/home_wilzenberger-bg-footer.png"/>
</section>
</template>
