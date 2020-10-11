import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout/layout'

import IsaacSrc from '../images/team-isaac.png'
import ErichSrc from '../images/team-erich.png'
import JonahSrc from '../images/team-jonah.png'

const OurStoryPage = () => (
  <Layout>
    <div className="OurStory-wrapper">
      <div className="Hero Home OurStory">
        <div className="Hero__Contents">
          <div className="OurStory__Contents">
          <h1>Our Story</h1>
            <p>United by deep respect and nurtured trust, we are three friends and equal business partners who are grateful to be part of the crypto revolution and eager to help build its better future.</p>
            <p>Isaac started Senary Blockchain Ventures in 2018 to explore blockchain opportunities as a technologist, as an entrepreneur, and as an investor.</p>
            <p>Isaac and Erich, lifelong best friends, partnered up for one of SBV's earliest projects. MediaMath, a company Erich co-Founded, hired SBV to analyze its strategic opportunities to leverage a decentralized tech stack for digital marketing. Jonah, a technologist recruited to MediaMath, caught wind of this work, volunteered his way onto the team and quickly became an invaluable contributor and cherished friend.</p>
            <p>SBV's work with MediaMath concluded in July of 2019, and Erich and Jonah left the company at the end of that year. This year the three became equal partners in Senary Blockchain Ventures. Together they explore blockchain opportunities as technologists, as entrepreneurs, and as investors.</p>
            </div>
          <div className="Team">
            <h1>Team</h1>
            {/* First Teammate */}
            <div className="Grid">
              <div className="Column Column--25">
                <div className="TeamMember">
                  <div className="TeamProfile">
                    <img src={IsaacSrc} />
                  </div>
                  <h1>Isaac</h1>
                  <h2>Lidsky</h2>
                </div>
              </div>
              <div className="Column Column--75">
                <p>Isaac is a serial entrepreneur and New York Times best-selling author. His experience with the innovative power of networked computation to reshape society is deep and diverse.</p>
                <p>He has studied it. As an applied mathematics and computer science major at Harvard College, for example, he created a parallel-processing virtual machine environment that was later used to teach students software development for parallel-processing architectures. He also conducted research for Larry Lessig on the "browser wars" and Microsoft's landmark antitrust battle with the United States. (Lidsky systematically cataloged the changes made to an installation of Internet Explorer or Netscape Navigator by upgrading the Microsoft Windows operating system-for a variety of permutations of versions of all three products.) And Lidsky was the first Harvard Law School student to be named a Fellow of the Berkman Center For Internet & Society, where he worked for legends like Charles Nesson and Jonathan Zittrain, publishing original work and teaching Harvard undergrads about the ways society's laws and technologies shape each other.</p>
                <p>He has built with it. For example, Lidsky Co-Founded [x+1] (f/k/a Poindexter Systems, f/k/a ru4.com – acquired 2014) in 1999. Leveraging new internet protocols and emerging distribution models, Lidsky and his team built a suite of applications for marketers that was among the first to enable real-time programmatic targeting and dynamic content creation through advertising channels. Likewise, when Lidsky and his partners bought ODC Construction in 2011, they developed a suite of proprietary networked applications to capture tremendous value by reconciling disparate workflows. Reimagining high-volume residential construction as an enterprise in collaborative logistics, they turned a conventional construction subcontractor into a technology-driven, category-creating residential construction services company, growing the business ~15x in five years.</p>
                <p>He has invested in it. Both his treasure, as an early crypto enthusiast, and his time, as a passionate student of crypto pioneers.</p>
                <p>Lidsky lives in Windermere with his wife Dorothy and their four children. For his full bio, visit his website. <a href="www.lidsky.com/about">www.lidsky.com/about</a></p>
              </div>
            </div>
            {/* Second Teammate */}
            <div className="Grid">
              <div className="Column Column--25">
                <div className="TeamMember">
                  <div className="TeamProfile">
                    <img src={ErichSrc} />
                  </div>
                  <h1>Erich</h1>
                  <h2>Wasserman</h2>
                </div>
              </div>
              <div className="Column Column--75">
                <p>Erich is an entrepreneur and leader of scaled, global sales and service organizations who focus on creating client value and success with enterprise software.</p>
                <p>From posts in the US and around the world, Erich has led organizations that solve complex business challenges with technology and service. Erich is a pioneer of automation in paid marketing, having co-founded New York-based technology company MediaMath in 2007 with wonderful partners. Together, the MediaMath team would invent and scale the category of Programmatic Marketing, introducing the foundational RTB protocol, algorithmic decisioning, workflow and supply chain optimization tools, and interoperability across established and emerging digital marketing channels.</p>
                <p>Before his career in digital marketing technology, Erich was a vigorous civil liberties advocate, rising to lead a national civil liberties and civil rights organization based in Philadelphia, the Foundation for Individual Rights in Education, until 2004. As executive director, he was responsible for fundraising and growing the non-profit organization’s news media and legal networks, which would combine to shine sunlight on abuses of civil rights and would provide legal resources for litigation. He devoted himself to this organization at a time when technology available for executing fundraising and marketing strategies were just emerging. Seeing digital’s potential, he was inspired to pursue a career in digital communications.</p>
                <p>Throughout his career, Erich has been a visible leader active with the communities in which he works. He has been featured in keynotes, panels, podcasts, webinars, live radio, and written thought leadership in most every major media market in the world.</p>
                <p>Erich was born in London, England and grew up in Miami, Florida. He earned a bachelor’s degree in political philosophy and classical piano from the University of Virginia and holds joint British and American citizenship. He is an avid angel investor, classical pianist, father to two wonderful boys, and husband to one lovely wife. He lives in Orlando, Florida.</p>
              </div>
            </div>
            {/* Third Teammate */}
            <div className="Grid">
              <div className="Column Column--25">
                <div className="TeamMember">
                  <div className="TeamProfile">
                    <img src={JonahSrc} />
                  </div>
                  <h1>Jonah</h1>
                  <h2>Weinstein</h2>
                </div>
              </div>
              <div className="Column Column--75">
                <p>Jonah is an entrepreneur and mission-driven product leader.</p>
                <p>He spent the bulk of his time at MediaMath contributing to various distributed systems related to digital identity. While working to launch a non-proprietary and open-source identity project, Jonah discovered some literature on blockchain and Web 3. Recognizing its promise and importance, he left his post managing old-world identity products in search of a more respectful and self-sovereign future.</p>
                <p>Though his first inroad into blockchain was in leveraging decentralized computational infrastructure, Jonah’s since grown passionate about DAOs, decentralized content networks, and crypto-economic systems that promote self-sovereignty, openness, and that work to remedy structural inequities.</p>
                <p>Jonah’s thrilled to join SBV with great friends, and grateful to be contributing to this critically important new era for public computing. In his spare time, Jonah enjoys outdoor activities and trading on dydx. He lives where the wind takes him, always close to his family. He’s very proud of his two younger brothers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Block GetInvolved" id="get-involved">
        <div className="Block__Contents">
          <h1>Get Involved</h1>
          <div className="GetInvolved_Contents">
          <p>
          We’re always eager to connect and to collaborate. Check out our Medium page to read more about our strategic work and thinking. If you’d like to learn more about us, to share your insights about the problems we’re solving, or to recruit our community’s insights on the problems you are solving,
          email <a href="mailto:contact@senaryblockchain.ventures">contact@senaryblockchain.ventures</a> and get us involved.
        </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default OurStoryPage
