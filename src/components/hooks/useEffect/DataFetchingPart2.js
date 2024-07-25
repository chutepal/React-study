import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DataFetchingPart2() {
    const [inputValue, setInputValue] = useState(1);
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});

    const handleClick = () => {
        setId(inputValue);
    }
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log('res=>', res)
                setPost(res.data);
            })
            .catch(err => console.log('Error:', err))
    }, [id]);

    return (
        <>
            <label>Enter Id:</label>
            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
            <br/>
            <button onClick={() => handleClick()}>Fetch Data</button>
            <ul>
                <li key={post.id}>{post.title}</li>
            </ul>
        </>
    )
}

export default DataFetchingPart2
