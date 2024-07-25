import { useState } from "react"

export default function UseStateArray() {
    const [items, setItems] = useState([]);
    return (
        <>
            <h2>UseState with array type</h2>
            <button onClick={() => setItems([...items, 1])}>Push 1</button>
            <button onClick={() => setItems([...items, 2, 3])}>Push 2,3</button>
            <br/>
            <span>Array: {items}</span>
        </>
    )
}