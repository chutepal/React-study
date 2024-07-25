import React, { useEffect, useState } from 'react'

export default function UseEffectBasic() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You have clicked ${count} times`
    })

    return (
        <>
            <button onClick={() => setCount(prevCount => prevCount+1)}>Clicked {count} times</button>
        </>
    )
}
