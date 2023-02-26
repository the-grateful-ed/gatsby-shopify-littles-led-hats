import * as React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"
import { ProductListing } from "../components/product-listing"
import { Seo } from "../components/seo"
import {
  container,
  intro,
  callOut,
  callToAction,
  deployButton,
} from "./index.module.css"
import { Hero } from "../components/hero"
import {Incentives} from "../components/incentives"

export const query = graphql`
  query {
    shopifyCollection(handle: { eq: "frontpage" }) {
      products {
        ...ProductCard
      }
    }
  }
`

export default function IndexPage({ data }) {
  return (
    <Layout>
      <Incentives />
      <Hero />
      <ProductListing products={data?.shopifyCollection?.products} />
    </Layout>
  )
}

export const Head = () => <Seo />
