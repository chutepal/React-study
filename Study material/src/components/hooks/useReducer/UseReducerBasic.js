import React, { useReducer } from 'react'

// useReducer is used as an alternative for state management

// It's the initial value of count
const initialState = 0;

// It's the reducer function which accepts current state which is count and an action passed by dispatch method
const reducer = (state, action) => {
    switch(action) {
        case 'Increment':
            return state + 1;
        case 'Decrement':
            return state - 1;
        case 'Reset':
            return initialState;
        default:
            return state;
    }
}

function UseReducerBasic() {

    // Here useReducer returns a pair of value which is current state(count) and a dispatch method which capable of taking action as an input to execute reducer method
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('Increment')}>Increment</button>
            <button onClick={() => dispatch('Decrement')}>Decrement</button>
            <button onClick={() => dispatch('Reset')}>Reset</button>
        </>
    )
}

export default UseReducerBasic
