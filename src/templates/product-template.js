import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

export default function({ data }) {
  const { title, price } = data.contentfulProduct
  const { description } = data.contentfulProduct.description
  const { fluid } = data.contentfulProduct.image
  return (
    <Layout>
      <h1>Single Product Template</h1>
      <Image fluid={fluid} />
      <h1>
        {title}
        <span style={{ marginLeft: "2rem", color: "grey" }}>${price}</span>
      </h1>
      <p>{description}</p>
      <Link to="/products">
        <h6>Back to Products</h6>
      </Link>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    contentfulProduct(id: { eq: $id }) {
      title
      price
      description {
        description
      }
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
