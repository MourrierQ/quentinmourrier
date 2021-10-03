import React from 'react'
import IconGithub from './icons/IconGithub'
import IconLinkedin from './icons/IconLinkedin'
import IconTwitter from './icons/IconTwitter'


export default function Socials() {
    return (
        <div className="socials">
            <a>
                <IconGithub/>
            </a>
            <a>
                <IconTwitter/>
            </a>
            <a>
                <IconLinkedin/>
            </a>
            <div className="stroke"/>
        </div>
    )
}
