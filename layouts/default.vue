<template>
  <section class="min-h-screen overflow-hidden">
  <SectionPreloader/>

  <ShopCartIcon/>
  <transition-group name="cart" mode="out-in">
    <ShopCart key="cart"/>
  </transition-group>
  <LayoutNavigationMobil class="md:hidden h-full"/>
    <LayoutNavigation
        class="hidden lg:block"
    />
  <main key="main">
        <slot></slot>
      </main>
    <LayoutFooter/>
</section>
</template>

