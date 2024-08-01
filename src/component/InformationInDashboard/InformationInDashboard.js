import React from 'react'
import "./InformationInDashboard.css"
import CountUp from 'react-countup';

function InformationInDashboard({ informationAbout, selectedBtnMainActions }) {
    return (
        <div className="info-card-main">
            {informationAbout?.map((info, index) => {
                return (
                    <div className="info-card" key={index}>
                        <h2>
                            <CountUp
                                start={0}
                                end={info?.num}
                                duration={2.5} // Duration in seconds
                                separator=","
                            />
                        </h2>
                        <p>{info.title}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default InformationInDashboard
