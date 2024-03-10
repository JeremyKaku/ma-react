import './boxChildComp.css';

function Box({ selected, handleClick }) {

    return (
        <div className={`box ${selected ? 'selected' : ''
            } `} onClick={handleClick}>
        </div>
    )
}

export default Box;