import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
} from "@apollo/client/core";
import {
    DefaultApolloClient,
    provideApolloClient,
} from "@vue/apollo-composable";
import { defineNuxtPlugin, NuxtApp } from "#app";

export default defineNuxtPlugin((nuxtApp: NuxtApp) => {
    const httpLink = createHttpLink({
        credentials: "omit",
        uri: "https://01c1b1.myshopify.com/api/2022-07/graphql.json",
        headers: {
            "X-Shopify-Storefront-Access-Token":
            "cb5c9e6ae7cc5161f321387a21daf4cd",
        },
    });

    const cache = new InMemoryCache();

    let apolloClient: ApolloClient<any>;

    if (process.server) {
        apolloClient = new ApolloClient({
            ssrMode: true,
            link: httpLink,
            cache,
        });
        nuxtApp.hook("app:rendered", () => {
            nuxtApp.payload.data.apollo = apolloClient.extract();
        });
    } else {
        apolloClient = new ApolloClient({
            link: httpLink,
            cache,
        });
    }

    provideApolloClient(apolloClient);
    nuxtApp.provide("apollo", { DefaultApolloClient, apolloClient });
});
