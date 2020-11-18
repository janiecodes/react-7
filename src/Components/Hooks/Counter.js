import React, {useState, useEffect} from 'react';

const Counter = () => {
    //Use state gives us access to state values in a functional component. 
    //const [variable name, function]; ustState(0) - 0 is the initial value
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log(`this is a componentDidMount`)
    }, [])

    //both useEffect() functions will fire together the first time 
    //then useEffect() will fire again only if the count variable changes
    
    useEffect(() => {
        console.log(`this is a componentDidUpdate`)
    }, [count])

    //the second useEffect will fire again when the count variable changes
    //aka when someone pushes either button

const addCount = () => {
    setCount(count + 1)
}

const minusCount = () => {
    setCount(count - 1)
}

//useEffect() can be seen as a combination of lifecycle methods, particularly componentDidMount and componentDidUpdate
//useEffect() is function that takes in two paraments, the first is a callback function and the second is an array
//Something in state or props changes, or re-render
//useEffect() will attempt to fire 
//if we put something in the array, it will only fire if whatever inside of it changes - componentDidUpdate
//we can target which useEffects to fire based on what we put in the array
//if the array is empty it will be similar to a componentDidMount


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={addCount}>Add One</button>
            {/* Another way to write it if you didn't declare an addCount function <button onClick={() => setCount(count+1)}>Add One</button> */}
            <button onClick={minusCount}>Subtract One</button>
        </div>
    )
}



export default Counter