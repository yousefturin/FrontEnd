import React from 'react';
import SvgComponent from '../../utils/SvgComponent';
import './MainActionBtns.css';

function MainActionBtns({ mainBtnActions, selectedBtnMainActions, setSelectedBtnMainActions }) {
    return (
        <div className="action-btns-main">
            {mainBtnActions.map((btn, index) => (
                <div
                    className={`action-btn ${selectedBtnMainActions === btn.title ? 'expanded' : ''}`}
                    key={index}
                    onClick={() => selectedBtnMainActions === btn.title
                        ? setSelectedBtnMainActions(null)
                        : setSelectedBtnMainActions(btn.title)}
                >
                    {selectedBtnMainActions === btn.title && (
                        <button
                            className="close-btn"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevents closing on clicking the close button
                                setSelectedBtnMainActions(null);
                            }}
                        >
                            ×
                        </button>
                    )}
                    <h3>{btn.title}</h3>
                    {
                        selectedBtnMainActions !== btn.title && (
                            <div className="main-btn-action-icon">
                                <SvgComponent
                                    svgKey={btn.logoId}
                                    width={42}
                                    height={42}
                                    title='app logo icon'
                                />
                            </div>
                        )
                    }
                </div>
            ))}
        </div>
    );
}

export default MainActionBtns;
