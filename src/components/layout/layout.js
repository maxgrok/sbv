import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../shared/header/header'
import Footer from '../shared/footer/footer'

import '../../styles/_globals.scss'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content:
                'SBV is a multidisciplinary innovation firm devoted to web3 and decentralized technology.',
            },
            {
              name: 'keywords',
              content:
                'decentralized, dao, innovation',
            },
            { property: 'og:title', content: 'Senary Blockchain Ventures' },
            { property: 'og:url', content: 'https://senaryblockchain.ventures' },
            {
              property: 'og:image',
              content: 'https://senaryblockchain.ventures/images/sbv-og-image.png',
            },
            {
              property: 'og:description',
              content:
                'SBV is a multidisciplinary innovation firm devoted to web3 and decentralized technology.',
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              name: 'twitter:card',
              content: 'summary',
            },
            {
              name: 'twitter:creator',
              content: 'Senary Blockchain Ventures',
            },
            {
              name: 'twitter:title',
              content: 'Senary Blockchain Ventures',
            },
            {
              name: 'twitter:description',
              content:
                'SBV is a multidisciplinary innovation firm devoted to decentralized technology.',
            },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="Layout">{children}</div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
