import React from 'react'
import Logo from '../images/quentinmourrier.icons.svg'

export default function Nav() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Logo/>
            </div>
            <ul className="navbar-nav">
                <li>
                    <a><span>01.</span> About</a>
                </li>
                <li>
                    <a><span>02.</span> Experience</a>
                </li>
                <li>
                    <a><span>03.</span> Work</a>
                </li>
                <li>
                    <a><span>04.</span> Contact</a>
                </li>
                <li>
                    <a className="resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}
