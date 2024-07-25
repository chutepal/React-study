import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Basic() {

    // const [obj, setObj] = useState({
    //     "userId": 0,
    //     "firstName": "John",
    //     "middleName": "A",
    //     "lastName": "Demo",
    //     "mobileNo": "1234567656",
    //     "emailId": "accured@gmail.com",
    //     "altMobileNo": "string",
    //     "password": "password",
    //     "userAddress": {
    //       "city": "a",
    //       "state": "c",
    //       "pincode": "123456",
    //       "addressLine": "string"
    //     },
    //     "userSocialDetails": {
    //       "facebookProfileUrl": "string",
    //       "linkdinProfileUrl": "string",
    //       "instagramHandle": "string",
    //       "twitterHandle": "string"
    //     }
    //   });

    const [username, setUsername] = useState('accured@gmail.com');
    const [password, setPassword] = useState('password');
    const [token, setToken] = useState('');
    const [refreshToken, setRefreshToken] = useState('')

    const setCookie = (name, val) => {
        const date = new Date();
        const value = val;

        // Set it expire in 7 days
        // date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000));

        // Set it
        // document.cookie = name+"="+value+"; expires="+date.toUTCString()+"; path=/";
        document.cookie = name + "=" + value + ";";
    }

    // const registerUser = () => {
    //     axios.post('CreateNewUser', obj)
    //     .then(res => {
    //         console.log('res=>', res)
    //     })
    // }

    const loginUser = async (e) => {
        e.preventDefault();
        const credentials = {
            'EmailId': 'accure@gmail.com',
            'Password': 'password'
        };
        const { data } = await axios.post('login', credentials)

        setRefreshToken(data.data.refreshToken)
        setToken(data.data.token)

        // set cookies
        setCookie('refreshToken', data.data.refreshToken)
        setCookie('emailId', username)
        setCookie('token', token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
    }

    const getData = () => {
        axios.get('GetAllUsers')
            .then(res => {
                console.log('GET response=>', res)
            })
            .catch(err => console.log('GET err=>', err))
    }

    return (
        <>
            {/* <button onClick={() => registerUser()}>Create user</button> */}
            <input type='text' value={username} onChange={e => setUsername(e.target.value)} placeholder='User email' /><br />
            <input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' /><br />
            <button onClick={(e) => loginUser(e)}>Login</button>
            <br />
            <br />
            <button onClick={() => getData()}>Get data</button>
        </>
    )
}

export default Basic
