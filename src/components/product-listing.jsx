import * as React from "react"
import { ProductCard } from "./product-card"
// import { listingContainerStyle } from "./product-listing.module.css"

// // To optimize LCP we mark the first product card as eager so the image gets loaded faster
// export function ProductListing({ products = [] }) {
//   return (
//     <div className={listingContainerStyle}>
// {products.map((p, index) => (
//   <ProductCard product={p} key={p.id} eager={index === 0} />
// ))}
//     </div>
//   )
// }
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
export function ProductListing({ products = [] }) {
  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <section aria-labelledby="details-heading">
          <div className="flex flex-col items-center text-center">
            <h2
              id="details-heading"
              className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
            >
              The Fine Details
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Our patented padded snack sleeve construction protects your
              favorite treats from getting smooshed during all-day adventures,
              long shifts at work, and tough travel schedules.
            </p>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
              {products.map((p, index) => (
                <ProductCard product={p} key={p.id} eager={index === 0} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
