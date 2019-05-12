import React from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

export default function products({ data }) {
  console.log(data)
  return (
    <Layout>
      <Link to="/">
        <h6>Back to Home</h6>
      </Link>
      <h1>Our Products</h1>
      {data.products.edges.map(({ node: product }) => {
        return (
          <div key={product.id} style={{ padding: "1rem", margin: "1rem 0" }}>
            <Image fixed={product.image.fixed} />
            <h3 style={{ marginBottom: "0.5rem" }}>
              {product.title}
              <span style={{ color: "grey", marginLeft: "2rem" }}>
                ${product.price}
              </span>
            </h3>
            <p>{product.description.description}</p>
            <Link to="/">
              <h2>Details</h2>
            </Link>
          </div>
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  {
    products: allContentfulProduct {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          image {
            fixed(width: 300) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
