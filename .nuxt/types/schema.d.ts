import { NuxtModule } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtConfig {
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["compression"]?: typeof import("@averjs/nuxt-compression").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pwa"]?: typeof import("@kevinmarrec/nuxt-pwa").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image-edge").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
  }
  interface RuntimeConfig {
     app: {
        baseURL: string,

        buildAssetsDir: string,

        cdnURL: string,
    },

    pwaManifest: {
        name: string,

        short_name: any,

        description: any,

        lang: string,

        start_url: string,

        display: string,

        background_color: string,

        theme_color: string,

        icons: Array<any>,
    },

    ipx: {
        dir: string,

        domains: Array<any>,

        sharp: any,

        alias: any,
    },
  }
  interface PublicRuntimeConfig {
  
  }
}