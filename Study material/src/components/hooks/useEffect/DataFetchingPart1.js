import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchingPart1() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log('res=>', res)
                setPosts(res.data)
            })
            .catch(err => console.log('Error:', err))
    }, [])
    return (
       <>
        <ul>
            {
                posts.map(e => <li key={e.id}>{e.title}</li>)
            }
        </ul>
       </> 
    )
}

export default DataFetchingPart1

// ---------------------Other way using loader-------------------

// import axios from 'axios';
// import React, { useEffect, useState } from 'react'


// // Data fetching using useState and useEffect.

// function DataFetching1() {

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

// export default DataFetching1

