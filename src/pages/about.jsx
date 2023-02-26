import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Layout } from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen py-12 bg-gray-100 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <StaticImage
            src="/images/logo.png"
            alt="LED Hats Store logo"
            width={200}
            height={200}
          />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            About Us
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            At LED Hats Store, we specialize in providing the highest quality
            LED hats and other light-up accessories. Our team is dedicated to
            delivering the latest and most innovative designs that will make you
            stand out from the crowd.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            We believe that our products are not just accessories, they are
            statements. They express your personality and make a lasting
            impression. That's why we're constantly working to bring you the
            best and most unique designs that you won't find anywhere else.
          </p>
          <p className="mt-2 text-lg text-gray-600">
            We pride ourselves on providing excellent customer service and
            support. If you have any questions or concerns about our products or
            your order, please don't hesitate to contact us. We're always here
            to help.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
