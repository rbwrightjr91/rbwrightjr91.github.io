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
                <p>I'm currently a student at Sacramento State studying Computer Science. I have a passion for software and web devolpment, with experience in multiple languages and frameworks for both. Some of my hobbies include reading books and blogs, music, playing board and video games, and watching sports.</p>
                {/* <ul className="actions">
                  <li><Link to="/generic" className="button">Learn More</Link></li>
                </ul> */}
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
                <p>The technologies we used for Provider and Lab Network API were Java, Spring, JPA, and SQL Server.</p>
              </li>
              <li>
                <span className="icon major style5 fa-chess-knight"></span>
                <h3>Dolor nullam</h3>
                <p>Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.</p>
              </li>
            </ul>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
            </footer>
          </section>

          <section id="contact" className="main special">
            <header className="major">
              <h2>Congue imperdiet</h2>
              <p>Donec imperdiet consequat consequat. Suspendisse feugiat congue<br />
              posuere. Nulla massa urna, fermentum eget quam aliquet.</p>
            </header>
            <footer className="major">
              <ul className="actions">
                <li><Link to="/generic" className="button special">Get Started</Link></li>
                <li><Link to="/generic" className="button">Learn More</Link></li>
              </ul>
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
