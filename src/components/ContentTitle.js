import React from 'react'

export default function ContentTitle({number, title}) {
    return (
        <div className="content-title">
            <span className="number">{number}</span>
            <h1 className="title">{title}</h1>
            <div className="stroke"/>
        </div>
    )
}
