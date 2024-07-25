import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react'


// // Data fetching using useState and useEffect.

// function DataFetching() {

//     const [loading, setLoading] = useState(true);
//     const [post, setPost] = useState({})
//     const [error, setError] = useState('');

//     useEffect(() => {
//         // Added setTimeout just to see the Loader
//         setTimeout(() => {
//             axios.get('https://jsonplaceholder.typicode.com/posts/1')
//                 .then((response) => {
//                     setLoading(false);
//                     setError('');
//                     setPost(response.data);
//                 })
//                 .catch(() => {
//                     setLoading(false);
//                     setError('Something went wrong!');
//                     setPost({});
//                 })
//         }, 1000)
//     }, []);

//     return (
//         <>
//             {loading ? 'Loading...' : post.title}
//             {error ? error : null}
//         </>
//     )
// }

// export default DataFetching


// Data fetching using useEffect and useReducer - With the help of useReducer we can group the states and update all together

// Initial state object
const initialState = {
    post: {},
    error: '',
    loading: true
};

// Reducer function to manage the state transitions based on action types
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                post: action.payload,
                error: '',
                loading: false
            };
        case 'FETCH_FAILED':
            return {
                post: {},
                error: action.error,
                loading: false
            };
        default:
            return state;
    }
};

function DataFetching() {
    // useReducer hook to manage the component's state using the reducer function and initial state
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // Added setTimeout just to see the Loader
        setTimeout(() => {
            // Fetch data from the API endpoint
            axios.get('https://jsonplaceholder.typicode.com/posts/10')
                .then((response) => {
                    // Dispatch the FETCH_SUCCESS action with the fetched data as payload
                    dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
                })
                .catch(() => {
                    // Dispatch the FETCH_FAILED action with an error message
                    dispatch({ type: 'FETCH_FAILED', error: 'Something went wrong!' });
                });
        }, 1000);
    }, []); // Empty dependency array to run the effect only once on component mount

    return (
        <>
            {/* Display loading message while fetching data */}
            {state.loading ? 'Loading...' : state.post.title}

            {/* Display error message if there's an error */}
            {state.error ? state.error : null}
        </>
    );
}

export default DataFetching;
