import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import profile from '../assets/images/profile.jpg'

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <div>
        <Helmet title={get(this, 'props.data.site.siteMetadata.title')} />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="about" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>I'm currently a student at Sacramento State studying Computer Science. I have a passion for software and web development, with experience in multiple languages and frameworks for both. Some of my hobbies include reading books and blogs, music, playing board and video games, and watching sports.</p>
              </div>
              <span className="image"><img id="profile" src={profile} alt="" /></span>
            </div>
          </section>

          <section id="projects" className="main special">
            <header className="major">
              <h2>Projects</h2>
            </header>
            <ul className="features">
              <li>
                <span className="icon major style1 fa-code"></span>
                <h3><b>API Reference Web App</b><br/><sub><i>VSP Global</i></sub></h3>
                <p>For this project, our team created an API Reference web application based on the <a href="https://swagger.io/" target="#">Swagger</a> specification. Instead of generating documentaion from the source code with Swagger annotations, our app allowed developers to easily and quickly write docs via our client.</p>
                <p>Our web app was built with Angular, Java, and Spring.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3><b>Provider and Lab Network API</b><br/><sub><i>VSP Global</i></sub></h3>
                <p>The goal of this project was to convert existing Provider Network and Lab Network databases to SQL Server and write an API that would query the new databases. This allowed VSP to take the old databases off the mainframe, aiding in its eventual retirement. Our API would be under heavy use daily (tens of thousands of calls or more) so it was crucial that we use time and space saving techniques, such as caching and load balancing. We also tested our code extensively with JUnit.</p>
                <p>Provider and Lab Network API were written in Java. The technologies we used were Spring, JPA, and SQL Server.</p>
              </li>
              <li>
                <span className="icon major style5 fa-gamepad"></span>
                <h3><b>Chessnobyl</b><br/><i>CSU Sacramento</i></h3>
                <p>Chessnobyl is an AI created for CSc 180, Intelligent Systems, at CSU Sacramento. It was created to play a custom chess variant created by our professor. Out of more than twenty student-created AIs, Chessnobyl finished in the top 5 after a multiday competition.</p>
                <p>Chessnobyl was written in C++ and implements AI algorithms such as Minimax, Alpha Beta Pruning, and Iterative deepening.</p>
                <p>The source code for Chessnobyl can be found <a href="https://github.com/rbwrightjr91/CSc-180---Chessnobyl/" target="#">on my GitHub</a>.</p>
              </li>
            </ul>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Contact me</h2>
              <p>Feel free to reach out to me on <br/>
              </p>
              <h3><ul className="icons">
                <li><a href="https://linkedin.com/in/rbwrightjr91" target="#">LinkedIn</a></li>
                <li><a href="https://twitter.com/rbwrightjr91" target="#">Twitter</a></li>
                <li>and</li>
                <li><a href="https://github.com/rbwrightjr91" target="#">GitHub</a></li>
            </ul></h3>
            </header>
            <footer className="major">
              <p>Or shoot me an email at <a href="mailto:rbwrightjr91@gmail.com" target="#">rbwrightjr91@gmail.com</a></p>
            </footer>
          </section>

        </div>

      </div>
    )
  }
}

Index.propTypes = {
  route: React.PropTypes.object,
}

export default Index

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
