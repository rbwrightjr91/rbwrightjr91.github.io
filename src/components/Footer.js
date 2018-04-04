import React from 'react'
import Link from 'gatsby-link'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section className="main special">
            <h2>Find me</h2>
            <ul className="icons">
                <li><a href="https://twitter.com/rbwrightjr91" target="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
                <li><a href="https://github.com/rbwrightjr91" target="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                <li><a href="https://linkedin.com/in/rbwrightjr91" target="#" className="icon fa-linkedin alt"><span className="label">Dribbble</span></a></li>
                <li><a href="mailto:rbwrightjr91@gmail.com" target="#" className="icon fa-google alt"></a></li>
            </ul>
        </section>
        <p className="copyright">Header icon made by 
        <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a><br/>Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
    </footer>
)

export default Footer
