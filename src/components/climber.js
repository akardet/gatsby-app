import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const getDude = graphql`
  {
    file(relativePath: { eq: "climber.jpg" }) {
      childImageSharp {
        fixed(width: 150, height: 100) {
          ...GatsbyImageSharpFixed_tracedSVG
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
        return <Img fixed={data.file.childImageSharp.fixed} />
      }}
    />
  )
}
