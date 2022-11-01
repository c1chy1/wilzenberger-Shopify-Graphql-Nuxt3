<template>
  <div class="absolute w-full h-full hidden lg:block " >
    <svg

        id="svg" class="m-auto lg:h-[83rem] w-full" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 620 550">
      <path
          class="theLine opacity-20"
            d="M 0 0
            C 200 150 950 50 350 150
            C -350 450 200 665 585 470
         " fill="none" stroke="gold" stroke-width="6px" />
    </svg>

    <svg
        class="ball ball01 w-32 h-52 z-10"  id="svg2" viewBox="0 0 325.44 325.44" version="1.0">
      <defs id="defs4">
        <filter id="filter2797">
          <feGaussianBlur id="feGaussianBlur2799" stdDeviation="18.047757" />
        </filter>
        <filter id="filter3198">
          <feGaussianBlur id="feGaussianBlur3200" stdDeviation="8.5814285"/>
        </filter>
        <radialGradient id="radialGradient3203" gradientUnits="userSpaceOnUse" cy="478.08" cx="325.71" gradientTransform="matrix(1 0 0 .94811 26 10.807)" r="440.5">
          <stop id="stop3186" style="stop-color:#ffea00" offset="0"/>
          <stop id="stop3188" style="stop-color:#ffff00;stop-opacity:0" offset="1"/>
        </radialGradient>
        <radialGradient id="radialGradient3592" gradientUnits="userSpaceOnUse" cy="442.58" cx="278.57" gradientTransform="matrix(1 0 0 1.0129 0 -5.9175)" r="221.86">
          <stop id="stop3588" style="stop-color:#ffc800" offset="0"/>
          <stop id="stop3594" style="stop-color:#ffff00" offset=".84770"/>
          <stop id="stop3590" style="stop-color:#ffff00" offset="1"/>
        </radialGradient>
        <linearGradient id="linearGradient3600" y2="874.81" gradientUnits="userSpaceOnUse" x2="347.14" y1="240.93" x1="347.14">
          <stop id="stop3604" style="stop-color:#ffffff" offset="0"/>
          <stop id="stop3606" style="stop-color:#ffffff;stop-opacity:0" offset="1"/>
        </linearGradient>
        <filter id="filter3672">
          <feGaussianBlur id="feGaussianBlur3674" stdDeviation="6.6987856" />
        </filter>
      </defs>
      <g id="layer1" transform="matrix(.36391 0 0 .36391 34.208 -.44373)">
        <path id="path2801" style="filter:url(#filter3198);fill:url(#radialGradient3203)" d="m23.143 98.362c85.487 149.65 303.26 186.47 251.43-97.143 51.65 239.5 277.63 202.93 320 48.572-122.84 286.59 62.75 255.64 197.14 225.72-227.25 155.13-150.15 238.98 8.58 302.85-316.59-58.85-254.46 189.33-171.43 317.15-119.49-174.91-291.39-267.91-385.72-8.58 18.04-222.63-122.12-287.79-300-117.14 128.43-219.25 201.16-306.42-37.14-374.28 196.91 6.21 286.31-65.97 117.14-297.15z"/>
        <path id="path2176" style="stroke-linejoin:round;fill-rule:evenodd;filter:url(#filter3672);stroke:#f6c600;stroke-width:12.3;fill:url(#radialGradient3592)" d="m562.86 459.51c0 120.71-96.58 218.57-215.72 218.57-119.13 0-215.71-97.86-215.71-218.57 0-120.72 96.58-218.58 215.71-218.58 119.14 0 215.72 97.86 215.72 218.58z"/>
        <path id="path3596" style="filter:url(#filter2797);fill-rule:evenodd;fill:url(#linearGradient3600)" d="m562.86 459.51c0 120.71-96.58 218.57-215.72 218.57-119.13 0-215.71-97.86-215.71-218.57 0-120.72 96.58-218.58 215.71-218.58 119.14 0 215.72 97.86 215.72 218.58z" transform="matrix(.70790 0 0 .44374 97.116 147.03)"/>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {MotionPathPlugin} from "gsap/MotionPathPlugin"

import {onMounted , onUnmounted, ref} from 'vue'
if (process.client) {
  gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger, MotionPathPlugin)
}
const tl = gsap.timeline();


onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);
  gsap.defaults({ease: "none"});


  gsap.timeline({
    defaults: {duration: 1},
    scrollTrigger: {
      trigger: "#svg",
      scrub: true,
      start: "top center",
      end: "bottom center"
    }
  })
      .set('.ball01', {duration: 0.01, autoAlpha: 1})
      .from('.theLine', {drawSVG: 0}, 0)
      .to('.ball01', {
        motionPath: {
          path: ".theLine",
          align: ".theLine",
          alignOrigin: [0.5, 0.9],
        }
      }, 0)


});



onUnmounted(() => {

  ScrollTrigger.refresh(true)

});
</script>
