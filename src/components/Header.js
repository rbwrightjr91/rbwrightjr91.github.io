import React from 'react'
import Link from 'gatsby-link'

import computer from '../assets/images/computer.svg';
import '../assets/css/Header.css';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={computer} alt="" /></span>
        <h1>Richard Wright</h1>
        <p>Associate Cloud Ops Engineer @ PowerSchool</p>
    </header>
)

export default Header
