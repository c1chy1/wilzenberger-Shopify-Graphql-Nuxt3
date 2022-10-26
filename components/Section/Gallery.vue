<template>

  <lightgallery
      class="grid grid-rows-1 grid-cols-4"
                :settings="{
    mobileSettings:{controls: true, showCloseIcon: true, download: true},
    addClass: 'test',
    toggleThumb: true,
    allowMediaOverlap: true,
    selector: '.image',
    startClass :	'lg-start-zoom',
    plugins: plugins,
    mode: 'lg-slide',
    cssEasing: 'ease',
    easing: 'linear',
    speed: 600,
    height: '100%',
    width: '100%',
    backdropDuration: 150,
    hideBarsDelay: 6000,
    useLeft: false,
    ariaLabelledby: '',
    ariaDescribedby: '',
    closable: true,
    loop: true,
    escKey: true,
    keyPress: true,
    controls: true,
    slideEndAnimation: true,
    hideControlOnEnd: false,
    mousewheel: false,
    getCaptionFromTitleOrAlt: true,
    subHtmlSelectorRelative: false,
    preload: 1,
    showAfterLoad: true,
    selectWithin: '',
    nextHtml: '',
    prevHtml: '',
    index: false,
    iframeMaxWidth: '100%',
    download: true,
    counter: true,
    appendCounterTo: '.lg-toolbar',
    swipeThreshold: 50,
    enableSwipe: true,
    enableDrag: true,
    dynamic: false,
    dynamicEl: [],
    galleryId: 1,
    supportLegacyBrowser: true
  }"
  >

      <a
          v-for="image in imagesArray.slice(1) "
          :key="product.handle"

          class="my-auto  hover:border hover:border-primary hover:transition-all hover:bg-primary hover:bg-opacity-70"
          :data-src="image.node.src">
        <img
            class="image  cursor-pointer"
            :key="product.handle"
            :src="image.node.src"/>
      </a>

  </lightgallery>


</template>

<script setup lang="ts">


import {useQuery} from "@vue/apollo-composable";
import {computed , ref ,reactive , Ref} from "vue";
import Lightgallery from "lightgallery/vue/LightGalleryVue.umd.js";
import lgZoom from "lightgallery/plugins/zoom/lg-zoom.umd.js";
import lgFullscreen from "lightgallery/plugins/fullscreen/lg-fullscreen.umd.js";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-thumbnail.scss";
import "lightgallery/scss/lg-zoom.scss";
import "lightgallery/scss/lg-fullscreen.scss";
import {productByHandle} from "~/apollo/queries/productByHandle";

const plugins = [lgZoom, lgFullscreen]

const route = useRoute();
const handle = route.params.product;



const {result, loading, error} = useQuery(productByHandle, {
  handle
});

const product = computed(() => result.value?.productByHandle ?? [])
const images = computed(() => result.value?.productByHandle.images.edges ?? [])
const imagesArray = [...images.value]


</script>

<style scoped lang="scss">

.link-image {

  height: 200px;
  border-radius: 0.375em;
  transition: transform 0.2s ease;

  &:hover {
    -ms-transform: scale(1.075);
    transform: scale(1.075);
  }
}

.lightGallery-captions {
  h4,
  p {
    transition: transform 0.4s ease-in-out, opacity 0.4s ease-in;
  }
}

.lg-current {
  .lightGallery-captions {
    h4,
    p {
      transition-delay: 500ms;
    }
  }

  &.lg-slide-progress {
    .lightGallery-captions {
      h4,
      p {
        transition-delay: 0ms;
      }
    }
  }
}

// Disappear
.lightGallery-captions {
  h4 {
    transform: translate3d(60px, 0, 0px);
  }

  p {
    transform: translate3d(-60px, 0, 0px);
  }

  h4,
  p {
    opacity: 0;
  }
}

// Active
.lg-current {
  .lightGallery-captions {
    h4,
    p {
      transform: translate3d(0, 0, 0px);
    }

    h4,
    p {
      opacity: 1;
    }
  }
}

// Disappear
.lg-slide-progress {
  .lightGallery-captions {
    h4 {
      transform: translate3d(-60px, 0, 0px);
    }

    p {
      transform: translate3d(60px, 0, 0px);
    }

    h4,
    p {
      opacity: 0;
    }
  }
}


</style>
