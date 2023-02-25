import * as React from "react"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { getShopifyImage } from "gatsby-source-shopify"
import { formatPrice } from "../utils/format-price"
import {
  productCardStyle,
  productHeadingStyle,
  productImageStyle,
  productDetailsStyle,
  productVendorStyle,
  productPrice,
} from "./product-card.module.css"
import { FaCartPlus } from "@react-icons/all-files/fa/FaCartPlus"

export function ProductCard({ product, eager }) {
  const {
    title,
    priceRangeV2,
    slug,
    images: [firstImage],
    vendor,
    storefrontImages,
  } = product

  const price = formatPrice(
    priceRangeV2.minVariantPrice.currencyCode,
    priceRangeV2.minVariantPrice.amount
  )

  const defaultImageHeight = 200
  const defaultImageWidth = 200
  let storefrontImageData = {}
  if (storefrontImages) {
    const storefrontImage = storefrontImages.edges[0].node
    try {
      storefrontImageData = getShopifyImage({
        image: storefrontImage,
        layout: "fixed",
        width: defaultImageWidth,
        height: defaultImageHeight,
      })
    } catch (e) {
      console.error(e)
    }
  }

  const hasImage =
    firstImage || Object.getOwnPropertyNames(storefrontImageData || {}).length

  return (
    <Link
      className="hover:opacity-80 border-2 border-gray-400 rounded-xl overflow-hidden shadow-md"
      to={slug}
      aria-label={`View ${title} product page`}
    >
      {hasImage ? (
        <div className={productImageStyle} data-name="product-image-box">
          <div className="relative">
            <GatsbyImage
              alt={firstImage?.altText ?? title}
              image={firstImage?.gatsbyImageData ?? storefrontImageData}
              loading={eager ? "eager" : "lazy"}
            />
            <div className="absolute bottom-4 right-4 ">
              <FaCartPlus className="text-white bg-orange-700 border-2 border-white shadow-md hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-full h-20 w-20 text-2xl px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800" />
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: defaultImageHeight, width: defaultImageWidth }} />
      )}
      <div className="py-1 flex flex-col items-center font-light text-xl bg-orange-300">
        <div className="text-gray-800 font-normal">{vendor}</div>
        <h2 as="h2" className="text-gray-900 text-2xl font-bold">
          {title}
        </h2>
        <div className="text-gray-700">{price}</div>
      </div>
    </Link>
  )
}

export const query = graphql`
  fragment ProductCard on ShopifyProduct {
    id
    title
    slug: gatsbyPath(
      filePath: "/products/{ShopifyProduct.productType}/{ShopifyProduct.handle}"
    )
    images {
      id
      altText
      gatsbyImageData(aspectRatio: 1, width: 640)
    }
    priceRangeV2 {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    vendor
  }
`
