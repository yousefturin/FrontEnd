import React, { useEffect, useState } from 'react';
import './GeneralForm.css';

function GeneralForm({ fields, actionType, onSubmit }) {
    const [defaultValues, setDefaultValues] = useState({});

    useEffect(() => {
        const initialValues = {};
        fields.forEach(field => {
            const fieldName = field.id;
            if (fieldName === 'workerId') {
                initialValues[fieldName] = getDefaultWorkerId();
            } else if (fieldName === 'startDate' || fieldName === 'endDate') {
                initialValues[fieldName] = getDefaultDate();
            } else if (fieldName === 'status') {
                initialValues[fieldName] = getDefaultState();
            } else {
                initialValues[fieldName] = field.defaultValue || '';
            }
        });

        setDefaultValues(initialValues);
    }, [fields, actionType]);

    const getDefaultWorkerId = () => "12345";
    const getDefaultState = () => (actionType === "borrow" ? "borrow" : actionType === "return" ? "returned" : "");
    const getDefaultDate = () => new Date().toISOString().split('T')[0];

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};

        const extractData = (fields, dataObj) => {
            fields.forEach(field => {
                if (field.data) {
                    dataObj[field.id] = {};
                    extractData(field.data, dataObj[field.id]);
                } else {
                    dataObj[field.id] = formData.get(field.id) || defaultValues[field.id] || '';
                }
            });
        };

        extractData(fields, data);

        // Ensure author and publisher are included as null if actionType is addBook
        if (actionType === "addBook") {
            data.author = null;
            data.publisher = null;
        }

        onSubmit(data);
    };

    const renderFields = (fields, level = 0) => {
        const rows = [];
        let row = [];
        let count = 0;

        fields.forEach((field, index) => {
            if (field.data) {
                // Handle nested fields
                if (row.length > 0) {
                    rows.push(<div key={`row-${count}`} className="form-row">{row}</div>);
                    row = [];
                }
                rows.push(
                    <div key={`nested-${index}`} className="nested-fields">
                        {renderFields(field.data, level + 1)}
                    </div>
                );
                count++;
            } else {
                row.push(
                    <div key={index} className="form-group">
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            name={field.id}
                            placeholder={field.placeholder}
                            required={field.required}
                            defaultValue={defaultValues[field.id]}
                            readOnly={field.readOnly}
                            disabled={field.readOnly}
                        />
                    </div>
                );
                count++;
                if (count % 5 === 0) {
                    rows.push(<div key={`row-${count}`} className="form-row">{row}</div>);
                    row = [];
                }
            }
        });

        if (row.length > 0) {
            rows.push(<div key={`row-end`} className="form-row">{row}</div>);
        }

        return rows;
    };

    return (
        <form onSubmit={handleSubmit} className="general-form">
            {renderFields(fields)}
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
}

export default GeneralForm;
