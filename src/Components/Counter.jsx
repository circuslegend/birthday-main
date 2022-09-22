import React, { useState } from "react";

const Counter = () => {

    let [counter, setCounter]  = useState(0);
    
    function increment(){
        setCounter(++counter);
      }
    
      function decrement(){
        setCounter(--counter);
      }
    

    return (
        <div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1>{counter}</h1>
        </div>
    );
}

export default Counter;