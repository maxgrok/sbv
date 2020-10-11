import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'
import SocialLinks from '../components/shared/social/SocialLinks'

import IconSBV1 from '../images/sbv__icon1.svg'
import IconSBV2 from '../images/sbv__icon2.svg'
import IconSBV3 from '../images/sbv__icon3.svg'

const IndexPage = () => (
  <Layout>
    <div className="Hero Home" id="home">
      <div className="Hero__Contents">
        <p>
        SBV is a multidisciplinary innovation firm devoted to web3 and decentralized technology.
        </p>
        <p className="light">
        We support web-based public utilities that democratize opportunity, more justly accrue and distribute value, and promote our greater humanity.
        </p>
        <div className="ButtonGroup">
          <a className="Button Filled" href="mailto:contact@senaryblockchain.ventures">
            Contact Us
          </a>
        </div>
        <SocialLinks />
      </div>
      <div className="HeroBorder BackgroundImage" />
    </div>
  </Layout>
)

export default IndexPage
