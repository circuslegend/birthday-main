import React, { useState } from "react";

const Value = () => {

    let [value, setValue]  = useState('Начальный текст');

    return (
        <div>
            <input 
            type="text" 
            value={value}
            onChange={
            event => setValue(event.target.value) 
            }/>
            <h1>{value}</h1>
        </div>
    );
}

export default Value;