import * as React from "react"
import { ProductCard } from "./product-card"

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
              Stay Safe and Comfortable in the Dark with Our LED Headlamp Beanie
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-600">
              Our LED Beanie is made with flexible stretch material for maximum
              comfort during outdoor activities like hiking, jogging, skating,
              cycling, dog walking, and winter bus waiting. The built-in LED
              lights provide convenient visibility in dark environments, while
              the rechargeable Li-ion battery offers a long standby time, making
              it perfect for all-day adventures. With its 2-in-1 design, you can
              enjoy wireless Bluetooth headset connection to listen to your
              favorite songs and make handsfree calls. Stay warm, safe, and
              connected with our LED Beanie.
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
