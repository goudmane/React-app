import * as React from 'react'
import Layout from '../components/layout'
import Section1 from '@components/section1'
import Section2 from '@components/section2'
import Section3 from '@components/section3'
import Footer from '@components/footer'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { GlobalStyle, theme } from '@styles';


/* import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; */


const IndexPage = () => {
  return (
    <>
    <GlobalStyle />
    <Layout pageTitle="Home Page">
      {/* <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, dozing in a bean bag chair"
        src="../images/clifford.jpg"
      /> */}

    </Layout>
    <Section1 pageTitle="Home Page"/>
    <Section2 />
    <Section3 />
    <Footer/>
    </>
  )
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from 'react-bootstrap/lib/Modal'
export const Head = () => <Seo title="Home Page" />

export default IndexPage
