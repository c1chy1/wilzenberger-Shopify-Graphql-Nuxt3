import { gql } from "graphql-tag";

export const productByHandle = gql`
    query product($handle: String!) {
        productByHandle(handle: $handle) {
            handle
            title
            description
            descriptionHtml
            id
            compareAtPriceRange {
                maxVariantPrice {
                    amount
                    currencyCode
                }
                minVariantPrice {
                    amount
                    currencyCode
                }
            }

            priceRange {
                minVariantPrice {
                    amount
                    currencyCode
                }
                maxVariantPrice {
                    amount
                    currencyCode
                }
            }
            
            
            images(first: 20) {
                edges {
                    node {
                        altText
                        height
                        id
                        src
                        width
                    }
                }
            }
            variants (first: 5) {
                edges {
                    node {
                        id
                    }
    }}}}
`;
