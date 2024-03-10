import { useContext } from 'react'
import './squareParentComp.css'
import { SquareContext } from "./squareProvider";
import Box from './boxChildComp';


function Grid() {
    const { contextValue } = useContext(SquareContext);

    return (
        <div>
            <p className='show-count' >Count:{contextValue.selectedCountState}</p>
            <div className="container">
                {contextValue.boxes.map((selected, index) => (
                    <Box
                        key={index}
                        selected={selected}
                        handleClick={() => contextValue.handleClick(index)}
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