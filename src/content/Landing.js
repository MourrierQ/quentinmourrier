import React from 'react'
import InlineLink from '../components/InlineLink'

export default function Landing() {
    return (
        <div className="landing"
            data-sal="fade"
            data-sal-delay="100"
            data-sal-easing="ease">
            <span className="salutations">Hi, my name is</span>
            <h1 className="title">Quentin Mourrier.</h1>
            <h2 className="subtitle">I build things for the web</h2>
            <p className="presentation">I'm a fullstack developer specialized in react and nodejs. 
            After 3 years of working for <InlineLink href="https://www.odoo.com/">Odoo</InlineLink>,
            one of the top ERP providers in the market,
            I am looking for new challenges to hone my skills and keep learning new things.</p>
        </div>
    )
}
