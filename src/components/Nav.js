import React from 'react'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Logo from '../images/quentinmourrier.icons.svg'
import useScroll from '../hooks/useScroll'

export default function Nav() {
    const [visible] = useScroll();
    return (
        <nav className={visible ? "navbar visible" : "navbar"}>
            <div className="logo">
                <Logo/>
            </div>
            <ul className="navbar-nav">
                <li>
                    <a onClick={() => scrollTo("#about")}><span>01.</span> About</a>
                </li>
                <li>
                    <a onClick={() => scrollTo("#experience")}><span>02.</span> Experience</a>
                </li>
                <li>
                    <a onClick={() => scrollTo("#work")}><span>03.</span> Work</a>
                </li>
                <li>
                    <a onClick={() => scrollTo("#contact")}><span>04.</span> Contact</a>
                </li>
                <li>
                    <a className="resume">Resume</a>
                </li>
            </ul>
        </nav>
    )
}
