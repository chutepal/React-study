import { useState } from "react"

export default function UseStateBasic() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h2>UseState basic feature</h2>
            <button onClick={() => setCount(count+1)}>Count: {count}</button>
        </>
    )
}