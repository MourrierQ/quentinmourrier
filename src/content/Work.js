import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import ContentTitle from '../components/ContentTitle'
import InlineLink from '../components/InlineLink';

const workItems = [
    {
        title: "Odoo eLearning",
        image: 'https://picsum.photos/500/300',
        redirect: "https://www.odoo.com/slides",
        tags: ['Odoo', 'Javascript', 'Python'],
        description: [
            <p>As an Odoo employee, I extensively worked on their new eLearning module released in the 13th version of Odoo</p>,
            <p>The module featured course subscription, a new course viewer, a quiz feature and a progression system linked with Odoo's gamification module.</p>,
            <p>The module is now one of the key part of the onboarding process of new employees @ Odoo, which is one of the fastest growing company in Belgium</p>,
            <p>You can view a presentation of this project on <InlineLink href="https://www.youtube.com/watch?v=5lCU_7doTd0">Odoo's channel</InlineLink></p>
        ]
    },
    {
        title: 'Personal Programming Blog',
        image: 'https://picsum.photos/500/300',
        redirect: "https://www.odoo.com/slides",
        tags: ['Gatsby', 'React', 'Tailwind', 'Misc'],
        description: [
            <p>Personal blog where I write about what I learn, mostly in the form of short digestable tutorials.</p>,
            <p>Blog was made using React and Gatsby with Tailwind CSS.</p>
        ],
        left: true
    },
    {
        title: 'Youtube eLearning Channel',
        image: 'https://picsum.photos/500/300',
        redirect: "https://www.odoo.com/slides",
        tags: ['React', 'Redux', 'CSS', 'NodeJS', 'Misc'],
        description: [
            <p>Youtube channel where I upload some tutorials about techs that I love the most.</p>,
            <p>It's mostly focused on React, Redux and CSS with some fun projects here and there.</p>
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
                   {description}
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
