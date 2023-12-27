import { useState } from 'react';

export default function NewAssumption({ onAdd }) {

    const [ enteredAssumption, setEnteredAssumption ] = useState();

    function handleChange(event) {
        setEnteredAssumption(event.target.value);
    }

    function handleClick() {
        onAdd(enteredAssumption);

    }

    return (
        <div className="flex items-center gap-4">
            <input 
                type="text" 
                className="w-64 px-2 py-1 rounded-sm bg-stone-200" 
                onChange={handleChange}
            />
            <button 
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                Add Assumption
            </button>
        </div>
    )
}