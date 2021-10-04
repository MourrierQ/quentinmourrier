import React from 'react'
import ContentTitle from '../components/ContentTitle'
import InlineLink from '../components/InlineLink'

export default function Experience() {
    return (
        <div className="experience" 
            id="experience" 
            data-sal="fade"
            data-sal-delay="1"
            data-sal-easing="ease">
            <ContentTitle number="02." title="Where I've worked"/>
            <ul>
                <li className="experience-item">
                    <span className="title">Fullstack Developer <InlineLink href="https://www.odoo.com">@ Odoo</InlineLink></span>
                    <span className="year">September 2018 - August 2021</span>
                    <ul className="description">
                        <li><p>Write modern, maintainable code alongside 200 other developers for the Odoo ERP system. My work was done in Python and Javascript</p></li>
                        <li><p>Fulfill my tasks in an aunotomous way following a rigorous process of testing and code reviews from my peers.</p></li>
                        <li><p>Challenge specifications to ensure that new features are both technically and functionally good to be introduced in a massive codebase designed to be maintained for years to come. </p></li>
                    </ul>
                </li>
                <li className="experience-item">
                    <span className="title">.Net Developer Trainee <InlineLink href="https://www.technobel.be"> @ Technobel</InlineLink></span>
                    <span className="year">October 2017 - August 2018</span>
                    <ul className="description">
                        <li><p>Learn the basics of .Net development with skilled trainers from Cognitic and BStorm</p></li>
                        <li><p>In Depth learning of design patterns, Asp.Net, WPF, MVVM/MVC , SQL Server and Entity Framework.</p></li>
                        <li><p>Extended Soft Skills training</p></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}
