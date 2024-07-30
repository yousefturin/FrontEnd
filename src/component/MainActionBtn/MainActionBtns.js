// MainActionBtns.js
import React from 'react';
import SvgComponent from '../../utils/SvgComponent';
import './MainActionBtns.css';
import GeneralForm from '../GeneralForm/GeneralForm';

function MainActionBtns({ workerData, mainBtnActions, selectedBtnMainActions, setSelectedBtnMainActions }) {
    const handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
        // Handle form submission logic here, e.g., send data to the backend
    };
    return (
        <div className="action-btns-main">
            {mainBtnActions.map((btn, index) => (
                <div
                    className={`action-btn ${selectedBtnMainActions === btn.title ? 'expanded' : ''}`}
                    key={index}
                    onClick={() => {
                        if (selectedBtnMainActions !== btn.title) {
                            setSelectedBtnMainActions(btn.title);
                        }
                    }}
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
                    {selectedBtnMainActions !== btn.title && (
                        <div className="main-btn-action-icon">
                            <SvgComponent
                                svgKey={btn.logoId}
                                width={42}
                                height={42}
                                title='app logo icon'
                            />
                        </div>
                    )}
                    {/* General form will be here for the data input */}
                    {selectedBtnMainActions === btn.title && (
                        <div className="form-container">
                            <GeneralForm
                                fields={btn.fields}
                                actionType={btn.actionType}
                                onSubmit={handleSubmit}
                            />
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default MainActionBtns;
