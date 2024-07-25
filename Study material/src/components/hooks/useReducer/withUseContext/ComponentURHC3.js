import React, { useContext } from 'react'
import { CountContext } from './ParentComponentURH';

function ComponentURHC3() {
    const parentCounter = useContext(CountContext);
    return (
        <div>
            Component C3 count - {parentCounter.count}
            <button onClick={() => parentCounter.action('Increment')}>Increment</button>
            <button onClick={() => parentCounter.action('Decrement')}>Decrement</button>
            <button onClick={() => parentCounter.action('Reset')}>Reset</button>
        </div>
    )
}

export default ComponentURHC3
