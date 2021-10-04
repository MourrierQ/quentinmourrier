import React from 'react'
import ContentTitle from '../components/ContentTitle'

export default function Contact() {
    return (
        <div className="contact"
            id="contact"   
            data-sal="fade"
            data-sal-delay="1"
            data-sal-easing="ease">
            <ContentTitle number="04. What's next ?" title="Get In Touch"/>
            <p className="presentation">
                I am currently open for new opportunities, especially the ones related to React.js. You can contact me on my inbox or through social media links on this website.
            </p>
            <p className="presentation">
                Thank you for taking the time to go through my website!
            </p>
            <a href="mailto: quentinmourrier@gmail.com" className="contact-button">Contact Me</a>
        </div>
    )
}
