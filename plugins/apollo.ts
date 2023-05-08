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
        uri: "https://wilzenberger-test.myshopify.com/api/2022-07/graphql.json",
        headers: {
            "X-Shopify-Storefront-Access-Token":
            "b8146d19c0dc5fc8e85c346ccb7cae0d",
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
