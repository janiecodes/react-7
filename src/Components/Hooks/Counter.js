import React, {useState} from 'react';

const Counter = () => {
    //Use state gives us access to state values in a functional component. 
    //const [variable name, function]; ustState(0) - 0 is the initial value
    const [count, setCount] = useState(0)

const addCount = () => {
    setCount(count + 1)
}

const minusCount = () => {
    setCount(count - 1)
}


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>Add One</button>
            <button onClick={minusCount}>Subtract One</button>
        </div>
    )
}



export default Counter