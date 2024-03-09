import React, { createContext, useState, useContext } from 'react';

export const SquareContext = createContext();

export function SquareProvider({ children }) {
    const [selectedCount, setSelectedCount] = useState(0);

    return (
        <SquareContext.Provider value={{ selectedCount, setSelectedCount }}>
            {children}
        </SquareContext.Provider>
    );
}