import React, { useReducer } from 'react'
import ComponentURHA1 from './ComponentURHA1'
import ComponentURHB1 from './ComponentURHB1'
import ComponentURHC1 from './ComponentURHC1'

/**
 * This component implements the global state management using useReducer and useState
 * Here global state which is count value is maintained at highest parent level i.e. ParentComponentURH.js
 * 
 *                                          ParentComponentURH
 *                                                  |
 *                                                  |
 *          ------------------------------------------------------------------------------------
 *          |                                       |                                           |
 *          |                                       |                                           |
 *    ComponentURHA1                         ComponentURHB1                              ComponentURHC1
 *                                                  |                                           |
 *                                                  |                                           |
 *                                           ComponentURHB2                              ComponentURHC2
 *                                                                                              |
 *                                                                                              |
 *                                                                                       ComponentURHC3
 * 
 * Component tree structure is shown as above:
 * To manage count state gloablly for this tree structure, we will create a counter using useReducer hook and pass it down the tree nodes using useContext.
 */

// Initial state for the reducer
const initialState = 0;

// Reducer function to manage state changes based on actions
const reducer = (state, action) => {
    switch (action) {
        case 'Increment':
            return state + 1; // Increment the state by 1
        case 'Decrement':
            return state - 1; // Decrement the state by 1
        case 'Reset':
            return initialState; // Reset the state to initial value
        default:
            return state; // Return current state if action is not recognized
    }
}

// Create a context for sharing state and dispatch function
export const CountContext = React.createContext();

function ParentComponentURH() {
    // Use useReducer hook to manage state and dispatch actions
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            {/* Display the current count at the parent level */}
            Count at parent level - {count}
            
            {/* Provide the count and dispatch function to the context */}
            <CountContext.Provider value={{ count: count, action: dispatch }}>
                {/* Render child components that can consume the context */}
                <ComponentURHA1 />
                <ComponentURHB1 />
                <ComponentURHC1 />
            </CountContext.Provider>
        </div>
    )
}

export default ParentComponentURH;
