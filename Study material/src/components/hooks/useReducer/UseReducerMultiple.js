import React, { useReducer } from 'react'

// Example shown here is simpler way of writing usecase 3 written in UseReducerObject.js

const initialState = 0;

const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return initialState;
    }
}

function UseReducerMultiple() {

    const [count1, dispatch1] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <div>Count 1 - {count1}</div>
                <div>
                    <button onClick={() => dispatch1('Increment')}>Increment</button>
                    <button onClick={() => dispatch1('Decrement')}>Decrement</button>
                    <button onClick={() => dispatch1('Reset')}>Reset</button>
                </div>
            </div>
            <div>
                <div>Count 2 - {count2}</div>
                <div>
                    <button onClick={() => dispatch2('Increment')}>Increment</button>
                    <button onClick={() => dispatch2('Decrement')}>Decrement</button>
                    <button onClick={() => dispatch2('Reset')}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default UseReducerMultiple
