import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
} from './layout.module.css'
import { Icon } from '@components/icons';
import { GlobalStyle, theme } from '@styles';
const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
  return (
    <div className={container}>
        <GlobalStyle />
      {/* <header className={siteTitle}>{data.site.siteMetadata.title}</header> */}
      <header className={siteTitle} style={headerStyle}>
        <Icon name='Menu' />
        <span>LOGO</span>
        <span>
            <Icon name='Star' />
            <Icon name='Twitter' />
        </span>
      </header>
      {/* <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog" className={navLinkText}>
              Blog
            </Link>
          </li>
        </ul>
      </nav> */}
     
    </div>
  )
}

export default Layout
