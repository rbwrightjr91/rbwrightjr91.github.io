import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Header from '../components/Header'
import Nav from '../components/Nav'
import profile from '../assets/images/profile.jpg'

import '../assets/css/index.css';

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
                <p>I'm currently an Associate Cloud Ops Engineer at PowerSchool, located in Folsom, California. I have a passion for web development, with experience in multiple languages and frameworks for both. In May 2019, I graduated Cum Laude from California State University, Sacramento with a Bachelor of Science in Computer Science and a certificate in Game Engineering. Some of my hobbies include <a href="https://www.goodreads.com/user/show/16552310-richard-wright" target="_blank">reading books</a> and blogs, <a href="https://open.spotify.com/user/123095168?si=q24pdybvRneL2V-VxLWRcg" target="_blank">listening to music</a>, playing board and video games, and watching sports (hockey and baseball being my favorites).</p>
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
                <span className="icon major style4 fa-desktop"></span>
                <h3><b><i>Project Unicorn</i> Updates</b><br/><sub><i>PowerSchool</i></sub></h3>
                <p>Project Unicorn is an <i>Infrastructure as Code</i> project that deploys non-production instances of our core product for Dev and QA teams to develop/test against. Recently, our organization migrated to a new code repository (GitLab) and I was tasked with updating depcreated dependency usages in the Project Unicorn code base. To do this, I had to read code that I did not write, understand how it functioned, and update code that used the deprecated dependency versions. This involved a lot of testing and debugging code and code reviews with Senior Engineers on my team.</p>
                <p>Project Unicorn is written in Python and is implemented as a GitLab CI Pipeline.</p>
              </li>
              <li>
                <span className="icon major style5 fa-cloud"></span>
                <h3><b>Personal Cloud Storage</b><br/><sub><i>Personal</i></sub></h3>
                <p>Implemented my own personal cloud storage solution with <a href="https://www.nextcloud.com" target="#">NextCloud</a> hosted on a Raspberry Pi 4 running Ubuntu 18.04 LTS</p>
              </li>
              <li>
                <span className="icon major style1 fa-expeditedssl"></span>
                <h3><b>Lemur Certificate Manager</b><br/><sub><i>PowerSchool</i> (current project)</sub></h3>
                <p>Working with another DevOps Engineer to implement the Open Source certificate manager <a href="https://github.com/Netflix/Lemur">"Lemur"</a> created by Netflix. This involved demoing a proof of concept, as well writing plugins to extend Lemur and allow it to integrate with the API’s used by the Certificate Authorities we use.</p>
                <p>Lemur is written in Python and we updated the built-in front end by upgrading it from AngularJS to Angular 7.</p>
              </li>
              <li>
                <span className="icon major style2 fa-code"></span>
                <h3><b>API Reference Web App</b><br/><sub><i>VSP Global</i></sub></h3>
                <p>For this project, our team created an API Reference web application based on the <a href="https://swagger.io/" target="#">Swagger</a> specification. Instead of generating documentation from the source code with Swagger annotations, our app allowed developers to easily and quickly write docs via our client.</p>
                <p>Our web app was built with Angular, Java, and Spring.</p>
              </li>
              <li>
                <span className="icon major style3 fa-copy"></span>
                <h3><b>Provider and Lab Network API</b><br/><sub><i>VSP Global</i></sub></h3>
                <p>The goal of this project was to convert existing Provider Network and Lab Network databases to SQL Server and write an API that would query the new databases. This allowed VSP to take the old databases off the mainframe, aiding in its eventual retirement. Our API would be under heavy use daily (tens of thousands of calls or more) so it was crucial that we use time and space saving techniques, such as caching and load balancing. We also tested our code extensively with JUnit.</p>
                <p>Provider and Lab Network API were written in Java. The technologies we used were Spring, JPA, and SQL Server.</p>
              </li>              
              <li>
                <span className="icon major style4 fa-search"></span>
                <h3><b>University Union Lost & Found</b><br/><sub><i>CSU Sacramento</i></sub></h3>
                <p>For Senior Project, my team and I developed a lost and found web application for the main student center on campus, the University Union. The first semester was spent defining the requirements of the software (in the form of user stories), creating a backlog of features, and prioritizing those features. The second semester, we developed the application, using the SCRUM methodology in order to make sure the software met the demands of our client and was delivered on time.</p>
                <p>University Union Lost and Found was built with Angular, Java, Spring, JPA, and MySQL.</p>
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
              <p>Or shoot me an email at <a href="mailto:me@rbwrightjr91.dev" target="#">me@rbwrightjr91.dev</a></p>
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
