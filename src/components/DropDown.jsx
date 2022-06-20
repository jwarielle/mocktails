import React, {useState} from 'react';

function DropDown(props) {
    let [selection, setSelection] = useState("All"); 

    function updateSelection(event) {
        let value = event.target.value;
        setSelection(value);
        props.onFilter(value);
    }

    return (
        <div>
            <select onChange={updateSelection} name="mocktails" id="mocktails">
                <option name="all" value="all">Select Your Mood</option>
                <option name="happy" value="happy">Happy</option>
                <option name="angry" value="angry">Angry</option>
                <option name="sad" value="sad">Sad</option>
                <option name="cozy" value="cozy">Cozy</option>
                <option name="boring" value="boring">Boring</option>
            </select>
        </div>
    )
}

export default DropDown;