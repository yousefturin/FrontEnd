import React from 'react'
import "./InformationInDashboard.css"

function InformationInDashboard({ informationAbout }) {
    return (
        <div className="info-card-main">
            {informationAbout.map((info, index) => (
                <div
                    className="info-card"
                    key={index}
                >
                    <h2>{info.num}</h2>
                    <p>{info.title}</p>
                </div>
            ))}
        </div>
    )
}

export default InformationInDashboard
