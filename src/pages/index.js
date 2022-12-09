import React, { useState, useEffect } from 'react';

import Loader from '@components/loader'
import Layout from '../components/layout'
import Section1 from '@components/section1'
import Section2 from '@components/section2'
import Section3 from '@components/section3'
import Section4 from '@components/section4'
import FooterBar from '@components/footer'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import { GlobalStyle, theme } from '@styles';



const IndexPage = ({  location }) => {
  const isHome = location.pathname === '/';
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoading) {
      return;
    }

    if (location.hash) {
      const id = location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }

  }, [isLoading]);

  return (
    <>
    <GlobalStyle />
    {isLoading  ? (
        <Loader finishLoading={() => setIsLoading(false)} />
        ) : (
            <>
                <Layout pageTitle="Home Page" />
                <Section1 pageTitle="Home Page"/>
                <Section2 />
                <Section3 />
                <Section4 />
                <FooterBar />
            </>
        )}
    </>
  )
}
import 'bootstrap/dist/css/bootstrap.min.css';
export const Head = () => <Seo title="Home Page" />

export default IndexPage
