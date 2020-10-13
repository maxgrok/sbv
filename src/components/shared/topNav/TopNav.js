import React, { useState } from 'react'

import './TopNav.scss'
const TopNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  const hamburgerClass = navOpen
    ? 'navbar__hamburger hamburger hamburger--spin is-active'
    : 'navbar__hamburger hamburger hamburger--spin'

  const mobileNavClass = navOpen
    ? 'TopNav__Mobile TopNav__Mobile--Open'
    : 'TopNav__Mobile'

  const toggleNav = () => setNavOpen(!navOpen)

  return (
    <>
      <nav className="TopNav__Desktop">
      <div className="menu left" style={{marginRight: `850px`}}> 
      <ul>
     <li className="link"><a href="https://www.sbv.studio/">Studio</a>
       <ul>
          <li className="link">
            <a href="https://www.sbv.studio/#wave-one" target="_blank">Wave One</a>
          </li>
          <li className="link">
            <a href="https://www.sbv.studio/#community-tokens" target="_blank">Community Tokens</a>
          </li>
          <li className="link">
            <a href="https://www.sbv.studio/#work-with-us" target="_blank">Work with Us</a>
          </li>
        
       </ul>
       </li>
    </ul>
    </div>
    <div className="menu right">
    <ul>
     <li className="link">About
       <ul>
         <li class="link"><a href="/our-story" target="_blank">Our Story</a></li>
         <li class="link"><a href="/team" target="_blank">Team</a></li>
         <li class="link"><a href="" target="_blank">Blog</a></li>
       </ul>
     </li>
    </ul>
    </div>
      </nav>
      {/* Start Hamburger */}
      <button className={hamburgerClass} type="button" onClick={toggleNav}>
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
      <div className={mobileNavClass}>
        <div className="TopNav__Mobile--Contents">
        <ul>
            <li style={{listStyle:`none`}}>
              <a href="/" onClick={toggleNav}>
            Home</a></li>
              <li><a href="https://sbv.studio/">Studio</a></li>
              <li><a href="https://sbv.studio/#wave-one" target="_blank">Wave One</a></li>
              <li><a href="https://sbv.studio/#community-tokens" target="_blank">Community Tokens</a></li>
              <li><a href="https://sbv.studio/#work-with-us" target="_blank">Work with Us</a></li>
              
          </ul> 
          <br/>{/* make into dropdown with "Studio" --> "Wave One", "Community Tokens", "Work with Us" options*/}
          <ul>
            <li style={{listStyle:`none`}}>
              <a href="/our-story" onClick={toggleNav}>
            About</a>
            <ul>
              <li><a href="/our-story" onClick={toggleNav}>Our Story</a></li>
              <ul>
              <li><a href="/our-story" onClick={toggleNav}>Our Team</a></li>
              </ul>
              <li><a href="#blog" onClick={toggleNav}>Blog</a></li>
            </ul>
            </li>
          </ul> {/* Make into dropdown with "Our Story" (links href Our Story page), "Team", "Blog" options */}
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
