import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ContentTitle from '../components/ContentTitle'

const workItems = [
    {
        title: "Odoo eLearning",
        image: 'https://picsum.photos/500/300',
        redirect: "https://www.odoo.com/slides",
        tags: ['Odoo', 'Javascript', 'Python'],
        description: [
            "As an Odoo employee, I extensively worked on their new eLearning module released in the 13th version of Odoo",
            "The module featured course subscription, a new course viewer, a quiz feature and a progression system linked with Odoo's gamification module.",
            "The module is now one of the key part of the onboarding process of new employees @ Odoo, which is one of the fastest growing company in Belgium"
        ]
    },
    {
        title: 'Personal Programming Blog',
        image: 'https://picsum.photos/500/300',
        redirect: "https://www.odoo.com/slides",
        tags: ['Gatsby', 'React', 'Tailwind', 'Misc'],
        description: [
            "Personal blog where I write about what I learn, mostly in the form of short digestable tutorials.",
            "Blog was made using React and Gatsby with Tailwind CSS."
        ],
        left: true
    },
    {
        title: 'Youtube eLearning Channel',
        image: 'https://picsum.photos/500/300',
        redirect: "https://www.odoo.com/slides",
        tags: ['React', 'Redux', 'CSS', 'NodeJS', 'Misc'],
        description: [
            "Youtube channel where I upload some tutorials about techs that I love the most.",
            "It's mostly focused on React, Redux and CSS with some fun projects here and there."
        ],
        
    }
]


function WorkItem({title, description, tags, left, image, redirect}) {
    console.log(title, left);
    return (
        <div className={left ? "work-list-item left" : "work-list-item"}
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease">
            <a href={redirect} className="image" style={{backgroundImage: `url(${image})`}}/>
            <div className="work-infos">
                <a href={redirect} className="work-title">{title}</a>
                <div className="work-description">
                   {description.map((p) => <p>{p}</p>)}
                </div>
                <ul className="work-tags">
                    {tags.map((t, i) => <li className="tag" key={i.toString()}>{t}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default function Work() {
    const workElements = workItems.map((item) => <WorkItem {...item}/>)
    return (
        <div className="work" id="work">
            <ContentTitle number="03." title="Some projects I worked on"/>
            <div className="work-list">
                {workElements}
            </div>
        </div>
    )
}
