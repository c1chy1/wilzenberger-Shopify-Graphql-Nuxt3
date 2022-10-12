import { defineStore } from 'pinia'
import { formatLocalePrice } from '@/utilities/money'
import { useClient } from '@/utilities/apollo-client'
import {
    Cart,
    CartLineInput,
    CartLineUpdateInput

} from '@/types/components'

import { cartCreate , cartLinesAdd , cartLinesUpdate , cartLinesRemove} from '~/apollo/cart/mutations'
interface CartState {
    cart: Cart
    loading:boolean
    cartOpen: boolean
}

type CartMutCreate = {
    cartCreate: {
        cart: Cart
    }
}
type CartMutAdd = {
    cartLinesAdd: {
        cart: Cart
    }
}

type CartMutRemove = {
    cartLinesRemove: {
        cart: Cart
    }
}

interface CartActions {
    cartCreate(): Promise<CartState>
    getCart(): Promise<CartState>
    addToCart(lines: CartLineInput[]): Promise<CartState>
    toggleCart(state?: boolean)
    updateCartItem(lines: CartLineUpdateInput[]): Promise<CartState>
    removeFromCart(lines: string[]): Promise<CartState>

}

type GetterFunctions =
    | 'lineItems'
    | 'lineItemsCount'
    | 'subtotalAmount'
    | 'totalDutyAmount'
    | 'totalTaxAmount'
    | 'totalAmount'
    | 'totalQuantity'

type CartGetters = {
    [key in GetterFunctions]: (state: CartState) => any
}


export const useCart = defineStore<'cart', CartState, CartGetters, CartActions>(
    'cart',
    {
        state: () => ({
            cart: {
                attributes: [],
                buyerIdentity: {},
                createdAt: '',
                checkoutUrl: '',
                deliveryGroups: {
                    edges: [],
                    pageInfo: {
                        hasPreviousPage: false,
                        hasNextPage: false,
                    },
                },
                discountCodes: [],
                estimatedCost: {
                    subtotalAmount: {
                        amount: 0,
                        currencyCode: "EUR",
                    },
                    totalTaxAmount: {
                        amount: 0,
                        currencyCode: "EUR",
                    },
                    totalDutyAmount: {
                        amount: 0,
                        currencyCode: "EUR",
                    },
                    totalAmount: {
                        amount: 0,
                        currencyCode: "EUR",
                    },
                },
                totalQuantity: 0,
                id: '',
                lines: {
                    edges: [],
                    pageInfo: {
                        hasPreviousPage: false,
                        hasNextPage: false,
                    },
                },
                updatedAt: '',
            },
            loading: false,
            cartOpen: false,
        }),


        actions: {


            toggleCart(state?: boolean) {
                if (typeof state === "boolean") {
                    this.cartOpen = state;
                } else {
                    this.cartOpen = !this.cartOpen;

                }
            },


            async cartCreate() {
                try {
                    this.loading = true


                    const { data } = await useClient().mutate<CartMutCreate>({
                        mutation: cartCreate,
                    })
                    if (!data.cartCreate.cart.id) {
                        throw 'cartCreate: error'
                    }
                    const { cart } = data.cartCreate
                    this.cart = cart
                } catch (e) {
                    return e
                } finally {
                    this.loading = false
                    return this
                }
            },
            async getCart() {
                if (!this.cart.id) {
                    await this.cartCreate()
                }

                try {
                    this.loading = true
                } catch (e) {
                    return e
                } finally {
                    this.loading = false
                    return this
                }
            },

            async addToCart(lines) {
                try {
                    this.loading = true
                    if (!this.cart.id) {
                        await this.cartCreate()
                    }
                    const { data } = await useClient().mutate<CartMutAdd>({
                        mutation: cartLinesAdd,
                        variables: {
                            cartId: this.cart.id,
                          lines
                        },
                    })
                    if (!data.cartLinesAdd) {
                        throw 'cartLinesAdd: error'
                    }


                    this.cart = data.cartLinesAdd.cart

                } catch (e) {
                    return e
                } finally {
                    this.loading = false
                    return this
                }
            },


            async removeFromCart(lines) {
                try {
                    this.loading = true
                    const { data } = await useClient().mutate<CartMutRemove>({
                        mutation: cartLinesRemove,
                        variables: {
                            cartId: this.cart.id,
                            lineIds: lines,
                        },
                    })
                    if (!data.cartLinesRemove) {
                        throw 'cartLinesRemove: error'
                    }
                    this.cart = data.cartLinesRemove.cart
                } catch (e) {
                    return e
                } finally {
                    this.loading = false
                    return this
                }
            },


            async updateCartItem(lines: CartLineUpdateInput[]) {
                try {
                    this.loading = true
                    if (!this.cart.id) {
                        await this.cartCreate()
                    }
                    const { data } = await useClient().mutate({
                        mutation: cartLinesUpdate,
                        variables: {
                            cartId: this.cart.id,
                            lines,
                        },
                    })
                    this.cart = data?.cartLinesUpdate?.cart
                } catch (e) {
                    return e
                } finally {
                    this.loading = false
                    return this
                }
            },
        },
        getters: {
            lineItems: (state) => state.cart.lines.edges,
            lineItemsCount() {
                return this.lineItems.length
            },

            totalQuantity: (state) => state.cart.totalQuantity,
            subtotalAmount: (state): string => {
                const amount = +state.cart.estimatedCost.subtotalAmount.amount
                const code = state.cart.estimatedCost.subtotalAmount.currencyCode
                return formatLocalePrice(+amount, 'en-US', code)
            },
            totalDutyAmount: (state): string => {
                if (!state.cart.estimatedCost.totalDutyAmount) {
                    return null
                }
                const amount = +state.cart.estimatedCost.totalDutyAmount.amount
                const code = state.cart.estimatedCost.totalDutyAmount.currencyCode
                return formatLocalePrice(+amount, 'en-US', code)
            },
            totalTaxAmount: (state): string => {
                if (!state?.cart?.estimatedCost?.totalTaxAmount) {
                    return null
                }
                const amount = +state.cart.estimatedCost.totalTaxAmount.amount
                const code = state.cart.estimatedCost.totalTaxAmount.currencyCode
                return formatLocalePrice(+amount, 'en-US', code)
            },
            totalAmount: (state): string => {
                const amount = +state.cart.estimatedCost.totalAmount.amount
                const code = state.cart.estimatedCost.totalAmount.currencyCode
                return formatLocalePrice(+amount, 'en-US', code)
            },
        },

    }
)



