import React, { useReducer } from 'react'

// ----------------------------------Usecase 1 : Example with single object value----------------------------------

// const initialState = {
//     firstCounter: 0
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'Increment':
//             return { firstCounter: state.firstCounter + 1 }
//         case 'Decrement':
//             return { firstCounter: state.firstCounter - 1 }
//         case 'Reset':
//             return initialState
//         default:
//             return state;
//     }
// }

// function UseReducerObject() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <>
//             <div>Count - {count.firstCounter}</div>
//             <button onClick={() => dispatch({type: 'Increment'})}>Increment</button>
//             <button onClick={() => dispatch({type: 'Decrement'})}>Decrement</button>
//             <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
//         </>
//     )
// }

// export default UseReducerObject



// ----------------------------------Usecase 2 : Example with multiple object values----------------------------------

// const initialState = {
//     firstCounter: 0
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'Increment':
//             return { firstCounter: state.firstCounter + action.value }
//         case 'Decrement':
//             return { firstCounter: state.firstCounter - action.value }
//         case 'Reset':
//             return initialState
//         default:
//             return state;
//     }
// }

// function UseReducerObject() {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <>
//             <div>Count - {count.firstCounter}</div>
//             <button onClick={() => dispatch({type: 'Increment', value: 2})}>Increment by 2</button>
//             <button onClick={() => dispatch({type: 'Decrement', value: 2})}>Decrement by 2</button>
//             <button onClick={() => dispatch({type: 'Increment', value: 5})}>Increment by 5</button>
//             <button onClick={() => dispatch({type: 'Decrement', value: 3})}>Decrement by 3</button>
//             <button onClick={() => dispatch({type: 'Reset'})}>Reset</button>
//         </>
//     )
// }

// export default UseReducerObject



// ----------------------------------Usecase 3 : Example with multiple counter----------------------------------

const initialState = {
    firstCounter: 0,
    secondCounter: 0
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'Increment1':
            return { ...state, firstCounter: state.firstCounter + 1 }
        case 'Decrement1':
            return { ...state, firstCounter: state.firstCounter - 1 }
        case 'Reset1':
            return { ...state, firstCounter: initialState.firstCounter }
        case 'Increment2':
            return { ...state, secondCounter: state.secondCounter + 1 }
        case 'Decrement2':
            return { ...state, secondCounter: state.secondCounter - 1 }
        case 'Reset2':
            return { ...state, secondCounter: initialState.secondCounter }
        default:
            return state;
    }
}

function UseReducerObject() {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <div>Count 1 - {count.firstCounter}</div>
                <button onClick={() => dispatch({ type: 'Increment1' })}>Increment counter 1</button>
                <button onClick={() => dispatch({ type: 'Decrement1' })}>Decrement counter 1</button>
                <button onClick={() => dispatch({ type: 'Reset1' })}>Reset counter 1</button>
            </div>
            <div>
            <div>Count 2 - {count.secondCounter}</div>
                <button onClick={() => dispatch({ type: 'Increment2' })}>Increment counter 2</button>
                <button onClick={() => dispatch({ type: 'Decrement2' })}>Decrement counter 2</button>
                <button onClick={() => dispatch({ type: 'Reset2' })}>Reset counter 2</button>
            </div>
        </>
    )
}

export default UseReducerObject
