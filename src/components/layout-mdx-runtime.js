import React from 'react'
import { graphql, Link } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/react'

import Header from './header'

function Anchor(props) {
  const p = Object.assign({}, props)
  p.to = `${props.href}#123`
  return <Link {...p} />
}

export default ({ data }) => (
  <MDXProvider components={{ a: Anchor }}>
    <Header siteTitle={data.site.siteMetadata.title} />
    <MDXRenderer components={{ a: Anchor }}>{data.mdx.code.body}</MDXRenderer>
  </MDXProvider>
)

export const pageQuery = graphql`
  query($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      code {
        body
      }
    }
  }
`
