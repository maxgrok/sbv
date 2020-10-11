import React from 'react'
import { Link } from 'gatsby'

import IconMediumSrc from '../../../images/IconMedium.svg'
import IconTwitterSrc from '../../../images/IconTwitter.svg'

import './SocialLinks.scss'

const SocialLinks = () => (
  <div className="SocialLinks">
    <a href="https://medium.com/senary-blockchain-ventures">
      <img src={IconMediumSrc} />
    </a>
    <a href="https://twitter.com/SenaryBV">
      <img src={IconTwitterSrc} />
    </a>
  </div>
)

export default SocialLinks
