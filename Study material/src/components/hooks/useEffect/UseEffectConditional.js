import { useEffect, useState } from "react"

export default function UseEffectConditional() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log('useEffect triggered')
        document.title = `You clicked ${count} times`
    }, [count]); // pass 'count' as a dependency to run useEffect only on changing 'count' value

    return (
        <>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Clicked {count} times</button>
        </>
    )
}