import React, { useState } from 'react'
import { Link } from 'gatsby'

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
      <div className="menu" style={{marginRight: `750px`, display: `inline-block`}}> 
      <ul>
     <li>Home
       <ul>
         <li class="link">
           <Link to="/" target="_blank">SBV | Studios</Link>
           <ul>
             <li class="link">
               <Link to="/" target="_blank">Wave One</Link>
             </li>
             <li class="link">
               <Link to="/" target="_blank">Community Tokens</Link>
             </li>
             <li class="link">
               <Link to="#" target="_blank">Work with Us</Link>
             </li>
           </ul>
         </li>
       </ul>
     </li>
    </ul>
    </div>
    <div className="menu right">
    <ul>
     <li>About
       <ul>
         <li class="link">
           <Link to="/our-story" target="_blank">Our Story</Link>
           <ul>
             <li class="link">
               <Link to="/team" target="_blank">Team</Link>
             </li>
            </ul>
            </li>
             <li class="link">
               <Link to="" target="_blank">Blog</Link>
             </li>
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
              <Link to="/our-story" onClick={toggleNav}>
            Home</Link>
            <ul>
              <li><Link to="https://sbv.studio/">SBV | Studio</Link></li>
              <ul>
              <li><Link to="https://sbv.studio/#wave-one" target="_blank">Wave One</Link></li>
              <li><Link to="https://sbv.studio/#community-tokens" target="_blank">Community Tokens</Link></li>
              <li><Link to="https://sbv.studio/#work-with-us" target="_blank">Work with Us</Link></li>
              </ul>
            </ul>
            </li>
          </ul> 
          <br/>{/* make into dropdown with "Studio" --> "Wave One", "Community Tokens", "Work with Us" options*/}
          <ul>
            <li style={{listStyle:`none`}}>
              <Link to="/our-story" onClick={toggleNav}>
            About</Link>
            <ul>
              <li><Link to="/our-story" onClick={toggleNav}>Our Story</Link></li>
              <ul>
              <li><Link to="/our-story" onClick={toggleNav}>Our Team</Link></li>
              </ul>
              <li><Link to="#blog" onClick={toggleNav}>Blog</Link></li>
            </ul>
            </li>
          </ul> {/* Make into dropdown with "Our Story" (links to Our Story page), "Team", "Blog" options */}
        </div>
      </div>
      {/* End Hamburger */}
    </>
  )
}

export default TopNav
