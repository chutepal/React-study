import { useState } from "react"

export default function UseStatePreviousVal() {
    const [count, setCount] = useState(0);

    function incrementBy(val) {
        for(let i=0; i<val; i++) {
            setCount(prev => prev+1)
        }
    }
    return (
        <>
            <h2>Using UseState with Previous value</h2>
            <button onClick={() => incrementBy(4)}>Increment By 4</button>
            <button onClick={() => incrementBy(2)}>Increment By 2</button>
            <p>Count: {count}</p>
        </>
    )
}