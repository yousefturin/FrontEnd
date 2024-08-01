import React from "react";


const useDynamicDataForTable = () => {
    const fetchData = React.useCallback(async () => {
        try {
            const response = await fetch('https://localhost:7228/api/Borrow/GetAllBorrows', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to to Get Borrow data.');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error Getting Borrow Data. ', error);
            return null;
        }
    }, []);

    return fetchData;
};

const useBookData = () => {
    const fetchData = React.useCallback(async () => {
        try {
            const response = await fetch('https://localhost:7228/api/Book/GetAllBooks', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to to Get Borrow data.');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            console.error('Error Getting Borrow Data. ', error);
            return null;
        }
    }, []);

    return fetchData;
};

export { useDynamicDataForTable, useBookData };
