/**
 * useRef hook: Usage 1
 * useRef hook makes it possible to access Dom nodes directly within functional components
 * 
 * Usecase 1: Focus name input on initial load
 * Solution: Use useRef hook to capture the reference of desired input element
 */

import React, { useEffect, useRef } from 'react'

function UseRefPart1() {

    const nameRef = useRef(null); // Initial value is set to null

    // useEffect hook to set the focus on initial render
    useEffect(() => {
        // focus the name input element
        nameRef.current.focus();
    }, []);

    return (
        <>
            <div>
                <label>Name:</label>
                <input type='text' ref={nameRef} />
            </div>
            <div>
                <label>Password:</label>
                <input type='password' />
            </div>
        </>
    )
}

export default UseRefPart1
