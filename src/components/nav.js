import React from "react"
import { Link } from "gatsby"

export default function nav() {
  return (
    <div>
      <Link to="/products/">
        <h1>Products Page</h1>
      </Link>
    </div>
  )
}
