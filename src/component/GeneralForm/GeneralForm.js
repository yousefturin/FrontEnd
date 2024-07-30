import React, { useEffect, useState } from 'react';

function GeneralForm({ fields, actionType, onSubmit }) {
    const [defaultValues, setDefaultValues] = useState({});

    useEffect(() => {
        // Set the default values based on actionType and other logic
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
    }, [fields]);

    const getDefaultWorkerId = () => {
        // Replace this with your actual logic to get the worker ID
        return "12345"; // Example Worker ID
    };

    const getDefaultState = () => {
        if (actionType === "borrow") {
            return "borrow";
        } else if (actionType === "return") {
            return "returned";
        }
        return "";
    };

    const getDefaultDate = () => {
        const today = new Date();
        return today.toISOString().split('T')[0]; // Format: YYYY-MM-DD
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {};
        fields.forEach(field => {
            const fieldName = field.id;
            data[fieldName] = formData.get(fieldName) || defaultValues[fieldName] || '';
        });
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit} className="general-form">
            {fields.map((field, index) => {
                const fieldName = field.id;
                return (
                    <div key={index} className="form-group">
                        <label>{field.label}</label>
                        <input
                            type={field.type}
                            name={fieldName}
                            placeholder={field.placeholder}
                            required={field.required}
                            defaultValue={defaultValues[fieldName]}
                            readOnly={field.readOnly}
                            disabled={field.readOnly} // Also disables the field visually
                        />
                    </div>
                );
            })}
            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
}

export default GeneralForm;
