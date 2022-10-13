import {defineNuxtConfig} from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    /*    target: 'static',
        mode: "universal",*/
    ssr: false,
    pwa: {
        workbox: {
            enabled: true,

        },
    },
    css: ['~/assets/css/main.css'],
    build: {


        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
        transpile: [
            'gsap',
            "@apollo/client",
            "@vue/apollo-composable",
            "ts-invariant/process",
        ],
    },




    modules: ['@kevinmarrec/nuxt-pwa', '@nuxt/image-edge'],
    buildModules: ['@pinia/nuxt', '@vueuse/nuxt', "@nuxtjs/tailwindcss"],
    plugins: ['plugins/apollo', 'plugins/scrollToTop'],


    icon: {
        source: 'public/icon.png',
    },

    manifest: {
        display: 'standalone',
        name: 'Wilzenberger App',
        description: "Wilzenberger Nahrungsergänzungsmittel",
        lang: 'de',
        theme_color: "#8BA039",
        background_color: "#8BA039"

    },


    meta: {
        title: 'Wilzenberger',
        description: "Wilzenberger Nahrungsergänzungsmittel",
        charset: 'utf-8',
        meta: [
            {name: 'theme-color', content: '#8BA039'},
            {name: 'background_color', content: '#8BA039'}
        ],
        link: [
            {hid: 'icon', rel: 'icon', type: 'image/png', href: '/icon.png'},
            {hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: 'icons/192x192.png'},
        ]
    },
    gsap: {
        /* Module Options */
    },


})
