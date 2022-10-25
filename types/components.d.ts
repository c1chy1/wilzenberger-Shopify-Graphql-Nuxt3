import {CurrencyCode, ImageConnection} from "~/types";




interface ShopifyImage {
  altText: string;
  id: string;
  transformedSrc: string;
}

interface Price {
  amount: number;
  currencyCode: string;
}

interface PriceRange {
  maxVariantPrice: MoneyV2
  minVariantPrice: MoneyV2
}



interface inventoryItem {
  unitCost: MoneyV2
  id:string
}


export interface MoneyV2 {
  amount: number
  currencyCode: string
}



export interface ProductCard {
  availableForSale?: boolean;
  compareAtPriceRange?: PriceRange;
  description?: string;
  descriptionHtml?: string;
  handle: string;
  images: ImageConnection
  priceRange?: PriceRange;
  productType?: { [key: string]: any };
  title: string;
  variants: Variant;
  weight: any
  weightUnit:string;
  price:Price
  priceCode: string;
  basic: number;
  id:string;
  link:string
}

interface VariantObject {
  availableForSale: boolean;
  id: string;
  quantityAvailable: number;
  sku: string;
  title: string;
  price: number;
}
interface Variant {
  nodes: VariantObject;
  edges: ProductVariantEdge[]
}

interface Option {
  id: string;
  name: string;
  values: string[];
}

interface Amount {
  amount: string;
  currencyCode: string;
}


export interface Cart {
  attributes: Array<Attribute>
  buyerIdentity: CartBuyerIdentity
  checkoutUrl: string
  createdAt: string
  estimatedCost: CartEstimatedCost
  id: string
  lines: CartEdges
  note?: string
  updatedAt: string
  discountCodes: Array<CartDiscountCode>
  deliveryGroups: Connection<CartDeliveryGroup>
  totalQuantity : number


}

export interface CartEdges {
  edges: CartLineEdge[]
  pageInfo: PageInfo
}

export interface CartLineEdge {
  cursor: string
  node: CartLine
}
export interface CartLineInput {
  attributes?: AttributeInput[]
  merchandiseId: string
  quantity?: number
  sellingPlanId?: string
}
export interface AttributeInput {
  key: string
  value: string
}

export interface Connection<T> {
  edges: T[]
  pageInfo: PageInfo
}
export interface CartLine {
  estimatedCost: CartLineEstimatedCost
  id: string
  merchandise: Merchandise
  quantity: Number
}

export interface CartLineEstimatedCost {
  subtotalAmount: MoneyV2
  totalAmount: MoneyV2
}


export interface PageInfo {
  hasNextPage: Boolean
  hasPreviousPage: Boolean
  startCursor?: string
  endCursor?: string
}
export type Merchandise = ProductVariant<'thumbnail'>
export interface ProductVariant<ImageType extends string = 'image'> {
  availableForSale: boolean
  barcode: string
  compareAtPriceV2: MoneyV2
  id: string
  image: Image<ImageType>
  metafield: Metafield
  priceV2: MoneyV2
  product: Product
  quantityAvailable: number
  selectedOptions: SelectedOption[]
  title: string
}

export interface Product {
  images: ImageConnection
  media: MediaConnection
  variants: ProductVariantConnection
  availableForSale: boolean
  compareAtPriceRange: ProductPriceRange
  createdAt: string
  description: string
  descriptionHtml: string
  featuredImage: Image
  featuredMedia: Media
  handle: string
  id: string
  metafield: Metafield
  options: ProductOption[]
  priceRange: ProductPriceRange
  publishedAt: string
  seo: SEO
  tags: string[]
  title: string
  totalInventory: number
  updatedAt: string
  [key: string]: any
}
export interface ProductVariantConnection {
  edges: ProductVariantEdge[]
  pageInfo?: PageInfo
}

export interface ProductVariantEdge {
  __typename: string
  cursor: string
  node: ProductVariant
}

export interface CartEstimatedCost {
  subtotalAmount: MoneyV2
  totalAmount: MoneyV2
  totalDutyAmount: MoneyV2
  totalTaxAmount: MoneyV2
}

export interface CartLineUpdateInput {
  attributes?: AttributeInput[]
  id: string
  merchandiseId?: string
  quantity?: number
  sellingPlanId?: string
}

export interface Image<Type extends string = 'image'> {
  url: Type extends 'image' ? string : undefined
  thumbnail: Type extends 'thumbnail' ? string : undefined
  id: string
  width: number
  height: number
  altText: string
}


export interface ProductPriceRange {
  maxVariantPrice: MoneyV2
  minVariantPrice: MoneyV2
}

export interface Media {

  preview:  MediaPreviewImage
}
export interface  MediaPreviewImage {

  image: Image
}
export interface ImageConnection {
  edges: ImageEdge[]
  pageInfo: PageInfo
}

export interface ImageEdge {
  cursor: string
  node: Image
}
