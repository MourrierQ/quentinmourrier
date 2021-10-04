import React from 'react'

export default function InlineLink({href, children}) {
    return (
        <a target="_blank" href={href} className="inline-link">
            {children}
        </a>
    )
}
