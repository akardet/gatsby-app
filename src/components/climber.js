import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const getDude = graphql`
  {
    file(relativePath: { eq: "climber.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default function climber() {
  return (
    <StaticQuery
      query={getDude}
      render={data => {
        return (
          <div style={{ maxWidth: "300px" }}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        )
      }}
    />
  )
}
