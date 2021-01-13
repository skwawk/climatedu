/** @jsx jsx **/
import { graphql } from 'gatsby'
import { Box, jsx } from 'theme-ui'

import Unit from '../components/unit'

const Why = ({ data }) => {
  return <Unit {...data.markdownRemark} />
}

export default Why

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      ...Unit
    }
  }
`