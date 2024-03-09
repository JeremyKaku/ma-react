import { useState, useContext, createContext } from 'react'
import './squareParentComp.css'
import { SquareContext } from "./squareProvider";
import Box from './boxChildComp';


function Grid() {
    const [selectedCountState, setSelectedCountState] = useState(0);
    // const { selectedCount, setSelectedCount } = useContext(SquareContext);
    const [boxes, setBoxes] = useState(Array(2 * 2).fill(false));
    const handleClick = (index) => {
        const newBoxes = [...boxes];
        newBoxes[index] = !newBoxes[index];
        setBoxes(newBoxes);
        const count = newBoxes.filter(box => box).length;
        setSelectedCountState(count);
    }

    return (
        <div>
            <p className='show-count' >Count:{selectedCountState}</p>
            <div className="container">
                {boxes.map((selected, index) => (
                    <Box
                        key={index}
                        selected={selected}
                        handleClick={() => handleClick(index)}
                    />
                ))}
            </div>
        </div >
    );
}

function SquareParentComp() {
    return (
        <div>
            <Grid />
        </div>
    );

}

export default SquareParentComp;