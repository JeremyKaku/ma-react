import React, { createContext, useState } from 'react';

export const SquareContext = createContext();

export function SquareProvider({ children }) {
    const [boxes, setBoxes] = useState(Array(2 * 2).fill(false));
    const [selectedCountState, setSelectedCountState] = useState(0);

    const handleClick = (index) => {
        const newBoxes = [...boxes];
        newBoxes[index] = !newBoxes[index];
        setBoxes(newBoxes);
        const count = newBoxes.filter(box => box).length;
        setSelectedCountState(count);
    }

    const contextValue = {
        boxes,
        selectedCountState,
        handleClick,
    };

    return (
        <SquareContext.Provider value={{ contextValue }}>
            {children}
        </SquareContext.Provider>
    );
}