import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ContentTitle from '../components/ContentTitle'

export default function About() {
    return (
        <div className="about">
            <ContentTitle number="01" title="About Me" />
            <div className="about-content">
                <div className="presentation">
                    <p>
                        Hello! My name is Quentin and I am a fullstack javascript developer. 
                        What I love the most about this field is that there is a constant need of learning new things, especially
                        in the javascript ecosystem where a new frameworks pops up every month to everybody's delight !
                    </p>
                    <p>
                    I started learning development at HERS in Libramont, Belgium, but had to stop my cursus midway. It didn't stop me from becoming a developer
                    as I am quite autonomous and love learning new things by myself by taking deep dives in documentations. I am a strong believer of learning by doing! 
                    </p>
                    <p>
                    I specialized myself in React and Nodejs for their huge communities, their support and their incredibly well written documentations.
                    They are fun to use and extremely efficient. In fact, this website was made with gatsby, a framework built upon react to generate performant static sites
                    </p>
                </div>
                <div className="image-wrapper">
                    <div className="image">
                        <StaticImage src="https://picsum.photos/300/300"/>
                    </div>
                </div>
            </div>

        </div>
    )
}
