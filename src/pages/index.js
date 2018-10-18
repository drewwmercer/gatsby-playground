import React from 'react'
import {
  Link
} from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => ( <
  Layout >
  <
  h1 > Hello user < /h1> <
  p > Welcome to the new Gatsby site. < /p> <
  p > Something great is being built. < /p> <
  Link to = "/page-2/" > Go to page 2 < /Link> <
  /Layout>
)

export default IndexPage
