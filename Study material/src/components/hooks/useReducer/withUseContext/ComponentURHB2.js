import React, { useContext } from 'react';
import { CountContext } from './ParentComponentURH';

function ComponentURHB2() {
    // Use useContext hook to access the context provided by the parent component
    const parentCounter = useContext(CountContext);

    return (
        <div>
            {/* Display the current count from the parent context */}
            Component B2 count - {parentCounter.count}

            {/* Button to increment the count */}
            <button onClick={() => parentCounter.action('Increment')}>Increment</button>

            {/* Button to decrement the count */}
            <button onClick={() => parentCounter.action('Decrement')}>Decrement</button>

            {/* Button to reset the count */}
            <button onClick={() => parentCounter.action('Reset')}>Reset</button>
        </div>
    );
}

export default ComponentURHB2;

