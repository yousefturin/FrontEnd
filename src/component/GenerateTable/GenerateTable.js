import React from 'react';
import './GenerateTable.css';

const GeneralTable = ({ data, title, selectedBtnMainActions }) => {
    // Get column names from the first item in the data array
    const columns = data.length > 0 ? Object.keys(data[0]) : [];

    return (
        <div className={`table-wrapper ${selectedBtnMainActions !== null? 'expanded-data-table-padding' : ''}`}>
            
            <div className="header-table">
                <div className="header-table-title">
                    <h2>{title}</h2>
                </div>
            </div>
            <table className="data-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={item.id || index} className={index % 2 === 0 ? 'light-row' : 'dark-row'}>
                            {columns.map((column, colIndex) => (
                                <td key={colIndex}>{item[column]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default GeneralTable;
