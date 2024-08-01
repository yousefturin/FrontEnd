// MainActionBtns.js
import React from 'react';
import SvgComponent from '../../utils/SvgComponent';
import './MainActionBtns.css';
import GeneralForm from '../GeneralForm/GeneralForm';
const BASE_URL = 'https://localhost:7228/api';

function MainActionBtns({ workerData, mainBtnActions, selectedBtnMainActions, setSelectedBtnMainActions }) {
    const currentAction = mainBtnActions.find(btn => btn.title === selectedBtnMainActions);

    const handleSubmit = (formData) => {
        console.log(formData.id);
        console.log(currentAction.method);
        console.log('Form submitted:', formData);
        PostMethod(formData);
    };

    const PostMethod = async (data) => {
        switch (currentAction.method) {
            case 'POST':
            case 'PUT':
                try {
                    const response = await fetch(`${BASE_URL}/${currentAction.url}`, {
                        method: `${currentAction.method}`,
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to ${currentAction.actionType}`);
                    }

                    const responseData = await response.json();
                    console.log(`${currentAction.actionType} Created:`, responseData);
                } catch (error) {
                    console.error(`Error ${currentAction.actionType}`, error);
                }
                break;
            case 'DELETE':
                try {

                    const response = await fetch(`${BASE_URL}/${currentAction.url}?id=${data.id}`, {
                        method: `${currentAction.method}`,
                    });

                    if (!response.ok) {
                        throw new Error(`Failed to ${currentAction.actionType}`);
                    }

                    const responseData = await response.json();
                    console.log(`${currentAction.actionType} Created:`, responseData);
                } catch (error) {
                    console.error(`Error ${currentAction.actionType}`, error);
                }
                break;
            case 'GET':
                console.log('GET method');
                break;
            default:
                console.log('No method');
        }

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
                                workerData={workerData}
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
