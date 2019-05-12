import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../components/Button"
import { FaApple } from "react-icons/fa"
import Info from "../components/info"
import Climber from "../components/climber"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Info />
    <Link to="/images/">Images</Link>
    <h1 style={{ color: "red" }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Climber />
    </div>
    <FaApple className="icon" />
    <Button>I'm from styled</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <Link to="/product/testing/">Go to testing</Link>
  </Layout>
)

export default IndexPage
