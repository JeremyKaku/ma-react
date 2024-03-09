import { useContext } from "react";
import "./count.css";
import { SquareContext } from "./squareProvider";

export function Count() {
    const { selectedCount, setSelectedCount } = useContext(SquareContext);
    return (
        <div>
            <p className='show-count' >Count:{selectedCount}</p>
        </div>

    );
}

export default Count;