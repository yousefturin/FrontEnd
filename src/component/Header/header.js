import React from 'react'
import "./header.css"
import SvgComponent from '../../utils/SvgComponent'
function Header({ title, searchData }) {
    return (
        <div>
            <div className="header">
                <div className="header-title">
                    <h2>{title}</h2>
                </div>
                <div className="header-search">
                    <SvgComponent
                        svgKey={"searchSvg"}
                        width={24}
                        height={24}
                        stroke={"#A0A0A0"}
                        title='search icon'
                    />
                    <input type="text" placeholder="Search"  />
                </div>
            </div>
        </div>
    )
}

export default Header
