// MainActionBtns.js
import React from 'react';
import SvgComponent from '../../utils/SvgComponent';
import './MainActionBtns.css';
import GeneralForm from '../GeneralForm/GeneralForm';


function MainActionBtns({ workerData, mainBtnActions, selectedBtnMainActions, setSelectedBtnMainActions }) {
    const handleSubmit = (formData) => {
        console.log('Form submitted:', formData);
        createBook(formData);
    };
    const createBook = async (book) => {
        try {
            const response = await fetch('http://192.168.1.11:7228/api/Book/CreateBook', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(book),
            });

            if (!response.ok) {
                throw new Error('Failed to create book');
            }

            const responseData = await response.json();
            console.log('Book created:', responseData);
        } catch (error) {
            console.error('Error creating book:', error);
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
