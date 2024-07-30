import React from 'react';
import "./header.css";
import SvgComponent from '../../utils/SvgComponent';

function Header({ title, searchData }) {
    const [optionIndex, setOptionIndex] = React.useState(0);
    const [placeholderClass, setPlaceholderClass] = React.useState('placeholder-show');
    const [isAnimating, setIsAnimating] = React.useState(true);

    const options = [
        "Type Book name",
        "Type Author",
        "Type book title",
        "Find an author",
        "Search a book",
        "Find a borrow"
    ];

    React.useEffect(() => {
        let animationInterval;
        let resetTimeout;

        if (isAnimating) {
            animationInterval = setInterval(() => {
                setPlaceholderClass('placeholder-hide');
                setTimeout(() => {
                    setOptionIndex((prevIndex) => (prevIndex + 1) % options.length);
                    setPlaceholderClass('placeholder-show');
                }, 500); // Match with CSS animation duration
            }, 5000); // Duration of each animation

            resetTimeout = setTimeout(() => {
                setIsAnimating(false);
                setPlaceholderClass(''); // Reset class to default
            }, 600000); // 10 minutes in milliseconds
        }

        return () => {
            clearInterval(animationInterval);
            clearTimeout(resetTimeout);
        };
    }, [isAnimating]);

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
                    <input
                        type="text"
                        placeholder={isAnimating ? options[optionIndex] : "Search"}
                        className={placeholderClass}
                    />
                </div>
            </div>
        </div>
    );
}

export default Header;
