/**
 * useRef hook: Usage 2
 * It can be used to store a mutable value that does not cause a re-render when updated.
 * It lets you hold a reference of the value that’s not needed for rendering.
 * 
 * Usecase 2: Holds a reference of a method
 * Step 1: Define a setInterval within useEffect hook and store it in a variable called 'interval'
 * Now we have to clear the interval on button click. So, if we try to access 'interval' directly from html on button click, it throws error('interval' is not defined). So, to access it, we will need a reference of 'interval'. To do that:
 * Step 2: Create a ref of 'interval' using useRef
 * Step 3: Assign setInterval method to the ref of 'interval' using intervalRef.current 
 * Step 4: On button click, use ntervalRef.current to clear the interval
 */

import React, { useEffect, useRef, useState } from 'react'

function UseRefPart2() {

    const [count, setCount] = useState(0);

    const intervalRef = useRef();

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)

        // To clear interval on componentWillUnmount
        return () => {
            clearInterval(intervalRef.current);
        }
    }, []);

    return (
        <>
            <div>
                Count value - {count}
            </div>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear interval</button>
        </>
    )
}

export default UseRefPart2
