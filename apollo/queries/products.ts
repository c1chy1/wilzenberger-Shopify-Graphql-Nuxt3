import { gql } from "graphql-tag";

export const products = gql`

    query products (
        $numProducts: Int
        $query: String  ) {

        products(first: $numProducts, query: $query) {
            edges {
                node {
                    id
                    images(first: 5) {
                        edges {
                            node {
                                url
                                width
                                height
                            }
                        }
                    }
                    totalInventory
                    title
                    description
                    handle
                    options(first: 2) {
                        name
                        values
                    }
                    priceRange {
                        maxVariantPrice {
                            amount
                            currencyCode
                        }
                        
                    }
                    
                    variants(first: 5) {

                        edges {
                            node {
                                id
                                unitPrice {
                                    amount
                                }
                                unitPriceMeasurement {
                                    quantityValue
                                }
                                availableForSale
                                price {

                                    amount
                                    
                                }
                                title
                                weight
                                weightUnit
                                priceV2 {
                                    
                                    amount
                                }
                            }
                        }
                    }

                }
            }
        }
    }
    
`;
