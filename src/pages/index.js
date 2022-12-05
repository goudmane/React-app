import * as React from 'react'
import Layout from '../components/layout'
import Section1 from '@components/section1'
import Section2 from '@components/section2'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const IndexPage = () => {
  return (
    <>
    <Layout pageTitle="Home Page">
      {/* <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      /> */}

    </Layout>
    <Section1 pageTitle="Home Page"/>
    <Section2 />
    </>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage
